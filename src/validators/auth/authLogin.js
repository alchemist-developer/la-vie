const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    senha_psicologo: Joi.string().required()
  }),
});
