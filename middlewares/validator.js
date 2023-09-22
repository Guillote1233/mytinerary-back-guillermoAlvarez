
const validator = (schema) => (req, res, next) => {
  const validation = schema.validate(req.body ,{ abortEarly: true });

  if (validation.error){
    return res.status(404).json({
      success:false,
      error: validation.error.details[0].message
    })
  }
  return next();
};

export default validator