"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperadorService = void 0;
class OperadorService {
    run(num1, num2, operador) {
        let tmp = "";
        if (operador === "sumar") {
            tmp = (num1 + num2).toString();
        }
        else if (operador === "restar") {
            tmp = (num1 - num2).toString();
        }
        else if (operador === "multiplicar") {
            tmp = (num1 * num2).toString();
        }
        else if (operador === "dividir") {
            tmp = (num1 / num2).toString();
        }
        return tmp;
    }
}
exports.OperadorService = OperadorService;
