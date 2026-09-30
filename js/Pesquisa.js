const pesquisa = document.getElementById("pesquisa");
pesquisa.addEventListener("keyup", function () {
    const filtro =
    pesquisa.value.toLowerCase();
    const itens =
    document.querySelectorAll("#musicas li");
    itens.forEach(item => {
        const texto =
        item.innerText.toLowerCase();
        item.style.display =
        texto.includes(filtro)
        ? ""
        : "none";
    });
});

 