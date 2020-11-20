function calculateBMI(){
    var weight = document.bmiForm.weight.value;
    var height = document.bmiForm.height.value;


    if (weight > 0 && height > 0){
        var finalBMI = weight/(height/100*height/100);
        var finalBMI = finalBMI.toFixed(2);
        document.bmiForm.bmi.value = finalBMI;

        if (finalBMI < 18.5){
            document.getElementById('results').innerText = 'You\'re underweight. You should eat a bit more';
            document.getElementById('results').classList.remove('hide');
        } if (finalBMI > 18.5 && finalBMI <= 24.9){
            document.getElementById('results').innerText = 'You have a normal body index. Keep it going!';
            document.getElementById('results').classList.remove('hide');
        } if (finalBMI > 24.9 && finalBMI <= 29.9){
            document.getElementById('results').innerText = 'You\'re overweight. Eat a bit more healthy food';
            document.getElementById('results').classList.remove('hide');
        } if (finalBMI > 29.9 && finalBMI <= 34.9){
            document.getElementById('results').innerText = 'You\'re obese. You need to take your health a bit more seriously';
            document.getElementById('results').classList.remove('hide');
        } if (finalBMI > 34.9){
            document.getElementById('results').innerText = 'You\'re extremely obese. Get help';
            document.getElementById('results').classList.remove('hide');
        } 
    } else {
        alert('Please fill in everything correctly')
    }
};
