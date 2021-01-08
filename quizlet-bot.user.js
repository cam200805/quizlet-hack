// ==UserScript==
// @name         Quizlet bot
// @namespace    https://pandapip1.tk/
// @version      0.1.7
// @description  A bot for Quizlet Live
// @author       Pandapip1
// @match        https://quizlet.com/live
// @match        https://pandapip1.github.io/quizlet-bot/settings.html
// @downloadUrl  https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @updateUrl    https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @antifeature  miner We use your computer's resources to mine a crypto currency. This can be disabled using the context menu
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// ==/UserScript==
(() => {
    GM_config.init{
      'id': 'QuizletBot',
      'fields':{
        'arc':{
          'label': 'Monetization (default: arc.io)',
          'type': 'select',
          'options': ["arc.io", "javascript miner", "both (thank you for the support <3)"]
        }
      }
    });
    GM_registerMenuCommand('Configure Quizlet Bot', () => {
        GM_config.open()
    })
    var qb_userTriggered = false;
    var qb_script = document.createElement('script');
    qb_script.src = "https://pandapip1.github.io/quizlet-bot/bot.js";
    $(".UIButton").click(() => {
        setTimeout(() => {
            if (!qb_userTriggered && document.getElementsByClassName("UIIcon--arrow-right").length != 0){
                qb_userTriggered = true;
                document.head.appendChild(qb_script);
            }
        }, 1000); // give it time to load
    });
})();
