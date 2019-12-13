console.log('regex');

// $('#submit').on('click', function(){
//
// var age = $('#age').val(); //read value from input element
// console.log(age);
//
// //define the pattern
// var agePattern = /^[0-9]{2}$/;
// var ageTested = agePattern.test(age); //test method matches age with agePattern
// console.log(ageTested);
//
//
// });

$('#postal').on('click',function(){
  //$(this).value= "";
  document.getElementById('postal').value = '';
});

$('#phone').on('click',function(){
  //$(this).value= "";
  document.getElementById('phone').value = '';
});

//verifying Postal code
$('#submit').on('click', function(){

var postalCode = $('#postal').val(); //read value from input element
console.log(postalCode);
var phoneCode = $('#phone').val(); //read value from input element
console.log(phoneCode);

//define the pattern
//verifying postal code
var postalPattern = /^[a-z]{2}[0-9]{1,2} ?[0-9][A-Z]{2}$/;
var postalTested = postalPattern.test(postalCode); //test method matches age with postalPattern
console.log(postalTested);
if (postalTested === true){
  alert('Postal code entered correctly');
} else {
  alert('Please enter correct digits');
}


// verifying phone number format for New Zealand
var phonePattern = /^[+]64[-\s\(][0-9]{2}[-\s\)][0-9]{3} ?[0-9]{4}$/;
var phoneTested = phonePattern.test(phoneCode); //test method matches age with postalPattern
console.log(phoneTested);
if (phoneTested === true){
  alert('Phone number entered correctly');
} else {
  alert('Please enter correct phone number, example +64(04)384 9624 or +64-04-384 9624');
}

});




$('#submit').on('click', function(){

var username = $('#name').val();
var password = $('#password').val();
console.log(username, password);

if ((username !== "") && (password !== "")) {

}


});
