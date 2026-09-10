import { Funcionario } from "./funcionario";

export class FuncionarioPJ extends Funcionario {
  private valorHora: number;
  private horasTrabalhadas: number;

  constructor(
    nome: string,
    cpf: string,
    id: number,
    valorHora: number,
    horasTrabalhadas: number
  ) {
    super(nome, cpf, id, 0);

    this.validarValorHora(valorHora);
    this.validarHoras(horasTrabalhadas);

    this.valorHora = valorHora;
    this.horasTrabalhadas = horasTrabalhadas;
  }

  private validarValorHora(valorHora: number): void {
    if (valorHora <= 0) {
      throw new Error("O valor da hora precisa ser positivo.");
    }
  }

  private validarHoras(horas: number): void {
    if (horas < 0) {
      throw new Error("Horas trabalhadas não podem ser negativas.");
    }

    if (horas > 220) {
      throw new Error("Horas trabalhadas não podem exceder 220 horas.");
    }
  }

  public getValorHora(): number {
    return this.valorHora;
  }

  public getHorasTrabalhadas(): number {
    return this.horasTrabalhadas;
  }

  public setValorHora(valorHora: number): void {
    this.validarValorHora(valorHora);
    this.valorHora = valorHora;
  }

  public setHorasTrabalhadas(horas: number): void {
    this.validarHoras(horas);
    this.horasTrabalhadas = horas;
  }

  public calcularSalario(): number {
    return this.valorHora * this.horasTrabalhadas;
  }

  public getTipo(): string {
    return "PJ";
  }
}
