
var gNum = 1;
var easy = createEasyArray(16)
var medium = createMediumArray(64)
var hard = createHardArray(144)
console.log('easy', easy)







function easyGame() {
    createBoard(shuffleDifficulty(easy));
   
}
function mediumGame() {
    createBoard(shuffleDifficulty(medium));
   
}
function hardGame() {
    createBoard(shuffleDifficulty(hard));
   
}
function shuffleDifficulty(difficulty) {
    var shuffledDifficulty = difficulty.sort((a, b) => 0.5 - Math.random());
    
    return shuffledDifficulty;
}
function createBoard(difficulty) {
    var strHTML = ``;

    var length = Math.sqrt(difficulty.length);

    for (var i = 0; i < length; i++) {
        strHTML += `<tr class = "row">`;
        for (var j = 0; j < length; j++) {
            var pop = difficulty.pop();
            strHTML += `<td class = "col"> 
            <button class="num-button" onClick = "tableClick(this,${pop})">
            ${pop}
             </button>
            </td>`;
        }
        strHTML += `</tr>`;
    }

    var elBoard = document.querySelector("tbody");
    elBoard.innerHTML = strHTML;
}

function tableClick(el, num) {
    if (num !== "💣") {
        el.classList.add("mark");
        
        
    }
}
function createEasyArray(num) {
    var numberArray = [];
    for (var i = 1; i <= num; i++) {
        if(i<=2){
            numberArray.push("💣")
        }
        else numberArray.push('i');
        
        
    }
    return numberArray
}
function createEasyArray(num) {
    var numberArray = [];
    for (var i = 1; i <= num; i++) {
        if(i<=2){
            numberArray.push("💣")
        }
        else numberArray.push('i');
        
        
    }
    return numberArray
}
function createMediumArray(num) {
    var numberArray = [];
    for (var i = 1; i <= num; i++) {
        if(i<=2){
            numberArray.push("💣")
        }
        else numberArray.push('i');
        
        
    }
    return numberArray
}
function createHardArray(num) {
    var numberArray = [];
    for (var i = 1; i <= num; i++) {
        if(i<=30){
            numberArray.push("💣")
        }
        else numberArray.push('i');
        
        
    }
    return numberArray
}