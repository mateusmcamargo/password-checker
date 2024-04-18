//get elements
const form          = document.querySelector("form");
const inputPassword = document.getElementById('password');
const inputSubmit   = document.getElementById('submit');
const block         = document.querySelectorAll('.block');
const patternCheck  = document.querySelectorAll('.patternCheck');
const sectionAlert  = document.getElementById('alert');
const boxP          = document.querySelector('.box p');
const boxSpan       = document.querySelector('.box span');

//strenght and parameters
var strength = 0;
var pattern  = [
    false, //lowercase
    false, //uppercase
    false, //number or special char
    false //minimum of 8 chars
];
const parameters = [
{name: 'lenght', value: false, checked: false}, //lenght > 8 && < 20
{name: 'number', value: false, checked: false}, //number
{name: 'schar' , value: false, checked: false}, //special char
{name: 'upper' , value: false, checked: false}, //uppercase
{name: 'norep' , value: false, checked: false}, //no-repeating char
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
function containsNumber(string) {
    return /\d/.test(string);
}

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

//checks for repeating characters
function repeatingChar(string) {
    for (let i = 0; i < string.length; i ++) {
        if (string[i] === string[i+1] && string[i] === string[i+2]) {
            return true;
        }
    }
    return false;
}

//tests for a specific lenght
function lengthInterval(string, min, max) {
    return string.length >= min && string.length <= max;
}

//validate pattern requirements
function patternValidade(string) {
    if (containsLowercase(string))   pattern[0] = true; else pattern[0] = false
    if (containsUppercase(string))   pattern[1] = true; else pattern[1] = false
    if (containsDifferent(string))   pattern[2] = true; else pattern[2] = false 
    if (string.length >= 8)          pattern[3] = true; else pattern[3] = false
}

//event listener for password input
/*
{name: 'lenght', value: false}, //lenght > 8 && < 20
{name: 'number', value: false}, //number
{name: 'schar' , value: false}, //special char
{name: 'upper' , value: false}, //uppercase
{name: 'norep' , value: false}, //no-repeating char
*/
inputPassword.addEventListener('input', (e) => {
    //get password input value
    var val = e.target.value;
    
    //check passoword strength
    parameters[0].value = lengthInterval(val, 10, 20);
    parameters[1].value = containsNumber(val);
    parameters[2].value = containsSpecialChar(val);
    parameters[3].value = containsUppercase(val);
    parameters[4].value = !repeatingChar(val);

    //check for patterns requirements and add styling classes to font awesome icons
    patternValidade(val);
    for (let i = 0; i < pattern.length; i ++) {
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

    //check for strenght parameters requirements and change strenght var value
    for (let i = 0; i < parameters.length; i ++) {

        switch(parameters[i].value) {
            case false:
                if (parameters[i].checked === true) {strength --}
                parameters[i].checked = false;
            break;

            case true:
                if (parameters[i].checked === false) {strength ++}
                parameters[i].checked = true;
            break;
        }
    }

    //add and remove styling to blocks based on the value of the strenght var
    switch(strength) {

        case 0:
            for (let i = 0; i < block.length; i ++) {
                block[i].classList.remove('s1');
                block[i].classList.remove('s2');
                block[i].classList.remove('s3');
                block[i].classList.remove('s4');
            }
        break;

        case 1:
            if (val === "") {                
                for (let i = 0; i < block.length; i ++) {
                    block[i].classList.remove('s1');
                    block[i].classList.remove('s2');
                    block[i].classList.remove('s3');
                    block[i].classList.remove('s4');
                }
            }
        break;

        case 2:
            block[0].classList.add('s1');

            for (let i = 0; i < block.length; i ++) {
                block[i].classList.remove('s2');
                block[i].classList.remove('s3');
                block[i].classList.remove('s4');
            }
        break;

        case 3:
            block[0].classList.add('s2');
            block[1].classList.add('s2');

            for (let i = 0; i < block.length; i ++) {
                block[i].classList.remove('s3');
                block[i].classList.remove('s4');
            }
        break;
        
        case 4:
            block[0].classList.add('s3');
            block[1].classList.add('s3');
            block[2].classList.add('s3');

            for (let i = 0; i < block.length; i ++) {
                block[i].classList.remove('s4');
            }
        break;

        case 5:
            block[0].classList.add('s4');
            block[1].classList.add('s4');
            block[2].classList.add('s4');
            block[3].classList.add('s4');
        break;
    }

    //debug
    console.log('lenght    ' + parameters[0].value + ' ' + parameters[0].checked);
    console.log('number    ' + parameters[1].value + ' ' + parameters[1].checked);
    console.log('schar     ' + parameters[2].value + ' ' + parameters[2].checked);
    console.log('upper     ' + parameters[3].value + ' ' + parameters[3].checked);
    console.log('norep     ' + parameters[4].value + ' ' + parameters[4].checked);
    console.log('STRENGTH  ' + strength);
    console.log('---');
    
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

//prevent form from restarting page
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

//event listener for submit
inputSubmit.addEventListener('click', () => {
    sectionAlert.classList.remove('invisible');
    boxP.innerHTML = "força: ";
    boxSpan.innerHTML = "" + strength;
});
/*

sequencias:
abc...
123...
!@#...

*/