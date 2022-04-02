import Joi from "joi-oid";

const validateCreateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),

    email: Joi.string()
      .min(6)
      .max(255)
      .required()
      .email({ minDomainSegments: 2 }),

    password: Joi.string().min(6).max(255).required(),

    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
  });

  return schema.validate(user);
};

export default validateCreateUser;
