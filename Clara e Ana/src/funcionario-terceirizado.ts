import { Funcionario } from "./funcionario";

export class FuncionarioTerceirizado extends Funcionario {
  private taxaAdicional: number;

  constructor(
    nome: string,
    cpf: string,
    id: number,
    salarioBase: number,
    taxaAdicional: number
  ) {
    super(nome, cpf, id, salarioBase);

    this.validarTaxa(taxaAdicional);
    this.taxaAdicional = taxaAdicional;
  }

  private validarTaxa(taxa: number): void {
    if (taxa < 0 || taxa > 100) {
      throw new Error("A taxa adicional deve estar entre 0% e 100%.");
    }
  }

  public getTaxaAdicional(): number {
    return this.taxaAdicional;
  }

  public setTaxaAdicional(taxa: number): void {
    this.validarTaxa(taxa);
    this.taxaAdicional = taxa;
  }

  public calcularSalario(): number {
    return this.getSalarioBase() +
      this.getSalarioBase() * (this.taxaAdicional / 100);
  }

  public getTipo(): string {
    return "Terceirizado";
  }
}
