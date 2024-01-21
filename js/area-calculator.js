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

    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('please type number');
        return;
    }

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
    if(isNaN(baseValue) ||isNaN(heightValue)){
        alert('please type number')
        return;
    }
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



//parallelogram
function calculateParallelogramArea(){
    const { baseValue, heightValue } = getBaseAndHeightValue('parallelogram-width','parallelogram-height');
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please insert number');
        return
    }
    const area = baseValue * heightValue;

    //show parallelogram area
    const setAnswer = document.getElementById('parallelogram-area');
    setAnswer.innerText =area
    
   
    
     addToCalculationEntry('parallelogram',area);
}

document.getElementById('submit-parallelogram').addEventListener('click',function(){
    calculateParallelogramArea();
    clearInputField('parallelogram-width','parallelogram-height');

})

function calculateEllipseArea(){
    const {baseValue,heightValue}=getBaseAndHeightValue('ellipse-major-radius','ellipse-minor-radius');
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please insert number');
        return
    }
    const area =3.14 * baseValue * heightValue;
    const areaTwoDecimal =area.toFixed(2);
    const setAnswer = document.getElementById('ellipse-area');
    setAnswer.innerText =areaTwoDecimal;
    
   
    
     addToCalculationEntry('ellipse',areaTwoDecimal);
}

document.getElementById('submit-ellipse').addEventListener('click',function(){
    calculateEllipseArea();
    clearInputField('ellipse-major-radius','ellipse-minor-radius');

})


function addToCalculationEntry(areaType,area){
    const calculationEntry =document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p =document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count+1}.${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}


