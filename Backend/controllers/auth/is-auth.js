const jwt = require('jsonwebtoken');
const HttpError = require('../../models/http-error');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    throw new HttpError('Not authenticated.',401);
    
  }
  const token = authHeader.split(' ')[1];
  let decodedToken= jwt.verify(token, process.env.SECRET_KEY);
  
  if (!decodedToken) {
    throw new HttpError('Not authenticated.',401);
  }
  req.userId = decodedToken.userId;
  next();
};



