const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// signUpButton.addEventListener("click", () => {
//     container.classList.add("right-panel-active");
// });

// signInButton.addEventListener("click", () => {
//     clickToSignIn();
//     // container.classList.remove("right-panel-active");
// });

// signInButton.onclick = clickToSignIn;

function clickToSignIn() {
    const email = document.getElementById("SignInEmail").value;
    const password = document.getElementById("SignInPassword").value;

    console.log({ email, password });
    // try {
    //     const response = await fetch("http://localhost:3001/auth/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ email, password }),
    //     });

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log(data);
    //         // Handle the response data here
    //     } else {
    //         console.error("HTTP-Error: " + response.status);
    //     }
    // } catch (error) {
    //     console.error("Error:", error);
    // }
}
