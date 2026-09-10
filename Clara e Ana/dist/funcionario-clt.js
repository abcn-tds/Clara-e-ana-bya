"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioCLT = void 0;
const funcionario_1 = require("./funcionario");
class FuncionarioCLT extends funcionario_1.Funcionario {
    constructor(nome, cpf, id, salarioBase, bonusAnual) {
        super(nome, cpf, id, salarioBase);
        if (bonusAnual < 0) {
            throw new Error("Bônus anual não pode ser negativo.");
        }
        this.bonusAnual = bonusAnual;
    }
    getBonusAnual() {
        return this.bonusAnual;
    }
    setBonusAnual(bonusAnual) {
        if (bonusAnual < 0) {
            throw new Error("Bônus anual não pode ser negativo.");
        }
        this.bonusAnual = bonusAnual;
    }
    calcularSalario() {
        return this.getSalarioBase() + this.bonusAnual / 12;
    }
    getTipo() {
        return "CLT";
    }
}
exports.FuncionarioCLT = FuncionarioCLT;
