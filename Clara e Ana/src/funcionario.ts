export abstract class Funcionario {
  private nome: string;
  private cpf: string;
  private id: number;
  private salarioBase: number;

  constructor(nome: string, cpf: string, id: number, salarioBase: number) {
    this.validarNome(nome);
    this.validarCpf(cpf);
    this.validarSalario(salarioBase);

    this.nome = nome;
    this.cpf = cpf;
    this.id = id;
    this.salarioBase = salarioBase;
  }

  private validarNome(nome: string): void {
    if (nome.trim().length < 3) {
      throw new Error("Nome deve ter pelo menos 3 caracteres.");
    }
  }

  private validarCpf(cpf: string): void {
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

  private validarSalario(salarioBase: number): void {
    if (salarioBase < 0) {
      throw new Error("Salário não pode ser negativo.");
    }
  }

  public getNome(): string {
    return this.nome;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getId(): number {
    return this.id;
  }

  public getSalarioBase(): number {
    return this.salarioBase;
  }

  public setNome(nome: string): void {
    this.validarNome(nome);
    this.nome = nome;
  }

  public setSalarioBase(salarioBase: number): void {
    this.validarSalario(salarioBase);
    this.salarioBase = salarioBase;
  }

  public abstract calcularSalario(): number;

  public abstract getTipo(): string;

  public exibirDados(): void {
    console.log("Nome:", this.nome);
    console.log("ID:", this.id);
    console.log("Tipo:", this.getTipo());
    console.log(
      "Salário calculado:",
      this.calcularSalario().toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })
    );
  }
}
