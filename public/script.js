document.addEventListener("DOMContentLoaded", () => {
    const executeButton = document.getElementById("execute");
    const codeInput = document.getElementById("code");
    const outputDiv = document.getElementById("output");

    executeButton.addEventListener("click", () => {
        const code = codeInput.value;
        fetch("/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `code=${encodeURIComponent(code)}`,
        })
            .then((response) => response.text())
            .then((data) => {
                outputDiv.textContent = data;
            })
            .catch((error) => {
                console.error(error);
            });
    });
});
