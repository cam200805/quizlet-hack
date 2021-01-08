function qb_canShiftLeft(){
	return document.getElementsByClassName("UIIcon--arrow-left")[0].length != 0;
}
function qb_canShiftRight(){
	return document.getElementsByClassName("UIIcon--arrow-right")[0].length != 0;
}
function qb_shiftLeft(){
	document.getElementsByClassName("UIIcon--arrow-left")[0].click();
}
function qb_shiftRight(){
	document.getElementsByClassName("UIIcon--arrow-right")[0].click();
}

function qb_getCorrectAnswer(answers){
	return answers[document.getElementsByClassName("StudentPrompt-text")[0].innerText];
}

function qb_generateSetOfAnswerPairs(){
	var map = {};
	var toggle = false;
	document.getElementsByClassName("StudentAnswerOption-text").forEach((e) => {
		if (toggle){
			map[toggle] = e.innerText;
			toggle = false;
		} else {
			toggle = e.innerText;
		}
	})
	return map;
}

function qb_generateAllAnswerPairs(){
	while (qb_canShiftLeft()){
		qb_shiftLeft();
	}
	qb_shiftFarLeft();
	var finalMap = {};
	while (qb_canShiftRight()){
		var map = qb_generateSetOfAnswerPairs();
		// merge map into finalMap
		for (var key in map){
			finalMap[key] = map;
		}
		qb_shiftRight();
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
	setInterval(qb_mainLoop(qb_generateAllAnswerPairs()), 1000);
} else if (window.location.hostname == "pandapip1.github.io"){
	alert("Drag the link to the bookmarks bar to create the bookmarklet."); // The user clicked on the bookmarklet creation link instead of dragging it
}
