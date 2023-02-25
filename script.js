window.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("container");

    let email, password, weight, weight_units, name;
    const starting_page = document.getElementById("starting-page");
    const details_page = document.getElementById("details-page");
    const goals_page = document.getElementById("goals-page");
    const bottom_bar = document.getElementById("bottom-bar");
    const stats_page = document.getElementById("stats-page");

    let signup_button = document.getElementById("signup");
    signup_button.addEventListener("click", (e) => {
        let email_input = document.getElementById("email");
        let password_input = document.getElementById("password");

        if (document.getElementById("signup-form").checkValidity()) {
            e.preventDefault();
            email = email_input.value;
            password = password_input.value;
            starting_page.classList.toggle("hidden");
            details_page.classList.toggle("hidden");
        }
    })

    let next_button = document.getElementById("next");
    next_button.addEventListener("click", (e) => {
        if (document.getElementById("details-form").checkValidity()) {
            e.preventDefault();
            // name = document.getElementById("name").value;
            weight = document.getElementById("weight").value;
            weight_units = document.querySelector('input[name="weight-measurement"]:checked').value;
            let weight_goal = document.getElementById("weight-goal");
            weight_goal.value = weight + " " + weight_units;
            details_page.classList.toggle("hidden");
            goals_page.classList.toggle("hidden");
        }
    })

    let back1_button = document.getElementById("back1");
    back1_button.addEventListener("click", go_back.bind(null, "starting-page", "details-page"));

    let back2_button = document.getElementById("back2");
    back2_button.addEventListener("click", go_back.bind(null, "details-page", "goals-page"));

    function go_back(prev, curr, e) {
        e.preventDefault();
        document.getElementById(prev).classList.toggle("hidden");
        document.getElementById(curr).classList.toggle("hidden");
    }

    let checkboxes = Array.from(document.querySelectorAll('input[type = "checkbox"]'));
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            let input = document.getElementById(checkbox.attributes.for.value);
            if (checkbox.checked) {
                input.required = true;
            } else {
                input.required = false;
            }
        })
    })

    let finish_button = document.getElementById("finish");
    finish_button.addEventListener("click", (e) => {
        if (document.getElementById("goals-form").checkValidity()) {
            e.preventDefault();
            goals_page.classList.toggle("hidden");
            bottom_bar.classList.toggle("hidden");
            stats_page.classList.toggle("hidden");
            stats_page.classList.toggle("visible");
        }
    })
    insertBottomBar();
    function insertBottomBar() {
        let pages = ["stats", "exercise", "food", "settings"]
        for (let page of pages) {
            let p = document.createElement("p");
            p.classList.add("clickable");
            p.innerHTML = page;
            bottom_bar.append(p);
            p.addEventListener("click", (e) => {
                document.querySelector(".visible").classList.toggle("hidden");
                document.querySelector(".visible").classList.remove("visible");
                document.getElementById(`${page}-page`).classList.toggle("hidden");
                document.getElementById(`${page}-page`).classList.add("visible");
                document.querySelector(`.clicked`).classList.remove("clicked");
                e.target.classList.add("clicked");
            })
        }
        document.querySelector(`.clickable`).classList.add("clicked");
    }
})