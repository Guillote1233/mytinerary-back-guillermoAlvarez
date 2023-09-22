import Joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
  min: 8,
  max: 20,
  lowerCase: 1,
  upperCase: 1,
  symbol: 1,
  numeric: 1,
  requirementCount: 4,
};

export const signUpSchema = Joi.object({
  name: Joi.string().required().min(2).max(30).messages({
    "string.empty": "Please fill the name field",
    "any.required":"Name field is required",
    "string.min":"Name too short, please enter at least 2 characters",
    "string.max": "Name too long, please limit to 30 characters"
  }),
  surname: Joi.string().required().min(2).max(30).messages({
    "string.empty": "Please fill the surname field",
    "any.required":"Surname field is required",
    "string.min":"Surname too short, please enter at least 2 characters",
    "string.max": "Surname too long, please limit to 30 characters"
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Please fill the email field",
    "any.required":"Email field is required",
    "string.email":"Wrong email format(@ and .com required)"
  }),
  password: joiPwd(complexityOptions).required(),
  profilePicture: Joi.string().uri().optional(),
  country: Joi.string().required(),
});
