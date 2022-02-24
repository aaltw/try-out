pub fn my_rust_lib() -> String {
    "my_rust_lib".into()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(my_rust_lib(), "my_rust_lib".to_string());
    }
}
