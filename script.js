const slideOne = document.getElementById("txt-img1"),
      slideTwo = document.getElementById("txt-img2");

slideTwo.style.display = "none";

document.addEventListener("click", change);
document.addEventListener("keyup", change);

function change(e) {
    let y = e.target;
    let x = e.key;    
    if (y.id === "Btn" || x === "ArrowRight" || x === "ArrowLeft") {
        if (slideOne.style.display === "none") {
            slideOne.style.display = "";
            slideTwo.style.display = "none";
        } else if (slideTwo.style.display === "none") {
            slideOne.style.display = "none";
            slideTwo.style.display = "";
        }
    }    
}
