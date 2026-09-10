"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, cpf, id, salarioBase) {
        this.validarNome(nome);
        this.validarCpf(cpf);
        this.validarSalario(salarioBase);
        this.nome = nome;
        this.cpf = cpf;
        this.id = id;
        this.salarioBase = salarioBase;
    }
    validarNome(nome) {
        if (nome.trim().length < 3) {
            throw new Error("Nome deve ter pelo menos 3 caracteres.");
        }
    }
    validarCpf(cpf) {
        const numeros = cpf.replace(/\D/g, "");
        if (numeros.length !== 11 || /^([0-9])\1+$/.test(numeros)) {
            throw new Error("CPF inválido. Verifique o número digitado.");
        }
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += Number(numeros.charAt(i)) * (10 - i);
        }
        let resto = (soma * 10) % 11;
        if (resto === 10) {
            resto = 0;
        }
        if (resto !== Number(numeros.charAt(9))) {
            throw new Error("CPF inválido. Verifique o número digitado.");
        }
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += Number(numeros.charAt(i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10) {
            resto = 0;
        }
        if (resto !== Number(numeros.charAt(10))) {
            throw new Error("CPF inválido. Verifique o número digitado.");
        }
    }
    validarSalario(salarioBase) {
        if (salarioBase < 0) {
            throw new Error("Salário não pode ser negativo.");
        }
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getId() {
        return this.id;
    }
    getSalarioBase() {
        return this.salarioBase;
    }
    setNome(nome) {
        this.validarNome(nome);
        this.nome = nome;
    }
    setSalarioBase(salarioBase) {
        this.validarSalario(salarioBase);
        this.salarioBase = salarioBase;
    }
    exibirDados() {
        console.log("Nome:", this.nome);
        console.log("ID:", this.id);
        console.log("Tipo:", this.getTipo());
        console.log("Salário calculado:", this.calcularSalario().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }));
    }
}
exports.Funcionario = Funcionario;
