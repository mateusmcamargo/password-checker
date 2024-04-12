const inputPassword = document.getElementById('password');
const block         = document.querySelectorAll('.block');

var strength = 0;

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
    //console.log(val);

    if (val === "") {
        strength = 0;
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
    if (containsUppercase(val)) {
        strength = 3;
        block[0].classList.add('s3');
        block[1].classList.add('s3');
        block[2].classList.add('s3');
    }   
    if (containsSpecialChar(val)) {
        strength = 4;
        block[0].classList.add('s4');
        block[1].classList.add('s4');
        block[2].classList.add('s4');
        block[3].classList.add('s4');
    }     
});