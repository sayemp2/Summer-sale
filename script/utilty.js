function setElementValue(Element,value){
    const Elementvalue = document.getElementById(Element);
    Elementvalue.innerText = value.toFixed(2);
 }

function opaciityDown(Element){
    const elementName = document.getElementById(Element);
    elementName.classList.add('opacity-30');
    console.log('perfect');
}
function removeOpaciityDown(Element){
    const elementName = document.getElementById(Element);
    elementName.classList.remove('opacity-30');
    console.log('perfect');
}

function addHidden(Element){
    const elementName = document.getElementById(Element);
    elementName.classList.add('hidden');
}