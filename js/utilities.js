/**
 * Common Shared functions here
 * 
 * 
 */

function getInputFieldValueById(id){
    // console.log('will get value by id');
   
    const inputValue = document.getElementById('id').value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}