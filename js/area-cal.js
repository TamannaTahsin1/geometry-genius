function calculateTriangleArea(){
    //for triangle 
    const baseField = getInputValue('triangle-base');
    const heightField = getInputValue('triangle-height');

    const area = 0.5 * baseField * heightField;
    setElementInnerText ('triangle-area', area);  
}
// for rectangle
function calculateRectangleArea(){
    const widthField = getInputValue('rectangle-weight'); 
    const lengthField = getInputValue('rectangle-length');

    const area = widthField * lengthField;
    setElementInnerText('rectangle-area',area);
}
// for  Parallelogram 
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');  
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}
// for Rhombus
function calculateRhombusArea(){
    const rhombusFirstArea = getInputValue('rhombus-first-area');
    const rhombusSecondArea = getInputValue('rhombus-second-area');

    const area = 0.5* rhombusFirstArea * rhombusSecondArea;
    setElementInnerText('rhombus-area', area)
}
// for Pentagon
function calculatePentagonArea(){
    const pentagonPerimeter = getInputValue('pentagon-perimeter');
    const pentagonBase = getInputValue('pentagon-base');

    const area = 0.5 * pentagonPerimeter * pentagonBase;
    setElementInnerText('pentagon-area', area);
}
// for ellipse 
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius') ;
    const minorRadius = getInputValue('ellipse-minor-radius') ;

    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);

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