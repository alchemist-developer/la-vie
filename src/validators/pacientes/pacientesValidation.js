const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    nome_paciente: Joi.string().required(),
    email: Joi.string().email().required(),
    idade: Joi.date().required()
  }),
});
