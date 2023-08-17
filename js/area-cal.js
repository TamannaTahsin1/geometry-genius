function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base)

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText)
    console.log(height)

    // calculate total value
    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}
// for rectangle
function calculateRectangleArea(){
    // get rectangle width value
    const widthField = document.getElementById('rectangle-weight');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width)

    // get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length)

    // calculate total value
    const area = width* length;
    console.log(area);
    
    // show rectangle area
    const rectAreaSpan = document.getElementById('rectangle-area');
    rectAreaSpan.innerText = area;
}
// for  Parallelogram 
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base)
    const height = getInputValue('parallelogram-height');
    console.log(height)

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
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
// reuseable set span, p, div etc text
    function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
    }