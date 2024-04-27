"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const operacionController_1 = require("./controllers/operacionController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({ message: 'hola microservicio' });
});
app.post('/api/resolver', operacionController_1.OperacionController.run);
app.listen(3000, () => {
    console.log('escuchando en http://localhost:3000');
});
console.log('hola mundoi');
