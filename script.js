// function comecarQuiz() {
//     var perguntas = [
//         "01. Qual é o nome da parte da bicicleta que você gira para mudar as marchas?",
//         "02. Como é chamado a função que você usa para parar a bicicleta?",
//         "03. Qual é o componente da bicicleta que você usa para sentar enquanto pedala?",
//         "04. Como é chamado o conjunto de rodas de uma bicicleta?",
//         "05. Qual é o nome da parte da bicicleta onde você segura enquanto pedala?",
//         "06. O que é um pneu de bicicleta cheio de ar chamado?",
//         "07. Que parte da bicicleta é usada para pedalar?",
//         "08. O que você usa para direcionar uma bicicleta?",
//         "09. Como é chamado a função que você usa para alterar a velocidade de uma bicicleta sem mudar de marcha?",
//         "10. Qual é o componente da bicicleta que conecta o selim ao guidão?"
//     ];

//     var respostasCorretas = [
//         "Cambio",
//         "Freio",
//         "Selim",
//         "Aro",
//         "Guidão",
//         "Pneu",
//         "Pedal",
//         "Guidão",
//         "Acelerador",
//         "Tubo do selim"
//     ];


//     var indicePergunta = 0;

//     function exibirProximaResposta() {
//         if (indicePergunta < perguntas.length) {
//             var respostaUsuario = prompt(perguntas[indicePergunta]);
//             var respostaCorreta = respostasCorretas[indicePergunta];
//             var mensagem = "";

//             if (respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {
//                 mensagem = "Acertou!";
//             } else {
//                 mensagem = "Errou! A resposta correta é: " + respostaCorreta;
//             }

//             document.getElementById("resultado").innerHTML += "<p>" + (indicePergunta + 1) + ". Sua resposta: " + respostaUsuario + "<br>" + mensagem + "</p>";

//             indicePergunta++;
//             setTimeout(exibirProximaResposta, 1000); // Espera 1 segundo antes de mostrar a próxima resposta
//         }
//     }

//     exibirProximaResposta();
// }

function comecarQuiz() {
    var pmpPerguntas = [
        "01. Qual é o nome da parte da bicicleta que você gira para mudar as marchas?",
        "02. Como é chamado a função que você usa para parar a bicicleta?",
        "03. Qual é o componente da bicicleta que você usa para sentar enquanto pedala?",
        "04. Como é chamado o conjunto de rodas de uma bicicleta?",
        "05. Qual é o nome da parte da bicicleta onde você segura enquanto pedala?",
        "06. O que é um pneu de bicicleta cheio de ar chamado?",
        "07. Que parte da bicicleta é usada para pedalar?",
        "08. O que você usa para direcionar uma bicicleta?",
        "09. Como é chamado a função que você usa para alterar a velocidade de uma bicicleta sem mudar de marcha?",
        "10. Qual é o componente da bicicleta que conecta o selim ao guidão?"
    ];

    var respostasCorretas = [
        "cambio",
        "freio",
        "selim",
        "aro",
        "guidão",
        "pneu",
        "pedal",
        "guidão",
        "acelerador",
        "tubo do selim"
    ];

    var listaPergunta = 0;

    function exibirProximaResposta() {
        if (listaPergunta < pmpPerguntas.length) {
            var respostaUsuario = prompt(pmpPerguntas[listaPergunta]);
            var respostaCorreta = respostasCorretas[listaPergunta];
            var mensagem = "";

            if (respostaUsuario === respostaCorreta) {
                mensagem = "Acertou!";
            } else {
                mensagem = "Errou! A resposta correta é: " + respostaCorreta;
            }

            document.getElementById("resultado").innerHTML += "<p>" + (listaPergunta + 1) + ". Sua resposta: " + respostaUsuario + "<br>" + mensagem + "</p>";

            listaPergunta++;
            setTimeout(exibirProximaResposta, 1000); // Espera 1 segundo antes de mostrar a próxima resposta
        }
    }

    exibirProximaResposta();
}