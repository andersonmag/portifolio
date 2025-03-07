document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/andersondel.dev@gmail.com", {
        method: "POST",
        body: formData
    })
        .then(response => response.ok ? "Mensagem enviada com sucesso!" : "Erro ao enviar")
        .then(message => {
            document.getElementById("status").innerText = message;
            form.reset();
        })
        .catch(error => console.error("Erro:", error));
});