// Accessing All Buttons 
let all_buttons = document.getElementsByTagName('button');

// Copying Default Buttons Colors
let copyButtons = [];
for (let iter = 0; iter < all_buttons.length; iter++) {
        copyButtons.push(all_buttons[iter].classList[1]);
}

function changeButtonColors(buttonObject) {
        // console.log(buttonObject.value);

        if (buttonObject.value === 'red') {
                buttonRedColor();
        } else if (buttonObject.value === 'blue') {
                buttonBlueColor();
        } else if (buttonObject.value === 'green') {
                buttonGreenColor();
        } else if (buttonObject.value === 'reset') {
                buttonColorReset();
        } else {
                buttonRandomColors();
        }
}


function buttonRedColor() {
        for (let iter = 0; iter < all_buttons.length; iter++) {
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add('btn-danger');
        }
}

function buttonGreenColor () {
        for (let iter = 0; iter < all_buttons.length; iter++) {
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add('btn-success');
        }
}

function buttonBlueColor () {
        for (let iter = 0; iter < all_buttons.length; iter++) {
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add('btn-primary');
        }
}

function buttonColorReset() {
        for (let iter = 0; iter < all_buttons.length; iter++) {
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add(copyButtons[iter]);
        }
}

function buttonRandomColors() {
        let colorChoices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning', 'btn-info', 'btn-secondary', 'btn-light'];
        for (let iter=0; iter <all_buttons.length; iter++) {
                let randomNum = Math.floor(Math.random() * 4);
                all_buttons[iter].classList.remove(all_buttons[iter].classList[1]);
                all_buttons[iter].classList.add(colorChoices[randomNum]);
        }
}