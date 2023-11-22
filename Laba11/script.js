$(document).ready(function () {
    let words = [
        { term: "planet", translation: "планета" },
        { term: "family", translation: "родина" },
		{ term: "processor", translation: "процесор" },
		{ term: "monitor", translation: "монітор" },
		{ term: "casino", translation: "казино" },
		{ term: "house", translation: "дім" },
		{ term: "car", translation: "машина" },
		{ term: "university", translation: "університет" },
		{ term: "telephone", translation: "телефон" },
		{ term: "world", translation: "світ" },
    ];
    let currentIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
	let isTranslationVisible = false;
	words.sort(() => Math.random() - 0.5);

    function nextWord() {
        if (currentIndex < words.length) {
            $("#box").text(words[currentIndex].term);
            $("#userInput").val("");
            $("#step").text(currentIndex + 1);
        } else {
            result();
        }
    }
	
    function result() {
        let accuracy = (correctCount / words.length) * 100;
        let message = `Your accuracy is ${accuracy.toFixed(2)}%.`;

		setTimeout(function () {
			alert(message);
			currentIndex = 0;
			correctCount = 0;
			incorrectCount = 0;
			$("#correctCount").text(correctCount);
			$("#incorrectCount").text(incorrectCount);
			$("#step").text(currentIndex + 1);
			nextWord();
		},100); 
    }

	$("#box").on("click", function () {
        if (isTranslationVisible) {
            $("#box").text(words[currentIndex].term);
            isTranslationVisible = false;
        } else {
            $("#box").text(words[currentIndex].translation);
            isTranslationVisible = true;
        }
    });

    $("#userInput").on("keyup", function (event) {
        if (event.keyCode === 13) {
            let userTranslation = $("#userInput").val().trim().toLowerCase();
            let correctTranslation = words[currentIndex].translation.toLowerCase();

            if (userTranslation === correctTranslation) {
                correctCount++;
            } else {
                incorrectCount++;
            }

            $("#correctCount").text(correctCount);
            $("#incorrectCount").text(incorrectCount);

            currentIndex++;
            nextWord();
        }
    });
	

    nextWord();
});


