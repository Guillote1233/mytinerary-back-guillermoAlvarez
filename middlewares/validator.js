
const validator = (schema) => (req, res, next) => {
  const validation = schema.validate(req.body ,{ abortEarly: true });

  if (validation.error){
    return
  }
  return next();
};

export default validator