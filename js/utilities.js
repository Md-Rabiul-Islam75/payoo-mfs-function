/**
 * Common Shared functions here
 * 
 * 
 */

function getInputFieldValueById(id){
    // console.log('will get value by id');
   
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}