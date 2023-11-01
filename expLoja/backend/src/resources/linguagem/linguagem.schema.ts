import Joi from "joi";

const linguagemSchema = Joi.object().keys({
    lang: Joi.string().valid("pt-br", "en-us").required(),
});

export default linguagemSchema;