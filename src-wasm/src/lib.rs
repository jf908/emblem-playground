use crate::html::HtmlBuilder;
use emblem_core::log::messages::Message;
use emblem_core::parser;
use emblem_core::Doc;
use wasm_bindgen::prelude::*;

mod html;

#[wasm_bindgen(getter_with_clone)]
pub struct EmblemError {
    pub message: String,
    pub locations: Box<[usize]>,
}

#[wasm_bindgen]
pub fn build(data: String) -> Result<Box<[JsValue]>, EmblemError> {
    match parser::parse("main.em", &data) {
        Ok(d) => {
            let doc: Doc = d.into();

            let mut builder = HtmlBuilder::new();
            builder.build(&doc);

            Ok(vec![
                JsValue::from_str(&builder.complete()),
                JsValue::from_str(&format!("{:#?}", doc)),
            ]
            .into_boxed_slice())
        }
        Err(e) => {
            let log = e.log();
            Err(EmblemError {
                message: log.msg().to_owned(),
                locations: log
                    .srcs()
                    .iter()
                    .map(|src| {
                        let loc = src.loc();
                        let lines = loc.lines();
                        let cols = loc.cols();
                        [lines.0, cols.0, lines.1, cols.1]
                    })
                    .flatten()
                    .collect(),
            })
        }
    }
}
