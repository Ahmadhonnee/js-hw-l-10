var string = "";
var body = document.querySelector("body")
var formEl = document.querySelector(".myForm");
var inputEl = document.querySelector(".inputMy");
var longestWordLength = 0;
var longestWord = 0;


var result = document.querySelector(".result");
var bWord = document.querySelector(".longest-word")
var bLength = document.querySelector(".longest-length")

formEl.addEventListener('submit', (event) =>{

    event.preventDefault();

    result.classList.remove("unvisible");


    let inputValue = inputEl.value;
    bWord.textContent = bigstring(inputValue);
    bLength.textContent = bigletters(inputValue);

    inputEl.value = "";
})

function bigstring(str){
    const arr = str.split(' ');
    
    for(var i=0; i < arr.length; i++){
        if(arr[i].length > longestWordLength){
            longestWord = arr[i];
            // longestWordLength = arr[i].length;
        }
    }
    return longestWord;
}

function bigletters(str){
    const arr = str.split(' ');
    
    for(var i=0; i < arr.length; i++){
        if(arr[i].length > longestWordLength){
            // longestWord = arr[i];
            longestWordLength = arr[i].length;
        }
    }
    return longestWordLength;
}