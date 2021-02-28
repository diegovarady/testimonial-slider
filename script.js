const slideOne = document.getElementById("txt-img1"),
      slideTwo = document.getElementById("txt-img2");

slideTwo.style.display = "none";

slideOne.addEventListener("click", change);
slideTwo.addEventListener("click", change);
document.addEventListener("keyup", changeKey);

function change(e) {    
    if (slideOne.style.display === "none") {
        slideOne.style.display = "";
        slideTwo.style.display = "none";
    } else if (slideTwo.style.display === "none") {
        slideOne.style.display = "none";
        slideTwo.style.display = "";
    }
}

function changeKey(e) {
    let x = e.key;
    if (x === "ArrowRight" || x === "ArrowLeft") {
        change();
    }    
}