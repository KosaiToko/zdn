var randomBodyParts = ["голова", "рука", "прическа"];
var randomAdjectives = ["тупая", "кривая", "мерзкая"];
var randomWords = ["обезьяны", "акулы", "палки", "таракана", "букашки"];

var randomBodyParts = randomBodyParts[Math.floor(Math.random() * 3) ];
var randomAdjective = randomAdjectives [Math.floor(Math.random() * 3)];
var randomWords = randomWords[Math.floor(Math.random() * 5)];
var randomInsult = "1. У тебя " + randomBodyParts + " словно " + randomAdjective + " " + randomWords + "!!!";
document.write(randomInsult);

var randomBodyParts = ["голова", "рука", "прическа"];
var randomAdjectives = ["тупая", "кривая", "мерзкая"];
var randomAnimalParts = ["лапа", "хвост", "морда"];
var randomWords = ["обезьяны", "акулы", "рыбы", "таракана", "букашки"];

var randomBodyParts = randomBodyParts[Math.floor(Math.random() * 3) ];
var randomAdjective = randomAdjectives [Math.floor(Math.random() * 3)];
var randomAnimalParts = randomAnimalParts [Math.floor(Math.random() * 3)];
var randomWords = randomWords[Math.floor(Math.random() * 5)];
var randomInsult = [" 2. У тебя", randomBodyParts, "еще более", randomAdjective + ",", "чем", randomAnimalParts, "у", randomWords + "!!!"].join(" ");
document.write(randomInsult);

var massiv = ["3", "2", "1"] ;
var Insult = [" 3. ", massiv[0], "больше, чем", massiv[1], "больше, чем", massiv[2]].join(" ");
document.write(Insult);