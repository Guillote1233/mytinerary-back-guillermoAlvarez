import Joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
  min: 8,
  max: 20,
  lowerCase: 1,
  upperCase: 1,
  symbol: 1,
  numeric: 1,
  requirementCount: 5,
};

export const signInSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Please fill the email field",
    "any.required":"Email field is required",
    "string.email":"Wrong email format(@ and .com required)"
  }),
  password: joiPwd(complexityOptions).messages({
    
  }),
});