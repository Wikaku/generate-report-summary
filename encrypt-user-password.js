// Mã hóa mật khẩu người dùng
function encryptPassword(password) {
  return `***${password.split('').reverse().join('')}***`;
}
