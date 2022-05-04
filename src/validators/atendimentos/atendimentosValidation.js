const {validate, Joi} = require ('express-validation');

module.exports = validate ({
    body: Joi.object({
        paciente_psicologos: Joi.number().required(),
        data_atendimento: Joi.date().required(),
        observacao: Joi.string().required(),
    })
})