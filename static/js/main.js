var all_buttons = document.getElementsByTagName('button'); 
var copyButtons = [];

for (let i=0; i<all_buttons.length; i++) {
        copyButtons.push(all_buttons[i].classList[1]);
}

// console.log(copyButtons);

function buttonChangeColor(buttonObject) {
        // console.log(buttonObject.value);

        if (buttonObject.value === 'red') {
                buttonsRed();
        } else if (buttonObject.value === 'green') {
                buttonsGreen();
        } else if (buttonObject.value === 'blue') {
                buttonsBlue();
        } else if (buttonObject.value === 'reset') {
                buttonReset();
        } else if(buttonObject.value === 'random') {
                buttonRandom();
        }
}

function buttonsRed() {
        for (let iter = 0; iter < all_buttons.length; iter++) {
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add('btn-danger');
        }
}

function buttonsGreen() {
        for(let iter = 0; iter < all_buttons.length; iter++) {
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add('btn-success');
        }
}

function buttonsBlue() {
        for (let iter = 0; iter <all_buttons.length; iter++) {
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add('btn-primary');
        }
}

function buttonReset() {
        for (let iter = 0; iter <all_buttons.length; iter++) {
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add(copyButtons[iter]);
        }
}

function buttonRandom() {
        let colorChoices = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-info', 'btn-secondary', 'btn-light'];

        for (let iter = 0; iter < all_buttons.length; iter++) {
                let randomNum = Math.floor(Math.random() * 4);
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add(colorChoices[randomNum]);
        }
}