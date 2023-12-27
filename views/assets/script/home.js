let SERVER_URL = "http://localhost:3001";

if (!localStorage.getItem("token")) window.location.href = "../index.html";

let button = `
 
            <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
        >
            change
        </button>
       

`;
window.onload = async () => {
    let response = await fetch(`${SERVER_URL}/contact`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
        },
    });

    response = await response.json();

    let bodyTable = "";
    console.log(response.data.contacts);
    response.data.contacts.forEach((item) => {
        console.log(`
        
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td> 
            <td>${button}</td>
        </tr>;
        `);
        bodyTable += `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td> 
           <td>${button}</td>
        </tr>;
        `;
    });

    // document.getElementById("recipient-name").value = item.id;
    // document.getElementById("name-text").value = item.name;
    // document.getElementById("email-text").value = item.email;
    // document.getElementById("phone-text").value = item.phone;
    // document.getElementById("bodyTable").innerHTML = bodyTable;
};

// ! logout button
document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "../../login.html";
});

let setError = (message) => {
    document.getElementById("Error_message").innerHTML = message;
    document.getElementById("inputError").hidden = false;

    setTimeout(() => {
        document.getElementById("inputError").hidden = true;
    }, 1500);
};
// var modal = document.getElementById("searchModal");
// var btn = document.getElementById("searchBtn");
// var span = document.getElementsByClassName("close")[0];

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        // await search();
    }
});

async function search() {
    console.log("11");
    let searchInput = document.getElementById("searchInput").value;

    if (!searchInput) return setError("لا يمكنك ترك الحقل فارغ");

    var requestData = {
        search: searchInput,
    };

    let response = await fetch(`${SERVER_URL}/employee/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    });

    response = await response.json();
    if (response.error) {
        setError(response.error);
    }
    console.log(response.data);
    if (response.data) {
        document.getElementById("result").value = response.data;
    }
}
