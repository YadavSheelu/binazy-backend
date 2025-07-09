const ErrorHandler = require("../utils/errorhander");

module.exports = (err,req, res,next)=>{
 err.statusCode = err.statusCode || 500;
 err.message = err.message || "Internal Server Error";


  // Wrong MongoDb Id error
  if(err.name === "CastError"){
   const message = `Resource not fount. Invalid ID: ${err.value}`;
   err = new ErrorHandler(message,404);
}

// The email address has  already been registered
if(err.code === 11000){
   const message = ` The ${Object.keys(err.keyValue)} address has  already been registered`
   err = new ErrorHandler(message,404);
}

 // Wrong JWT error
 if(err.name === "JsonWebTokenError"){
   const message = `Json Web Token is invalid, please try again`;
   err = new ErrorHandler(message,404);
}
//   JWT EXPIRE error
 if(err.name === "TokenExpiredError"){
   const message = `Json Web Token is Expired, please try again`;
   err = new ErrorHandler(message,404);
}
  

 res.status(err.statusCode).json({
    success: false,
    message: err.message,
 })

}