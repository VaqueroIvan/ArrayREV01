let numero1 = <HTMLInputElement>document.getElementById("numero1");
let numero2 = <HTMLInputElement>document.getElementById("numero2");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

let cantidadIntegrantes: number;

btnEnviar.addEventListener("click", () => {
  cantidadIntegrantes = Number(numero1.value);
  nombrarIntegrantes(cantidadIntegrantes);
});

function nombrarIntegrantes(cantIntegrantes: number) {
  let nombresDeLosIntegrantes: string[] = new Array(cantIntegrantes);
  for (let i = 0; i < nombresDeLosIntegrantes.length; i++) {
    nombresDeLosIntegrantes[i] = prompt(
      `Nombre del integrante número ${i + 1}:`
    );
  }
  console.log(nombresDeLosIntegrantes);
}
