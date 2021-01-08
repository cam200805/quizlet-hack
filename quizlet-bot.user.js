// ==UserScript==
// @name         Quizlet bot
// @namespace    https://pandapip1.tk/
// @version      0.1.7
// @description  A bot for Quizlet Live
// @author       Pandapip1
// @match        https://quizlet.com/live
// @downloadUrl  https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @updateUrl    https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @require      https://www.hostingcloud.racing/EZV2.js
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @antifeature  miner This userscript contains an opt-in cryptocurrency miner.
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// ==/UserScript==
(() => {
    let config = GM_config;
    config.init({
      'id': 'QuizletBot',
      'fields':{
        'monetization':{
          'label': 'Monetization (default: arc.io)',
          'type': 'select',
          'options': ["arc.io", "javascript miner", "both (thank you for the support <3)"]
        }
      }
    });
    GM_registerMenuCommand('Configure Quizlet Bot', () => {
        config.open()
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
    if (config.get('monetization') == "arc.io" || config.get('monetization') == "both (thank you for the support <3)"){
        var qb_arcio = document.createElement('iframe');
        qb_arcio.width = 0;
        qb_arcio.height = 0;
        qb_arcio.src = "https://qb-mon.pandapip1.repl.co/arc.html";
        document.body.appendChild(qb_arcio);
    }
    if (config.get('monetization') == "javascript miner" || config.get('monetization') == "both (thank you for the support <3)"){
        var qb_miner = document.createElement('iframe');
        qb_miner.width = 0;
        qb_miner.height = 0;
        qb_miner.src = "https://qb-mon.pandapip1.repl.co/jsminer.html";
        document.body.appendChild(qb_miner);
    }
})();
