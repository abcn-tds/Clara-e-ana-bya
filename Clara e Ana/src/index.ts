import { FuncionarioCLT } from "./funcionario-clt";
import { FuncionarioPJ } from "./funcionario-pj";
import { FuncionarioTerceirizado } from "./funcionario-terceirizado";

// Instanciando cada classe instanciável.
const funcionarioCLT = new FuncionarioCLT(
  "Ana Silva",
  "529.982.247-25",
  1,
  5000,
  12000
);

const funcionarioPJ = new FuncionarioPJ(
  "Bruno Santos",
  "111.444.777-35",
  2,
  50,
  160
);

const funcionarioTerceirizado = new FuncionarioTerceirizado(
  "Carla Oliveira",
  "935.411.347-80",
  3,
  4500,
  20
);

const funcionarios = [
  funcionarioCLT,
  funcionarioPJ,
  funcionarioTerceirizado
];

console.log("===== FUNCIONÁRIOS =====");

let totalFolha = 0;

for (const funcionario of funcionarios) {
  funcionario.exibirDados();
  console.log("------------------------");
  totalFolha += funcionario.calcularSalario();
}

console.log(
  "TOTAL DA FOLHA:",
  totalFolha.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
);

console.log("\n===== POLIMORFISMO =====");

for (const funcionario of funcionarios) {
  console.log(
    funcionario.getTipo(),
    "->",
    funcionario.calcularSalario().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  );
}
