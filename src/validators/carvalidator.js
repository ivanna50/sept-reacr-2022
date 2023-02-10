import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/ ^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
    price: Joi.number().max(0).min(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()

});

export {carValidator};