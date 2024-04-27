"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperacionController = void 0;
const joi_1 = __importDefault(require("joi"));
const operadorService_1 = require("../services/operadorService");
class OperacionController {
}
exports.OperacionController = OperacionController;
OperacionController.run = (req, res) => {
    const body = req.body;
    const { error } = joi_1.default.object().keys({
        num1: joi_1.default.number().required(),
        num2: joi_1.default.number().required(),
        operacion: joi_1.default.string().required()
    }).options({
        abortEarly: false,
    }).validate(body);
    if (error) {
        return res.status(422).json({ message: error.message });
    }
    const tmp = new operadorService_1.OperadorService().run(body.num1, body.num2, body.operacion);
    return res.json({ resultado: tmp });
};
