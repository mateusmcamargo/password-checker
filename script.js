const inputPassword = document.getElementById('password');
const block         = document.querySelectorAll('.block');
const patternCheck  = document.querySelectorAll('.patternCheck');

var strength = 0;
var pattern  = [
    false,
    false,
    false
];
const parameters = [
{name: 'lenght', value: false},
{name: 'number', value: false},
{name: 'schar' , value: false},
{name: 'upper' , value: false},
];


//checks if a string contains lowercase characters
function containsLowercase(string) {
    const  uppercaseChars = /[a-z]/;
    return uppercaseChars.test(string);
}

//checks if a string contains uppercase characters
function containsUppercase(string) {
    const  uppercaseChars = /[A-Z]/;
    return uppercaseChars.test(string);
}

//checks if a string contains characters
function containsChar(string) {
    if (containsLowercase(string) && 
        containsUppercase(string)) {
            return true;
    }
}

//checks if a string contains any digit
function containsNumber(string) {return /\d/.test(string)}

//checks if a string contains any speccial characters
function containsSpecialChar(string) {
    const  specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]/;
    return specialChars.test(string);
}

//validate pattern requirements
function patternValidade(string) {
    if (containsChar(string))   pattern[0] = true; else pattern[0] = false
    if (containsNumber(string)) pattern[1] = true; else pattern[1] = false 
    if (string.length >= 8)     pattern[2] = true; else pattern[2] = false
}

inputPassword.addEventListener('input', (e) => {
    console.log(pattern);
    var val = e.target.value;
    patternValidade(val);
    
    for (var i = 0; i < pattern.length; i ++) {
        switch(pattern[i]) {
            
            case false:
                patternCheck[i].classList.remove('fa-square-check');
                patternCheck[i].classList.add('fa-square');
            break;
                
            case true:
                patternCheck[i].classList.remove('fa-square');
                patternCheck[i].classList.add('fa-square-check');
            break;
        }
    }
});

/*
comprimento

*/