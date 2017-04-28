/**
 * show
 *
 * GET: /users/{userId}
 * 
 * path:
 *   userId {number} ユーザID.
 *   
 */
exports.handler = function usershow(req, res, next) {
  res.send('usershow')
  next()
}
