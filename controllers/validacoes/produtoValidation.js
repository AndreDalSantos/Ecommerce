const BaseJoi = require("joi");
const Extension = require("joi-date-extensions");
const Joi = BaseJoi.extend(Extension);

const ProdutoValidation = {
    store: {
        body: {
            titulo: Joi.string().required(),
            descricao: Joi.string().required(),
            categoria: Joi.string().alphanum().length(24).required(),
            preco: Joi.number().required(),
            promocao: Joi.number().optional(),
            sku: Joi.string().required()
        }
    },
    update: {
        params: {
            id: Joi.string().alphanum().length(24).required()
        },
        body: {
            titulo: Joi.string().optional(),
            descricao: Joi.string().optional(),
            categoria: Joi.string().alphanum().length(24).optional(),
            preco: Joi.number().optional(),
            promocao: Joi.number().optional(),
            sku: Joi.string().optional(),
            disponibilidade: Joi.boolean().optional()
        }
    },
    updateImages: {
        params: {
            id: Joi.string().alphanum().length(24).required()
        }
    },
    remove: {
        params: {
            id: Joi.string().alphanum().length(24).required()
        }
    },
    index: {
        query: {
            loja: Joi.string().alphanum().length(24).required(),
            limit: Joi.number().optional(),
            offset: Joi.number().optional(),
            sortType: Joi.string().optional()
        }
    },
    indexDisponiveis: {
        query: {
            loja: Joi.string().alphanum().length(24).required(),
            limit: Joi.number().optional(),
            offset: Joi.number().optional(),
            sortType: Joi.string().optional()
        }
    },
    search: {
        query: {
            loja: Joi.string().alphanum().length(24).required(),
            limit: Joi.number().optional(),
            offset: Joi.number().optional(),
            sortType: Joi.string().optional()
        },
        params: {
            search: Joi.string().required()
        }
    },
    show: {
        params: {
            id: Joi.string().alphanum().length(24).required()
        }
    }
};
 
module.exports = { ProdutoValidation };