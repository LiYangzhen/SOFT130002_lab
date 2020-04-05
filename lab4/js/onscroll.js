window.onscroll = function () {
    var a = document.documentElement.scrollTop || document.body.scrollTop;     //滚动条y轴上的距离
    let b = location.href.split('/');
    b = b[b.length - 1];
    if (b.includes("home")) {
        if (a > 100) {
            document.querySelector(".banner").style.backgroundColor = "#343a40";
        } else {
            document.querySelector(".banner").style.backgroundColor = "transparent";
        }
    } else {
        document.querySelector(".banner").style.backgroundColor = "#343a40";
    }

    if (a > 200) {
        document.querySelector("#sidebar").style.visibility = "visible";

    } else {
        document.querySelector("#sidebar").style.visibility = "hidden";
    }
};

