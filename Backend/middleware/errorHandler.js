const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}


const errorHandler = (err, req, res, next) => {
  const statusCode = res.statuscode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" ) {
    message = `Resource not found with id of ${err.value}`;
    
  }
  res.status(statusCode || 500).json({
    message:message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });


}

export { errorHandler, notFound };