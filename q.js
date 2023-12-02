let passwordBox = document.getElementById("password");
let length1 = 12;

let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerCase = "abcdefghijklmnopqrstuvwyxz";
let digits = "0123456789";
let symbols = "@#$%^&*()_+~|}{[]></-=";

let AllChars = UpperCase + LowerCase + digits + symbols;

function CreatePassword(){
    let password = "";
    password += UpperCase[Math.floor(Math.random()*UpperCase.length)];
    password += LowerCase[Math.floor(Math.random()*LowerCase.length)];
    password += digits[Math.floor(Math.random()*digits.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    
    while(length1 > password.length){
        password += AllChars[Math.floor(Math.random()*AllChars.length)];
    }
    passwordBox.value = password;
}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy")
}