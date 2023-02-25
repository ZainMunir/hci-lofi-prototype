window.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("container");

    let email, password, weight, weight_units, name;
    const starting_page = document.getElementById("starting-page");
    const details_page = document.getElementById("details-page");
    const goals_page = document.getElementById("goals-page");
    const bottom_bar = document.getElementById("bottom-bar");
    const stats_page = document.getElementById("stats-page");
    const further_stats_page = document.getElementById("further-stats");
    const exercise_page = document.getElementById("exercise-page");
    const further_exercise_page = document.getElementById("further-exercise");

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
            name = document.getElementById("name").value;
            document.getElementById("settings-page").innerHTML = `Hello ${name}`;
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

    insertStats();
    function insertStats() {
        let main_stat = document.createElement("div");
        main_stat.innerHTML = "Main Stat";
        main_stat.id = "main-stat";
        main_stat.classList.add("clickable")
        stats_page.appendChild(main_stat);
        stats_page.addEventListener("click", furtherStats);
        for (var i = 1; i <= 6; i++) {
            let stat = document.createElement("div");
            stat.classList.add("clickable");
            stat.classList.add("other-stat");
            stat.innerHTML = i;
            stats_page.appendChild(stat);
            stats_page.addEventListener("click", furtherStats);
        }
    }

    function furtherStats() {
        stats_page.classList.toggle("hidden");
        stats_page.classList.toggle("visible");
        further_stats_page.classList.toggle("hidden");
        further_stats_page.classList.toggle("visible");
    }

    insertExercise();
    function insertExercise() {
        for (var i = 1; i <= 4; i++) {
            let exercise = document.createElement("div");
            let video = document.createElement("div");
            video.classList.add("video");
            let image = document.createElement("img");
            image.src = "https://cdn-icons-png.flaticon.com/512/0/375.png"
            image.classList.add("play");
            video.appendChild(image);
            let text = document.createElement("div");
            text.innerHTML = `desc ${i}`
            text.classList.add("video-desc");
            exercise.classList.add("clickable");
            exercise.classList.add("exercise");
            exercise.appendChild(video);
            exercise.appendChild(text);
            exercise_page.appendChild(exercise);
            exercise.addEventListener("click", () => {
                exercise_page.classList.toggle("hidden");
                exercise_page.classList.toggle("visible");
                further_exercise_page.classList.toggle("hidden");
                further_exercise_page.classList.toggle("visible");
            })
        }
    }

    let modal = document.getElementById("modal");

    let filter_button = document.getElementById("filter-button");
    filter_button.addEventListener("click", modal_handler);

    let close_button = document.getElementById("close");
    close_button.addEventListener("click", modal_handler);

    function modal_handler() {
        modal.classList.toggle("hidden");
    }

    // document.addEventListener('click', function (event) {
    //     if (!modal.classList.contains("hidden")) {
    //         if (!modal.contains(event.target)) {
    //             // If not, hide the modal
    //             modal.classList.add("hidden");
    //         }
    //     }
    // }); 
    // Doesn't work as the hidden class is immediately added back when clicking filter

    document.getElementById("main-video").addEventListener("click", () => {
        let success = document.getElementById("success");
        // success.id = "success";
        // success.innerHTML = "You did it!"
        // container.appendChild(success);
        success.classList.remove("hidden");
    });
    
    let back3_button = document.getElementById("back3");
    back3_button.addEventListener("click", go_back2.bind(null, "stats-page", "further-stats"));

    let back4_button = document.getElementById("back4");
    back4_button.addEventListener("click", go_back2.bind(null, "exercise-page", "further-exercise"));
    
    function go_back2(prev, curr, e) {
        document.getElementById(prev).classList.toggle("hidden");
        document.getElementById(prev).classList.toggle("visible");
        document.getElementById(curr).classList.toggle("hidden");
        document.getElementById(curr).classList.toggle("visible");
    }
})