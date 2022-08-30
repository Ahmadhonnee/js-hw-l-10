function validateTodo(tName) {
    let regex = /^[A-Za-z]{2,}$/
    return regex.test(tName);
}

function validateString(str) {
    let regex = /[A-z]{1,}/;
    return regex.test(str);
}
