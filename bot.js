function qb_sleep(ms){
    return new Promise(r => setTimeout(r, ms))
}
function qb_generateSetOfAnswerPairs(){
	let map = {};
	let key;
	document.getElementsByClassName("FormattedTextWithImage").forEach((e) => {
		if (key){
			map[key] = e.innerText;
			key = undefined;
		} else {
			key = e.innerText;
		}
	})
	return map;
}
async function qb_generateAllAnswerPairs($){
	while (!$(".previousButton span button").disabled){
		$(".previousButton span button").click()
		await qb_sleep(1000);
	}
	let finalMap = {};
	do {
		let map = qb_generateSetOfAnswerPairs();
		for (let key in map){
			finalMap[key] = map[key];
		}
		$(".nextButton span button").click()
		await qb_sleep(1000);
	} while ($(".progressIndex").innerText.split("/")[0] != $(".progressIndex").innerText.split("/")[1])
	return finalMap;
}
function qb_mainLoop(answers, $){
	return () => {
		let answer = answers[document.getElementsByClassName("StudentPrompt-text")[0].innerText];
		if (!answer){
			return;
		}
		document.getElementsByClassName("NewStudentAnswerOptions").forEach((el) => {
			if (el.textContent == answer){
				el.click();
			}
		})
	}
}
if (window.location.hostname == "quizlet.com"){
	(async ($) => {setInterval(b_mainLoop(await qb_generateAllAnswerPairs($),$),1000);})($)
} else if (window.location.hostname == "pandapip1.github.io"){
	alert("Drag the link to the bookmarks bar to create the bookmarklet."); // The user clicked on the bookmarklet creation link instead of dragging it
}
