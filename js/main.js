window.addEventListener("devicemotion", event => {
    let tb = document.getElementById("topButton");
    window.onscroll = () => {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            tb.style.display = "block";
        } else {
            tb.style.display = "none";
        }
    }
})