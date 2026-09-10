"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioTerceirizado = void 0;
const funcionario_1 = require("./funcionario");
class FuncionarioTerceirizado extends funcionario_1.Funcionario {
    constructor(nome, cpf, id, salarioBase, taxaAdicional) {
        super(nome, cpf, id, salarioBase);
        this.validarTaxa(taxaAdicional);
        this.taxaAdicional = taxaAdicional;
    }
    validarTaxa(taxa) {
        if (taxa < 0 || taxa > 100) {
            throw new Error("A taxa adicional deve estar entre 0% e 100%.");
        }
    }
    getTaxaAdicional() {
        return this.taxaAdicional;
    }
    setTaxaAdicional(taxa) {
        this.validarTaxa(taxa);
        this.taxaAdicional = taxa;
    }
    calcularSalario() {
        return this.getSalarioBase() +
            this.getSalarioBase() * (this.taxaAdicional / 100);
    }
    getTipo() {
        return "Terceirizado";
    }
}
exports.FuncionarioTerceirizado = FuncionarioTerceirizado;
