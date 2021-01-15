function qb_generateSetOfAnswerPairs(){
	var map = {};
	var toggle = false;
	document.getElementsByClassName("FormattedTextWithImage").forEach((e) => {
		if (toggle){
			map[toggle] = e.innerText;
			toggle = false;
		} else {
			toggle = e.innerText;
		}
	})
	return map;
}

async function qb_generateAllAnswerPairs(){
	while (!$(".previousButton span button").disabled){
	    $(".previousButton span button").click()
		await qb_sleep(1000);
	}
	var finalMap = {};
	while (!$(".nextButton span button").disabled){
		var map = qb_generateSetOfAnswerPairs();
		for (var key in map){
			finalMap[key] = map;
		}
		$(".nextButton span button").click()
		await qb_sleep(1000);
	}
	return finalMap;
}

function qb_mainLoop(answers){return () => {
	var answer = answers[document.getElementsByClassName("StudentPrompt-text")[0].innerText];
	if (!answer){
		return;
	}
	document.getElementsByClassName("NewStudentAnswerOptions").forEach((el) => {
		if (el.textContent == answer){
			el.click();
		}
	})
}}
if (window.location.hostname == "quizlet.com"){
	(async () => {setInterval(await qb_mainLoop(qb_generateAllAnswerPairs()), 1000);})()
} else if (window.location.hostname == "pandapip1.github.io"){
	alert("Drag the link to the bookmarks bar to create the bookmarklet."); // The user clicked on the bookmarklet creation link instead of dragging it
}
