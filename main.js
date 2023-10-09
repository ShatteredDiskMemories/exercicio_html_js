const numero_A = document.getElementById("numero-A");
const numero_B = document.getElementById("numero-B");
const form = document.getElementById("form-numero");
const successMessage = document.querySelector('.success-message');
const erroNumero = document.getElementById("erro-numero");

function validaNumero(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const mensagemSucesso = `o numero B: <b>${numero_B.value}</b> e maior que o numero A: <b>${numero_A.value}</b>`;
    const numeroMaior = validaNumero(numero_A.value, numero_B.value);

    if (numeroMaior) {
        successMessage.innerHTML = mensagemSucesso;
        successMessage.style.display = "block";

        numero_A.value = '';
        numero_B.value = '';
        erroNumero.style.display = 'none';
    } else {
        erroNumero.innerHTML = `<p class="error">O número ${numero_B.value}, não é um número maior do que ${numero_A.value}`;
        erroNumero.style.display = "block";
        successMessage.style.display = "none";
    }
});
