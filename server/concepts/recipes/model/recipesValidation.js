import Joi from "joi-oid";

const validateRecipe = (recipe) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().max(500).required(),
    ingredients: Joi.array().max(40).required(),
    preparation: Joi.string().max(500).required(),
    category: Joi.objectId().required(),
    image: Joi.array().items(
      Joi.object({
        url: Joi.string().required(),
        isMainPhoto: Joi.boolean().required(),
      })
    ),
  });

  return schema.validate(recipe);
};

export default validateRecipe;
