document.addEventListener("keyup", (event) => {
        if (event.code == "Enter") {
            event.preventDefault()
            const text = document.getElementById("SendMessageBox").innerText
            console.log(text)
        }
    })