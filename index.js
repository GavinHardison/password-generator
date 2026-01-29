const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"]
const numbers = ["0","1","2","3","4","5","6","7","8","9"]

let characterSet = characters.concat(symbols, numbers)

let passwordBox1 = document.getElementById("password-box1")
let passwordBox2 = document.getElementById("password-box2")

let length = 15
let symbolsBool = true
let numbersBool = true

function randomPassword() {
    if (symbolsBool && numbersBool) {
        characterSet = characters.concat(symbols, numbers)
    } else if (symbolsBool && !numbersBool) {
        characterSet = characters.concat(symbols)
    } else if (!symbolsBool && numbersBool) {
        characterSet = characters.concat(numbers)
    } else {
        characterSet = characters
    }

    let password = ""

    for (let i = 0; i < length; i++) {
        let randomChar = Math.floor(Math.random() * characterSet.length)
        password += characterSet[randomChar]
    }

    return password
}

function generatePasswords() {
    let password1 = randomPassword()
    let password2 = randomPassword()

    passwordBox1.textContent = password1
    passwordBox2.textContent = password2
}