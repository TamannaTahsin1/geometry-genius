function calculateTriangleArea(){
    //for triangle 
    const baseField = getInputValue('triangle-base');
    const heightField = getInputValue('triangle-height');

    const area = 0.5 * baseField * heightField;
    setElementInnerText ('triangle-area', area);  

    // add to calculation entry
    addToCalculationEntry('triangle', area)
}
// for rectangle
function calculateRectangleArea(){
    const widthField = getInputValue('rectangle-weight'); 
    const lengthField = getInputValue('rectangle-length');

    // validation for width and length
    if(isNaN(widthField) || isNaN(lengthField)){
        alert('Please insert a number');
        return;
    }
    const area = widthField * lengthField;
    setElementInnerText('rectangle-area',area);

    // add to calculation entry
    addToCalculationEntry('rectangle', area)
}
// for  Parallelogram 
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');  
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('parallelogram', area)
}
// for Rhombus
function calculateRhombusArea(){
    const rhombusFirstArea = getInputValue('rhombus-first-area');
    const rhombusSecondArea = getInputValue('rhombus-second-area');

    const area = 0.5* rhombusFirstArea * rhombusSecondArea;
    setElementInnerText('rhombus-area', area)

    // add to calculation entry
    addToCalculationEntry('rhombus', area)
}
// for Pentagon
function calculatePentagonArea(){
    const pentagonPerimeter = getInputValue('pentagon-perimeter');
    const pentagonBase = getInputValue('pentagon-base');

    const area = 0.5 * pentagonPerimeter * pentagonBase;
    setElementInnerText('pentagon-area', area);

    // add to calculation entry
    addToCalculationEntry('pentagon', area)    
}
// for ellipse 
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius') ;
    const minorRadius = getInputValue('ellipse-minor-radius') ;

    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);

        // add to calculation entry
        addToCalculationEntry('ellipse', area)
}
// reuseable input value function (for all)
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat (inputValueText);
    return value; 
}
// reuseable set span, p, div etc text (for all)
    function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
    }
// add to calculation entry
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    
    const count = calculationEntry.childElementCount;

    const p =document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup>
    <button class="btn btn-sm btn-success">Convert</button>`;
    p.innerHTML =areaType+ ' ' + area; 
    calculationEntry.appendChild(p);
}