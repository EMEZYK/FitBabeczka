import Joi from "joi-oid";

const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.array().items(
      Joi.object({
        url: Joi.string().required(),
      })
    ),
  });
  return schema.validate(category);
};

export default validateCategory;
