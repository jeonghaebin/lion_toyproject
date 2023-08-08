const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src", "home.html")
    document.getElementById("menuHome").style = "color:black; background-color:white;"
    document.getElementById("menuDiary").style = "color:white; background-color:#2982b5;"
    document.getElementById("menuAnything").style="color:white; background-color:#2982b5;"
}

const menuDiary = () => {
    document.getElementById("contentFrame").setAttribute("src", "anything.html")
    document.getElementById("menuHome").style = "color:white; background-color:#2982b5;"
    document.getElementById("menuDiary").style = "color:black; background-color:white;"
    document.getElementById("menuAnything").style="color:white; background-color:#2982b5;"
}   

const menuAnything = () => {
    document.getElementById("contentFrame").setAttribute("src", "anything.html")
    document.getElementById("menuHome").style = "color:white; background-color:#2982b5;"
    document.getElementById("menuDiary").style = "color:white; background-color:#2982b5;"
    document.getElementById("menuAnything").style="color:black; background-color:white;"
}