// Task 1

// var amount = 100;

// for (let i = 0; i < amount; i++) {
//     if(i%2==0){
//         result +=i;
//     }
// }
// console.log(result);

// function arraySum(arr){
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             result += arr[i];
//         }
//     }
//     return result;
// }
// var arr = [1,23,34,12,-5,10,4,9]

// console.log(arraySum(arr))



// Task 2

var todoEl = document.querySelector(".todo");
var todoListEl = document.querySelector(".todo__list");
var todoInputEl = document.querySelector(".todo__input");

const users = []

todoEl.addEventListener('submit', (event) =>{
    event.preventDefault();

    users.push(todoInputEl.value);
    todoInputEl.value = ""
    // console.log(users);
    addUserList(users);
})
addUserList(users);
function addUserList(arr){

    todoListEl.innerHTML = null;

    for(let i = 0; i < arr.length; i++){
        let userAdd = document.createElement("li");
        userAdd.className = ("user__card mt-4");
        userAdd.textContent = arr[i];
        todoListEl.appendChild(userAdd);
    }
}