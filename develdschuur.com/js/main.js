AOS.init()
// de datum wordt opgehaald
let copyright = new Date()
//het copyright pakt het jaar
let copyrightjaar = copyright.getFullYear()
//het jaar wordt in het copyright gezet
document.getElementById("copyright").innerHTML = "© De Veldschuur " + copyrightjaar;

