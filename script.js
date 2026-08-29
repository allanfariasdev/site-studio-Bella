const botaoMenu = document.getElementById("botaoMenu");

const menu = document.getElementById("menu");

const form = document.getElementById("formAgendamento");

const campoServico = document.getElementById("servico");


/* ABRIR E FECHAR MENU NO CELULAR */

botaoMenu.addEventListener("click", () => {

    menu.classList.toggle("aberto");

    if (menu.classList.contains("aberto")) {

        botaoMenu.textContent = "✕";

    } else {

        botaoMenu.textContent = "☰";

    }

});


/* FECHAR MENU DEPOIS DE CLICAR EM UM LINK */

menu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("aberto");

        botaoMenu.textContent = "☰";

    });

});


/* SELECIONAR SERVIÇO AO CLICAR EM AGENDAR */

document
    .querySelectorAll("[data-servico]")
    .forEach(link => {

        link.addEventListener("click", () => {

            campoServico.value = link.dataset.servico;

        });

    });


/* ENVIAR AGENDAMENTO PARA O WHATSAPP */

form.addEventListener("submit", event => {

    event.preventDefault();


    const nome = document
        .getElementById("nome")
        .value
        .trim();


    const servico = document
        .getElementById("servico")
        .value;


    const profissional = document
        .getElementById("profissional")
        .value;


    const mensagem = [

        "Olá! Gostaria de agendar um atendimento.",

        "",

        "*Nome:* " + nome,

        "*Serviço:* " + servico,

        "*Profissional:* " + profissional,

        "",

        "Gostaria de combinar a data e o horário."

    ].join("\n");


    /*
        COLOQUE AQUI O WHATSAPP DO SALÃO.

        Use:
        55 + DDD + número

        Não coloque espaços, parênteses ou traços.

        Exemplo:
        const numeroWhatsApp = "5548999999999";
    */

    const numeroWhatsApp = "";


    const urlWhatsApp =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(mensagem);


    window.open(urlWhatsApp, "_blank");

});
