use emblem_core::{
    ast::{Dash, Glue},
    DocElem,
};

pub struct HtmlBuilder {
    content: String,
}

impl HtmlBuilder {
    pub fn new() -> Self {
        HtmlBuilder {
            content: String::new(),
        }
    }

    pub fn build(&mut self, content: &DocElem) {
        match content {
            DocElem::Content(contents) => {
                if let Some(c) = contents.iter().next() {
                    self.build(c);
                    for window in contents.windows(2) {
                        if !matches!(&window[0], DocElem::Glue { .. })
                            && !matches!(&window[1], DocElem::Glue { .. })
                        {
                            self.content.push_str(" ");
                        }
                        self.build(&window[1]);
                    }
                }
            }
            DocElem::Word { word, .. } => {
                html_escape::encode_safe_to_string(word.as_str(), &mut self.content);
            }
            DocElem::Dash { dash, .. } => self.content.push_str(match dash {
                Dash::Hyphen => "-",
                Dash::En => "–",
                Dash::Em => "—",
            }),
            DocElem::Glue { glue, .. } => match glue {
                Glue::Tight => {}
                Glue::Nbsp => self.content.push_str("&nbsp;"),
            },
            DocElem::Command {
                name, attrs, args, ..
            } => {
                let known_command = matches!(
                    name.as_str(),
                    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "ul" | "li"
                );
                self.content.push_str("<");
                if known_command {
                    self.content.push_str(name.as_str());
                } else {
                    self.content.push_str("span");
                }

                if attrs.as_ref().map_or(true, |attrs| {
                    !attrs.args().iter().any(|arg| arg.name() == "class")
                }) {
                    self.content.push_str(" class=\"");
                    self.content.push_str(name.as_str());
                    self.content.push_str("\"");
                }

                if let Some(attrs) = attrs {
                    for arg in attrs.args() {
                        self.content.push_str(" ");

                        self.content.push_str(arg.name());
                        if let Some(value) = arg.value() {
                            self.content.push_str("=\"");
                            self.content.push_str(value);
                            if arg.name() == "class" {
                                self.content.push_str(" ");
                                self.content.push_str(name.as_str());
                            }
                            self.content.push_str("\"");
                        }
                    }
                }

                self.content.push_str(">");

                for arg in args.iter() {
                    self.build(arg);
                }

                self.content.push_str("</");
                if known_command {
                    self.content.push_str(name.as_str());
                } else {
                    self.content.push_str("span");
                }
                self.content.push_str(">");
            }
        }
    }

    pub fn complete(self) -> String {
        self.content
    }
}
