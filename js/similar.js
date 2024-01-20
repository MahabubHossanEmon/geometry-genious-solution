function getBaseAndHeightValue(elementId1,elementId2) {
    // You need to implement this function to retrieve base and height values
    // from user input, an API, or any other source.
    
    // For example, assuming you have input fields with IDs 'baseInput' and 'heightInput':
    const baseInput = document.getElementById(elementId1);
    const heightInput = document.getElementById(elementId2);

    // You may need to parse the input values depending on your use case
    const baseValue = parseFloat(baseInput.value);
    const heightValue = parseFloat(heightInput.value);

    // You can also perform validation or error checking here if needed

    // Return the values or use them directly in the calculation
    return { baseValue, heightValue };
}




//input field clear
function clearInputField(elementId1,elementId2){
    const baseField = document.getElementById(elementId1);
    const heightField =document.getElementById(elementId2);
    baseField.value ='';
    heightField.value='';
}