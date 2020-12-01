function qb_canShiftLeft(){}
function qb_canShiftRight(){}
function qb_shiftLeft(){}
function qb_shiftRight(){}
function qb_getCorrectAnswer(answers){}

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
function qb_mainLoop(answers){
	return () => {
		var answer = qb_getCorrectAnswer(answers);
		if (!answer){
			return;
		}
		qb_selectCorrectAnswer(answer);
	}
}
setInterval(qb_mainLoop(qb_generateAllAnswerPairs()), 1000);
