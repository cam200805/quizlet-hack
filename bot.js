function qb_sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function qb_canShiftLeft(){
	return !$(".previousButton span button").disabled
}
function qb_canShiftRight(){
	return !$(".nextButton span button").disabled
}
function qb_shiftLeft(){
	$(".previousButton span button").click()
}
function qb_shiftRight(){
	$(".nextButton span button").click()
}

function qb_getCorrectAnswer(answers){
	return answers[document.getElementsByClassName("StudentPrompt-text")[0].innerText];
}

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
	while (qb_canShiftLeft()){
		qb_shiftLeft();
	}
	var finalMap = {};
	while (qb_canShiftRight()){
		var map = qb_generateSetOfAnswerPairs();
		// merge map into finalMap
		for (var key in map){
			finalMap[key] = map;
		}
		qb_shiftRight();
		await qb_sleep(1000);
	}
	return finalMap;
}

function qb_selectCorrectAnswer(answer){
	document.getElementsByClassName("NewStudentAnswerOptions").forEach((el) => {
		if (el.textContent == answer){
			el.click();
		}
	})
}

function qb_mainLoop(answers){return () => {
	var answer = qb_getCorrectAnswer(answers);
	if (!answer){
		return;
	}
	qb_selectCorrectAnswer(answer);
}}
if (window.location.hostname == "quizlet.com"){
	(async () => {setInterval(await qb_mainLoop(qb_generateAllAnswerPairs()), 1000);})()
} else if (window.location.hostname == "pandapip1.github.io"){
	alert("Drag the link to the bookmarks bar to create the bookmarklet."); // The user clicked on the bookmarklet creation link instead of dragging it
}
