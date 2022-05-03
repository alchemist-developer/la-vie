const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    nome_psicologo: Joi.string().required(),
    email: Joi.string().email().required(),
    senha_psicologo: Joi.string().min(6).required(),
    apresentacao: Joi.string().required()
  }),
});
