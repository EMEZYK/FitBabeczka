import Joi from "joi-oid";

const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
  });
  return schema.validate(category);
};

export default validateCategory;
