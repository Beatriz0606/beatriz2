


let jogadorAtual = "X";
let jogoFinalizado = false;
let tabuleiro = [
	"", "", "",
	"", "", "",
	"", "", ""
];

function marcarCelula(celula) {
	if (jogoFinalizado) return;
	if (tabuleiro[celula] !== "") return;

	tabuleiro[celula] = jogadorAtual;
	document.getElementById(`celula-${celula + 1}`).innerText = jogadorAtual;

	if (verificarVitoria()) {
		jogoFinalizado = true;
		alert(`O Grande Jogador ${jogadorAtual} venceu!`);
	} else if (verificarEmpate()) {
		jogoFinalizado = true;
		alert("Vixe!!! Deu Empate!");
	} else {
		jogadorAtual = jogadorAtual === "X" ? "O" : "X";
	}
}

function verificarVitoria() {
	const combinacoesVitoriosas = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (const combinacao of combinacoesVitoriosas) {
		if (
			tabuleiro[combinacao[0]] === jogadorAtual &&
			tabuleiro[combinacao[1]] === jogadorAtual &&
			tabuleiro[combinacao[2]] === jogadorAtual
		) {
			return true;
		}
	}

	return false;
}

function verificarEmpate() {
	return !tabuleiro.includes("");
}

document.querySelectorAll(".celula").forEach((celula, index) => {
	celula.addEventListener("click", () => marcarCelula(index));
});

document.getElementById("reiniciar").addEventListener("click", () => {
	jogadorAtual = "X";
	jogoFinalizado = false;
	tabuleiro = ["", "", "", "", "", "", "", "", ""];
	document.querySelectorAll(".celula").forEach(celula => celula.innerText = "");
});