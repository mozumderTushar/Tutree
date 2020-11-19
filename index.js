function toggleClock() {
    var myBtn = document.getElementById('radioBtn');
    var displaySetting = myBtn.style.display;
    var displayBtn = document.getElementById('displayHideBtn');

    if (displaySetting == 'block') {
        myBtn.style.display = 'none';
        displayBtn.innerHTML = '+';
    }
    else {
        myBtn.style.display = 'block';
        displayBtn.innerHTML = '-';
    }
}

function toggleClockTwo() {

    var myBtn = document.getElementById('Job');
    var displaySetting = myBtn.style.display;
    var displayBtn = document.getElementById('displayHideBtnTwo');


    if (displaySetting == 'block') {
        myBtn.style.display = 'none';
        displayBtn.innerHTML = '+';
    }
    else {
        myBtn.style.display = 'block';
        displayBtn.innerHTML = '-';
    }
}

function toggleClockThree() {
    var myBtn = document.getElementById('Categories');

    var displaySetting = myBtn.style.display;

    var displayBtn = document.getElementById('displayHideBtnThree');

    if (displaySetting == 'block') {
        myBtn.style.display = 'none';
        displayBtn.innerHTML = '+';
    }
    else {
        myBtn.style.display = 'block';
        displayBtn.innerHTML = '-';
    }
}

function toggleClockFour() {
    var myBtn = document.getElementById('City');
    var displaySetting = myBtn.style.display;
    var displayBtn = document.getElementById('displayHideBtnFour');

    if (displaySetting == 'block') {
        myBtn.style.display = 'none';
        displayBtn.innerHTML = '+';
    }
    else {
        myBtn.style.display = 'block';
        displayBtn.innerHTML = '-';
    }
}

function toggleCategories() {
    var displayCategories = document.getElementById('moreCategories');
    var displaySetting = displayCategories.style.display;
    var displayBtn = document.getElementById('moreDisplay');

    if (displaySetting == 'block') {
        displayCategories.style.display = 'none';
        displayBtn.innerHTML = 'view more';
    }
    else {
        displayCategories.style.display = 'block';
        displayBtn.innerHTML = 'view less';
    }
}