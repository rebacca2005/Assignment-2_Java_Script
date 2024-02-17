// constants for query selector
const myStudentId = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const custColorBtn = document.querySelector('.custColor');
const randColorBtn = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');

// function to change bg color from user input and add student id
function changeCustomColor() {
    const inputValue = customNumberInput.value;
    myStudentId.textContent = `Student ID: ${inputValue}`;

    // Change background color based on input value
    changeBackgroundColor(inputValue);
}

// function to change background color based on input value
function changeBackgroundColor(value) {
    const body = document.body;
    console.log(value)
    // Reset background color
    body.style.background = '';

    // Check conditions and set background color accordingly
    if (value < 0 || value > 100) {
        body.style.background = 'red';
    } else if (value >= 0 && value <= 20) {
        body.style.background = 'green';
    } else if (value > 20 && value <= 40) {
        body.style.background = 'blue';
    } else if (value > 40 && value <= 60) {
        body.style.background = 'orange';
    } else if (value > 60 && value <= 80) {
        body.style.background = 'purple';
    } else if (value > 80 && value <= 100) {
        body.style.background = 'yellow';
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    myStudentId.textContent = `Student ID: ${randomValue}`;

    // Implement your logic to change background color based on random value
    changeBackgroundColor(randomValue);
}

// function to generate options for select list
function addList() {
    const imageOptions = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg", "./img/img4.jpg", "./img/img5.jpg"];

    // Add options based on the images array
    for(let i = 0; i< imageOptions.length; i++){
        const option = document.createElement("option");
        option.text = imageOptions[i];
        option.value = imageOptions[i];
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = selectedImage
    
}

// event listeners for on click event of buttons and select
custColorBtn.addEventListener('click', changeCustomColor);
randColorBtn.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Initialize the options in select list
addList();
