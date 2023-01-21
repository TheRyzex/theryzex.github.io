function redirect(url) {
     window.location.href = url;
}
let
     telegram = document.querySelector("#telegram"),
     instagram = document.querySelector("#instagram"),
     youtube = document.querySelector("#youtube");

telegram.addEventListener("click", ()=>{
     redirect("httpS://t.me/THERYZEX");
});
instagram.addEventListener("click", ()=>{
     redirect("https://www.instagram.com/theryzex/");
});
youtube.addEventListener("click", ()=>{
     redirect("https://youtube.com/channel/UCRX_Nu88xSoA0jSwIZOukBg");
});