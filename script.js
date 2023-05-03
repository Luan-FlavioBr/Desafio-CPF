let inputCPF = document.getElementById('cpf_input');
let buttonCPF = document.getElementById('cpf-button');
let msgStatus = document.getElementById('msg-status'); 

function verificarInput() {
    if(isNaN(inputCPF.value) || inputCPF.value == '') {
        cpfInvalido('Digite caracteres numéricos!');
    } else {
        verificaCPF(inputCPF.value);
    }
}

function limpaInput() {
    inputCPF.style.border = 'none';
    msgStatus.style.display = 'none';
}

function verificaCPF(CPF) {    
    if (CPF.length == 11) {
        let divisao = 0;
        let CPFs = CPF.toString();
        let soma = 0;
        let dig1 = '';
        let dig2 = '';
        console.log(CPFs[CPFs.length - 2], CPFs[CPFs.length - 1])
        for(var i = 0; i <= (CPFs.length - 3); i++) {
            console.log(CPFs[i]);
            soma = soma + (CPFs[i] * (10-i));
        }
        divisao = soma % 11;
        dig1 = 11 - divisao;
        if (dig1 == CPFs[CPFs.length - 2]) {
            soma = 0;
            divisao = 0;
            for(var i = 0; i <= (CPFs.length - 2); i++) {
                console.log(CPFs[i]);
                soma = soma + (CPFs[i] * (11-i));
            }
            divisao = soma % 11;
            dig2 = 11 - divisao;
            if (dig2 == CPFs[CPFs.length - 1]) {
                cpfValido();
            } else {
                cpfInvalido('CPF Inválido!');
            }
        } else {
            cpfInvalido('CPF Inválido!');
        }
    } else {
        cpfInvalido('CPF Inválido!');
    }
}

function cpfValido() {
    inputCPF.style.border = '3px solid green';
    msgStatus.style.display = 'block';
    msgStatus.style.color = 'green';
    msgStatus.innerHTML = 'CPF Válido!';
}

function cpfInvalido(f) {
    inputCPF.style.border = '2px solid red';
    msgStatus.style.display = 'block';
    msgStatus.style.color = 'red';
    msgStatus.innerHTML = f;
    const inputChacoalha = [
        { transform: "translateX(0px)" },
        { transform: "translateX(-15px)" },
        { transform: "translateX(0px)" },
        { transform: "translateX(15px)" }
      ];
      
      const tempoAnimacao = {
        duration: 500,
        iterations: 1,
      };
    inputCPF.animate(inputChacoalha, tempoAnimacao)
}

buttonCPF.onclick = verificarInput;
inputCPF.onfocus = limpaInput;