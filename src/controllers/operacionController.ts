import { Request, Response } from "express";
import Joi from "joi";
import { OperadorService, type TOperador } from "../services/operadorService";

export type TBody = {
  num1: number;
  num2: number;
  operador: string;
}

export class OperacionController {
  static run = (req: Request, res: Response) => {
    const body: TBody = req.body as TBody
    const { error } = Joi.object().keys({
      num1: Joi.number().required(),
      num2: Joi.number().required(),
      operador: Joi.string().required()
    }).options({
      abortEarly: false,
    }).validate(body)
    if (error) {
      return res.status(422).json({ message: error.message })
    }
    const tmp = new OperadorService().run(body.num1, body.num2, body.operador as TOperador)
    return res.json({ resultado: +tmp })
  }
}