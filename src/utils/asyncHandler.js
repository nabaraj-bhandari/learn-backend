// HIGHER ORDER FUNCTION (function which treat function as a parameter)
// const asyncHandler = (fn) => {() => {}}

// USING PROMISES
// requestHandler is just a name like fn
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

// USING TRY CATCH
/*
const asyncHandler = (fn) => {
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message,
      });
    }
  };
};
*/

export { asyncHandler };
