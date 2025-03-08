var span = document.getElementById("error")

errorDesaparecer = function() {
    span.style.display = "none";
}

errorAparecer = function() {
    span.style.display = "inline-block";
    setTimeout(errorDesaparecer, 3000);
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const filename = document.getElementById('filename').value.trim().toLowerCase();
    const userAnswer = document.getElementById('resposta').value.trim().toLowerCase();
    
    const correctAnswer1 = ["xadrez", "xadrez "];
    const correctAnswer2 = ["sebastião", "sebastiao", "sebastião ", "sebastiao ", "sebastião fernandes", "sebastiao fernandes", "sebastião fernandes ", "sebastiao fernandes "];
    const correctAnswer3 = ["newton", "newton ", "newton navarro", "newton navarro "];
    const correctAnswer4 = ["pantera", "pantera "];
    const correctAnswer5 = ["nivaldo", "nivaldo ", "nivaldo calixto", "nivaldo calixto "];

    if (filename == "enigma1.html")
        if (correctAnswer1.includes(userAnswer)) {
            window.location.href = 'enigma2.html';
        } else {
            errorAparecer();
        }
    if (filename == "enigma2.html")
        if (correctAnswer2.includes(userAnswer)) {
            window.location.href = 'enigma3.html';
        } else {
            errorAparecer();
        }
    if (filename == "enigma3.html")
        if (correctAnswer3.includes(userAnswer)) {
            window.location.href = 'enigma4.html';
        } else {
            errorAparecer();
        }
    if (filename == "enigma4.html")
        if (correctAnswer4.includes(userAnswer)) {
            window.location.href = 'enigma5.html';
        } else{
            errorAparecer();
        }
    if (filename == "enigma5.html")
        if (correctAnswer5.includes(userAnswer)) {
            window.location.href = 'pagfinal.html';
        } else {
            errorAparecer();
        }
});