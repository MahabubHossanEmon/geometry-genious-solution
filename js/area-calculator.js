//triangle 

function calculateTriangleArea(){
    // //get triangle base value
    // const baseField = document.getElementById('triangle-base');
    // const baseValueText = baseField.value;
    // const baseValue = parseFloat(baseValueText);
 

    // //get triangle height value
    // const heightField =document.getElementById('triangle-height');
    // const heightFieldText = heightField.value;
    // const heightValue = parseFloat(heightFieldText);
    const { baseValue, heightValue } = getBaseAndHeightValue('triangle-base','triangle-height');

    const area = 0.5 * baseValue * heightValue;

    //show triangle area
    const setAnswer =document.getElementById('triangle-area');
    setAnswer.innerText = area;
    addToCalculationEntry('Triangle', area);

}

document.getElementById('btn-calculate').addEventListener('click',function(){
    calculateTriangleArea();
    clearInputField('triangle-base','triangle-height');
    
})

//rectangle

function calculateRactangleArea(){
    const {baseValue, heightValue} =getBaseAndHeightValue('rectangle-width','rectangle-length');
    const area =baseValue * heightValue;

    //show rectangle area
    const setAnswer = document.getElementById('rectangle-area');
    setAnswer.innerText =area;
    addToCalculationEntry('rectangle',area);
}

document.getElementById('btn-calculate1').addEventListener('click',function(){
    calculateRactangleArea()
    clearInputField('rectangle-width','rectangle-length');
    
})





function addToCalculationEntry(areaType,area){
    const calculationEntry =document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p =document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count+1}.${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}