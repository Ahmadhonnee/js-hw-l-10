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
