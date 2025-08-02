document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", () => {
        const code = button.nextElementSibling.querySelector("code").innerText;
        navigator.clipboard.writeText(code).then(() => {
            const originalIcon = button.innerHTML;
            button.disabled = true;
            button.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(() => {
                button.innerHTML = originalIcon;
                button.disabled = false;
            }, 1500);
        });
    });
});
