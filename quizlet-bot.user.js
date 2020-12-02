// ==UserScript==
// @name         Quizlet bot
// @namespace    https://pandapip1.tk/
// @version      0.1
// @description  A bot for Quizlet Live
// @author       Pandapip1
// @match        https://quizlet.com/live
// @grant        none
// ==/UserScript==
var qb_userTriggered = false;
$("button").click((() => {
    if (!qb_userTriggered){
        qb_userTriggered = true;
        setTimeout(() => {
            var script = document.createElement('script');
            script.src = "https://raw.githubusercontent.com/Pandapip1/quizlet-bot/main/bot.js";
            document.head.appendChild(script);
        }, 1000); // give it time to load
    }
}));
