let SERVER_URL = "http://localhost:3001";

if (localStorage.getItem("token"))
    window.location.href = "./assets/pages/home.html";
let setError = (message) => {
    document.getElementById("Error_message").innerHTML = message;
    document.getElementById("inputError").hidden = false;

    setTimeout(() => {
        document.getElementById("inputError").hidden = true;
    }, 1500);
};
document.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        await submitLogin();
    }
});

let submitLogin = async () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // validation
    if (!email || !password) setError();

    var requestData = {
        email,
        password,
    };

    let response = await fetch(`${SERVER_URL}/auth/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    });

    response = await response.json();
    if (response.error) {
        document.getElementById("email").value = null;
        document.getElementById("password").value = "";
        setError(response.error);
    }
    if (response.data) {
        localStorage.setItem("token", response.data.token);
        document.getElementById("success").hidden = false;
        setTimeout(() => {
            document.getElementById("success").hidden = true;
            window.location.href = "./assets/pages/home.html";
        }, 700);
    }
};
