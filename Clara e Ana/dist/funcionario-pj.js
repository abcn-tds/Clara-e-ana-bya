"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioPJ = void 0;
const funcionario_1 = require("./funcionario");
class FuncionarioPJ extends funcionario_1.Funcionario {
    constructor(nome, cpf, id, valorHora, horasTrabalhadas) {
        super(nome, cpf, id, 0);
        this.validarValorHora(valorHora);
        this.validarHoras(horasTrabalhadas);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    validarValorHora(valorHora) {
        if (valorHora <= 0) {
            throw new Error("O valor da hora precisa ser positivo.");
        }
    }
    validarHoras(horas) {
        if (horas < 0) {
            throw new Error("Horas trabalhadas não podem ser negativas.");
        }
        if (horas > 220) {
            throw new Error("Horas trabalhadas não podem exceder 220 horas.");
        }
    }
    getValorHora() {
        return this.valorHora;
    }
    getHorasTrabalhadas() {
        return this.horasTrabalhadas;
    }
    setValorHora(valorHora) {
        this.validarValorHora(valorHora);
        this.valorHora = valorHora;
    }
    setHorasTrabalhadas(horas) {
        this.validarHoras(horas);
        this.horasTrabalhadas = horas;
    }
    calcularSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
    getTipo() {
        return "PJ";
    }
}
exports.FuncionarioPJ = FuncionarioPJ;
