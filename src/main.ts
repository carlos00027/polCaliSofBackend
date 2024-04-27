import express, { Request, Response } from "express"
import cors from 'cors'

import { OperacionController } from "./controllers/operacionController"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req:Request,res:Response)=>{
  res.json({message: 'hola microservicio'})
})


app.post('/api/resolver',OperacionController.run)

app.listen(3010,()=>{
  console.log('escuchando en http://localhost:3010')
})

console.log('hola mundoi')
