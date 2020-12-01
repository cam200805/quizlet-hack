function qb_canShiftLeft(){}
function qb_canShiftRight(){}
function qb_shiftLeft(){}
function qb_shiftRight(){}

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
		for (var key in map){
			finalMap[key] = map;
		}
		qb_shiftRight();
	}
	return finalMap;
}
function qb_mainLoop(answers){
	return () => {
		if (!qb_answerElementExists()){
			return;
		}
		qb_selectCorrectAnswer(answers);
		document.getElementsByClassName("NewStudentAnswerOptions").forEach((e) => {})
	}
}
setInterval(qb_mainLoop(qb_generateAllAnswerPairs()), 1000);
