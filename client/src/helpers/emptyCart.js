function emptyCart() {
  fetch('/empty_cart', {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
}

export default emptyCart