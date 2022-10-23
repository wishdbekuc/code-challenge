var address = document.querySelector("#address");
var amount = document.querySelector("#input-amount");
var otp = document.querySelector("#input-otp");
var canSubmit = false;
var submit = document.querySelector(".submitbutton");

submit.addEventListener('click', submittable);

function submittable(element) { //function to check if form is filled correctly
    let add_length = address['value'].length;
    let otp_length = otp['value'].length;
    let amount_size = parseFloat(amount['value']);

    let condition1 = add_length >= 26 && add_length <=35; //address must be between 26-35 characters
    let condition2 = otp_length == 6; //otp must have 6 digits
    let condition3 = amount_size > 0; //amount must be greater than 0

    if (!(condition1 && condition2 && condition3)) {
        alert('Fields incorrectly filled!\nCheck if you have filled up the OTP correctly!')
        element.preventDefault();
        element.stopPropagation();
    } else {
        alert('Funds sent!\nTo the moon!');
    }

}

var blobWrapper = document.querySelector(".blob-wrapper");

blobWrapper.style["width"] = '100%'; //size blob-wrapper appropriately to apply the overflow property effectively
blobWrapper.style["height"] = '100%';
