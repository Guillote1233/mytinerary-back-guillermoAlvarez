import Joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
    min: 8,
    max: 20,
    lowerCase: 1,
    upperCase: 1,
    symbol: 1,
    numeric: 1,
    requirementCount: 5
}

export const signUpSchema = Joi.object({
    name: Joi.string().required().min(2).max(15),
    surname: Joi.string().required().min(2).max(20),
    email: Joi.string().required(),
    password: joiPwd(complexityOptions),
    profilePicture: Joi.string().uri(),
    country: Joi.string().required()
})