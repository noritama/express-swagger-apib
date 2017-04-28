/**
 * create
 *
 * POST: /users
 * 
 * body:
 *   email {string} メールアドレス（format: email）.
 *   password {string} パスワード（pattern: ^[0-9A-Za-z]{6,16}$）.
 *   
 */
exports.handler = function usercreate(req, res, next) {
  res.send('usercreate')
  next()
}
