function updateClock() {
    let now = new Date(),
    // months = ["January","February","March","April","May","June","July","August","September","October","November","Dececember"];
    mins = now.getMinutes();
    hours = now.getHours();

    // var weekday = new Array(7);
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thursday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";

    if (now.getMinutes() < 10) {
        mins = '0' + now.getMinutes();
    }

    if (now.getHours() < 12) { 
        time = now.getHours() + ':' + mins + ' AM';
    }
    else if (now.getHours() > 12) {
        time = (now.getHours()-12) + ':' + mins + ' PM';
    }
    else if (now.getHours() == 0) {
        time = '12:' + mins + ' AM';
    }
    else {
        time = now.getHours() + ':' + mins + '  PM';
    }

    // if (now.getDate() === 2 || 22){
    //     ordinal = "nd"
    // }
    // else if (now.getDate() === 2 || 22){
    //     ordinal = "nd"
    // }
    // else {
    //     ordinal = "th"
    // }



    // date = [weekday[now.getDay()]+ "," + " " + now.getDate()+ordinal + " " + months[now.getMonth()]];

    document.getElementById('clock').innerHTML = time;

    // document.getElementById('date').innerHTML = date;

    setTimeout(updateClock, 1000);
}
updateClock();

// To expand dashboard

function dashExtender() {
    document.getElementById("leftnav").style.right="60.1%";
    document.getElementById("rightnav").style.left="60.1%";
    document.getElementById("linkboard").style.borderRadius = "0px";
    document.getElementById("linkboard").style.maxWidth = "42rem";
}

function visible(x) {    
    
    
    if (x == "entertain-board") {
        let y = document.querySelectorAll("#develop-board, #shop-board, #sports-board, #sm-board, #work-board")
        let i;
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
    
    else if (x == "develop-board") {
        let y = document.querySelectorAll("#entertain-board, #shop-board, #sports-board, #sm-board, #work-board")
        let i;
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
    
    else if (x == "shop-board") {
        let y = document.querySelectorAll("#entertain-board, #develop-board, #sports-board, #sm-board, #work-board")
        let i;
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
    
    else if (x == "sports-board") {
        let y = document.querySelectorAll("#entertain-board, #develop-board, #shop-board, #sm-board, #work-board")
        let i;
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
    
    else if (x == "sm-board") {
        let y = document.querySelectorAll("#entertain-board, #develop-board, #shop-board, #sports-board, #work-board")
        let i;
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
    
    else if (x == "work-board") {
        let y = document.querySelectorAll("#entertain-board, #develop-board, #shop-board, #sports-board, #sm-board")
        let i;
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
    document.getElementById(x).style.display = "grid";
}

function entUpdate() {
    dashExtender();
    visible("entertain-board");
    document.getElementsByClassName("selector")[0].classList.add("entertainment-active");
    document.getElementsByClassName("selector")[1].classList.remove("development-active");
    document.getElementsByClassName("selector")[2].classList.remove("shopping-active");
    document.getElementsByClassName("selector")[3].classList.remove("sports-active");
    document.getElementsByClassName("selector")[4].classList.remove("social-media-active");
    document.getElementsByClassName("selector")[5].classList.remove("work-active");
}

function devUpdate() {
    dashExtender();
    visible("develop-board");
    document.getElementsByClassName("selector")[0].classList.remove("entertainment-active");
    document.getElementsByClassName("selector")[1].classList.add("development-active");
    document.getElementsByClassName("selector")[2].classList.remove("shopping-active");
    document.getElementsByClassName("selector")[3].classList.remove("sports-active");
    document.getElementsByClassName("selector")[4].classList.remove("social-media-active");
    document.getElementsByClassName("selector")[5].classList.remove("work-active");
}

function shoUpdate() {
    dashExtender();
    visible("shop-board")
    document.getElementsByClassName("selector")[0].classList.remove("entertainment-active");
    document.getElementsByClassName("selector")[1].classList.remove("development-active");
    document.getElementsByClassName("selector")[2].classList.add("shopping-active");
    document.getElementsByClassName("selector")[3].classList.remove("sports-active");
    document.getElementsByClassName("selector")[4].classList.remove("social-media-active");
    document.getElementsByClassName("selector")[5].classList.remove("work-active");
}

function spoUpdate() {
    dashExtender();
    visible("sports-board")
    document.getElementsByClassName("selector")[0].classList.remove("entertainment-active");
    document.getElementsByClassName("selector")[1].classList.remove("development-active");
    document.getElementsByClassName("selector")[2].classList.remove("shopping-active");
    document.getElementsByClassName("selector")[3].classList.add("sports-active");
    document.getElementsByClassName("selector")[4].classList.remove("social-media-active");
    document.getElementsByClassName("selector")[5].classList.remove("work-active");
}

function socUpdate() {
    dashExtender();
    visible("sm-board")
    document.getElementsByClassName("selector")[0].classList.remove("entertainment-active");
    document.getElementsByClassName("selector")[1].classList.remove("development-active");
    document.getElementsByClassName("selector")[2].classList.remove("shopping-active");
    document.getElementsByClassName("selector")[3].classList.remove("sports-active");
    document.getElementsByClassName("selector")[4].classList.add("social-media-active");
    document.getElementsByClassName("selector")[5].classList.remove("work-active");
}

function worUpdate() {
    dashExtender();
    visible("work-board")
    document.getElementsByClassName("selector")[0].classList.remove("entertainment-active");
    document.getElementsByClassName("selector")[1].classList.remove("development-active");
    document.getElementsByClassName("selector")[2].classList.remove("shopping-active");
    document.getElementsByClassName("selector")[3].classList.remove("sports-active");
    document.getElementsByClassName("selector")[4].classList.remove("social-media-active");
    document.getElementsByClassName("selector")[5].classList.add("work-active");
}

function active() {
    document.getElementById("search").style.top = "0rem";
    document.getElementById("button").style.opacity = "0%";
    document.getElementById("search").style.opacity = "100%";
    document.getElementsByClassName("searchbox")[0].focus();
  }

function turnOff() {
    document.getElementById("search").style.top = "-100%";
    document.getElementById("search").style.opacity = "0%";
    document.getElementById("button").style.opacity = "100%";
  }

