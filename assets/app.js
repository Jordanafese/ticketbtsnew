function update_seats_num() {
    var seats = document.getElementsByClassName("seat");
    var sc = document.getElementById("s_count");
    var g = 0;
    for (var x = 0; x < seats.length; x++) {
        seat = seats[x];
        if (seat.getAttribute("is") == "selected") {
            g += 1;
        }
    }
    sc.innerText = g;
}

function click_seat(id) {
    var e = document.getElementById(id);
    if (e.getAttribute("is") == "selected") {
        e.setAttribute("is", "");
    } else {
        e.setAttribute("is", "selected");
    }
    update_seats_num();
}

document.getElementById("transfer").addEventListener("click", function () {
    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("modal1");
    overlay.style.display = "block";
    setTimeout(function () {
        modal.style.height = "450px";
        modal.style.transition = "height 0.3s ease-out";
    }, 10);
});

function clear_modal() {
    var modal = document.getElementById("modal1");
    var overlay = document.getElementById("overlay");
    modal.style.height = "0px";
    modal.style.transition = "height 0.3s ease-out";
    setTimeout(function () {
        overlay.style.display = "none";
    }, 300);
}

document.getElementById("overlay").addEventListener("click", function (e) {
    if (e.target === this) {
        clear_modal();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        clear_modal();
    }
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
