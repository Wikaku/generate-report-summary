// Kiểm tra cấu trúc đầu vào
function validateSchema(input) {
  return input.hasOwnProperty("id") && input.hasOwnProperty("name");
}
