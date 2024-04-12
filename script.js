const inputPassword = document.getElementById('password');
const block         = document.querySelectorAll('.block');

var strength = 0;
const parameters = [
{name: 'lenght', value: false},
{name: 'number', value: false},
{name: 'schar' , value: false},
{name: 'upper' , value: false},
];

//checks if a string contains any digit
function containsNumber(string) {return /\d/.test(string)}

//checks if a string containes uppercase characters
function containsUppercase(string) {
    const  uppercaseChars = /[A-Z]/;
    return uppercaseChars.test(string);
}

//checks if a string contains any speccial characters
function containsSpecialChar(string) {
    const  specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]/;
    return specialChars.test(string);
}

inputPassword.addEventListener('input', (e) => {
    var val = e.target.value;

    
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
    }   
});

/*
comprimento

*/