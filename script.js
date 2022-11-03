var errors = 0;
function formValidation(){
    errors = 0;

    if (document.getElementById('firstName').value.length < 3){
        errors++;
        document.getElementById('firstNameError').style.visibility = 'visible';
    }else {
        document.getElementById('firstNameError').style.visibility = 'hidden';
    }

    if (document.getElementById('lastName').value.length < 3){
        errors++;
        document.getElementById('lastNameError').style.visibility = 'visible';
    }else {
        document.getElementById('lastNameError').style.visibility = 'hidden';
    }

    var email = document.getElementById("InputEmail").value;
    var exp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.]{5})+\.([A-Za-z]{2,4})$/;

    if(exp.test(email)){
        document.getElementById('InputEmailError').style.visibility = 'hidden';
    }else {
        errors++;
        document.getElementById('InputEmailError').style.visibility = 'visible';
    }

    var mobile = document.getElementById("InputMobile").value;

    if(mobile != ''){
        document.getElementById('InputMobileError').style.visibility = 'hidden';
    }else {
        errors++;
        document.getElementById('InputMobileError').style.visibility = 'visible';
    }

    var btns = document.querySelectorAll('input[type="radio"]');

    let gendererr = 0;

    for(var i=0;i<btns.length;i++){
        if(btns[i].checked== true){
            gendererr = 0;
            break;
       }else{
        gendererr++;
       }
    }

    if(gendererr == 0){
        document.getElementById('InputGenderError').style.visibility = 'hidden';
    }else {
        errors++;
        document.getElementById('InputGenderError').style.visibility = 'visible';
    }
    

    if (errors == 0){
        alert('Your details has been successfully submitted!')
        var inputs = document.getElementsByTagName('input');
        for(i = 0; i < inputs.length; i++){
            inputs[i].value = '';
        }
    }
}