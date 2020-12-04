// ==UserScript==
// @name         Quizlet bot
// @namespace    https://pandapip1.tk/
// @version      0.1.5
// @description  A bot for Quizlet Live
// @author       Pandapip1
// @match        https://quizlet.com/live
// @downloadUrl  https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @updateUrl    https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant  GM_addStyle
// ==/UserScript==
(() => {
    var qb_userTriggered = false;
    var qb_script = document.createElement('script');
    qb_script.src = "https://pandapip1.github.io/quizlet-bot/bot.js";
    $("button").click(() => {
        if (!qb_userTriggered){
            qb_userTriggered = true;
            setTimeout(() => {
                document.head.appendChild(qb_script);
            }, 1000); // give it time to load
        }
    });
})();
