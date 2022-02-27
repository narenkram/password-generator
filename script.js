var password = document.getElementById("password");
var psswrd_range_slider;
var psswrd_limit;

/* Function to generate combination of password */
function generatePsswrd() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordLength = 50;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}


window.onload = (event) => {
    console.log('hello world');
    psswrd_range_slider = document.getElementById("psswrd_range_slider");
    psswrd_limit = document.getElementById("psswrd_limit");


    psswrd_range_slider.addEventListener("input", OutputPsswrdLimit);
    function OutputPsswrdLimit() {
        psswrd_limit.innerHTML = psswrd_range_slider.value;
    }


    generatePsswrd();

};


function copyPsswrd() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}