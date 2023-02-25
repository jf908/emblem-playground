// use crate::html::HtmlBuilder;
// use emblem::parser;
// use emblem::Context;
use wasm_bindgen::prelude::*;

// mod html;

#[wasm_bindgen]
pub fn build(data: String) -> Result<Box<[JsValue]>, String> {
    Ok(vec![
        JsValue::from_str(&"test"),
        JsValue::from_str(&format!("{:#?}", "test")),
    ]
    .into_boxed_slice())

    // let mut ctx = Context::new();

    // match parser::parse("main.em", &data) {
    //     Ok(d) => {
    //         let mut builder = HtmlBuilder::new();
    //         for p in d.pars.iter() {
    //             builder.build_parpart(p);
    //         }

    //         Ok(vec![
    //             JsValue::from_str(&builder.complete()),
    //             JsValue::from_str(&format!("{:#?}", d)),
    //         ]
    //         .into_boxed_slice())
    //     }
    //     Err(e) => Err(e.to_string()),
    // }
}
