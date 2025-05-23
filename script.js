const PasswordBox = document.getElementById("Password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]-=";

const allchars = uppercase + lowercase + number + symbol;

function createPassword(){
    let Password = "";
    Password += uppercase[Math.floor(Math.random() * uppercase.length)];
    Password += lowercase[Math.floor(Math.random() * lowercase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbol[Math.floor(Math.random() * symbol.length)];

    while(Password.length < length){
        Password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    PasswordBox.value = Password;
}

function copyPassword(){
    navigator.clipboard.writeText(PasswordBox.value);
    alert("Password copied to clipboard!");
}

