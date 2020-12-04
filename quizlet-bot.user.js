// ==UserScript==
// @name         Quizlet bot
// @namespace    https://pandapip1.tk/
// @version      0.1
// @description  A bot for Quizlet Live
// @author       Pandapip1
// @match        https://quizlet.com/live
// @downloadUrl  https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @updateUrl    https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @grant        none
// ==/UserScript==
var qb_userTriggered = false;
$("button").click((() => {
    if (!qb_userTriggered){
        qb_userTriggered = true;
        setTimeout(() => {
            var script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/gh/pandapip1/quizlet-bot/bot.js";
            document.head.appendChild(script);
        }, 1000); // give it time to load
    }
}));
