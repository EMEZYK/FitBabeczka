import Joi from "joi-oid";

const validateRecipe = (recipe) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().max(500).required(),
    ingredients: Joi.array().items(Joi.string()).max(40).required(),
    preparation: Joi.string().max(500).required(),
    category: Joi.objectId().required(),
    // image: Joi.string().allow("").optional(),
    image: Joi.optional(),
    time: Joi.string().required(),
    difficultyLevel: Joi.string().required(),
    servingsNumber: Joi.number().required(),
  });

  return schema.validate(recipe);
};

export default validateRecipe;
// image: Joi.array().items(
//   Joi.object({
//     url: Joi.string().required(),
//     isMainPhoto: Joi.boolean().required(),
//   })
// ),
