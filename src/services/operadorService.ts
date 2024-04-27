export type TOperador = "sumar" | "restar" | "dividir" | "multiplicar"

export class OperadorService {
  run(num1: number, num2: number, operador: TOperador):string {
    let tmp:string = ""
    if (operador === "sumar"){
      tmp  = (num1 + num2).toString()
    } else if(operador === "restar"){
      tmp  = (num1 - num2).toString()
    } else if(operador === "multiplicar"){
      tmp  = (num1 * num2).toString()
    } else if(operador === "dividir"){
      tmp  = (num1 / num2).toString()
    }

    return tmp
  }
}