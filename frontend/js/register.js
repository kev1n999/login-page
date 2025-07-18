const nameInput = document.getElementById("name-input");
const passwordInput = document.getElementById("password-input");
const registerBtn = document.getElementById("register-btn");

registerBtn.addEventListener("clic", async () => {
    try {
        const request = await fetch(`http://localhost:4000/register`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},

            body: JSON.stringify({
                name: nameInput.value,
                password:password.value 
            })
        });

        if (request.ok) {
            const success = await request.json();
            return window.alert(success);
        } 

        const failed = await request.json();
        return window.alert(failed);
    } catch (err) {

    }
});