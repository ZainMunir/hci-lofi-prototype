window.addEventListener("DOMContentLoaded", () => {

    let container = document.getElementById("container");

    let email;
    let password;
    let weight;
    let weight_units;
    let name;

    let signup_button = document.getElementById("signup");
    signup_button.addEventListener("click", (e) => {
        let email_input = document.getElementById("email");
        let password_input = document.getElementById("password");

        if (document.getElementById("signup-form").checkValidity()) {
            e.preventDefault();
            email = email_input.value;
            password = password_input.value;
            container.innerHTML = "";
            let details_page = document.getElementById("details-page");
            container.append(details_page);
            details_page.classList.toggle("hidden");
        }
    })

    let next_button = document.getElementById("next");
    next_button.addEventListener("click", (e) => {
        if (document.getElementById("details-form").checkValidity()) {
            e.preventDefault();
            name = document.getElementById("name").value;
            weight = document.getElementById("weight").value;
            weight_units = document.querySelector('input[name="weight-measurement"]:checked').value;
            container.innerHTML = "";
            let goals_page = document.getElementById("goals-page");
            container.append(goals_page);
            goals_page.classList.toggle("hidden");
        }
    })
})