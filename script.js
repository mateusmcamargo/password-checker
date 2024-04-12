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

//checks if a string contains any special characters
function containsSpecialChar(string) {
    const  specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]/;
    return specialChars.test(string);
}

//checks if a string contains any number orspecial characters
function containsDifferent(string) {
    const  specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]/;
    return specialChars.test(string) || /\d/.test(string);
}

//validate pattern requirements
function patternValidade(string) {
    if (containsUppercase(string))   pattern[0] = true; else pattern[0] = false
    if (containsLowercase(string))   pattern[1] = true; else pattern[1] = false
    if (containsDifferent(string))   pattern[2] = true; else pattern[2] = false 
    if (string.length >= 8)          pattern[3] = true; else pattern[3] = false
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
    /*
    if (val === "") {
        strength = 0;

        for (let i = 0; i < block.length; i ++) {
            block[i].classList.remove('s1');
            block[i].classList.remove('s2');
            block[i].classList.remove('s3');
            block[i].classList.remove('s4');
        }
    }
    if (val !=  "") {
        strength = 1;
        block[0].classList.add('s1');
    }
    if (containsNumber(val)) {
        strength = 2;
        block[0].classList.add('s2');
        block[1].classList.add('s2');
    } 
    if (containsUppercase(val) &&
        containsNumber(val)) {
        strength = 3;
        block[0].classList.add('s3');
        block[1].classList.add('s3');
        block[2].classList.add('s3');
    }   
    if (containsSpecialChar(val) && 
        containsUppercase(val) &&
        containsNumber(val)) {
        strength = 4;
        block[0].classList.add('s4');
        block[1].classList.add('s4');
        block[2].classList.add('s4');
        block[3].classList.add('s4');
    }   */
});

/*
comprimento

*/