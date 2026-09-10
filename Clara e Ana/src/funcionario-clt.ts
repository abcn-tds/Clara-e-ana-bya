import { Funcionario } from "./funcionario";

export class FuncionarioCLT extends Funcionario {
  private bonusAnual: number;

  constructor(
    nome: string,
    cpf: string,
    id: number,
    salarioBase: number,
    bonusAnual: number
  ) {
    super(nome, cpf, id, salarioBase);

    if (bonusAnual < 0) {
      throw new Error("Bônus anual não pode ser negativo.");
    }

    this.bonusAnual = bonusAnual;
  }

  public getBonusAnual(): number {
    return this.bonusAnual;
  }

  public setBonusAnual(bonusAnual: number): void {
    if (bonusAnual < 0) {
      throw new Error("Bônus anual não pode ser negativo.");
    }

    this.bonusAnual = bonusAnual;
  }

  public calcularSalario(): number {
    return this.getSalarioBase() + this.bonusAnual / 12;
  }

  public getTipo(): string {
    return "CLT";
  }
}
