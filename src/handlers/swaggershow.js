/**
 * show
 *
 * GET: /swagger.json
 * 
 */
exports.handler = function swaggershow(req, res, next) {
  res.send('swaggershow')
  next()
}
