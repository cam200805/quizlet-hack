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
document.getElementsByClassName("NewStudentAnswerOptions").forEach((e) => {})
