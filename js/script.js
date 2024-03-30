var form = document.getElementById('bmiForm');
var resetButton = document.getElementById('reset-button');

var dwnloadbutton = document.getElementById('downloadBtn');
var bannerGplay = document.getElementById('downloadBtnGplay')
var bannerAppstore = document.getElementById('downloadBtnAppStore')


function downloadBtn () {
    alert('Feature Not Available')
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;
    
    // convert height to meters
    height = height / 100;

    // calculate
    var bmi = weight / (height * height);

    // display result
    var resultElement = document.getElementById('result-bmi');
    resultElement.innerHTML = bmi.toFixed(2);

    // interpret BMI
    var interpretation = document.getElementById('interpert-header');
    var interpretDetail = document.getElementById('interpert-detail');
    if (bmi < 18.5) {
        interpretation.innerHTML = 'Underweight'
        interpretDetail.innerHTML = 'You Are Underweight'
    } else if (bmi >= 18.5 && bmi < 25) {
        interpretation.innerHTML = 'Normal weight'
        interpretDetail.innerHTML = 'You Are Normal weight'
    } else if (bmi >= 25 && bmi < 30) {
        interpretation.innerHTML = 'Overweight'
        interpretDetail.innerHTML = 'You Are Overweight'
    } else {
        interpretation.innerHTML = 'Obese'
        interpretDetail.innerHTML = 'You Are Obese'
    }
})


// onclick event listener reset button
resetButton.onclick = function () {
    form.reset();

    // reset result
    var resultElement = document.getElementById('result-bmi');
    var interpretation = document.getElementById('interpert-header');
    var interpretDetail = document.getElementById('interpert-detail');
    resultElement.innerHTML = 0;
    interpretation.innerHTML = '';
    interpretDetail.innerHTML = '';
    
}

dwnloadbutton.onclick = downloadBtn;
bannerGplay.onclick = downloadBtn;
bannerAppstore.onclick = downloadBtn;
