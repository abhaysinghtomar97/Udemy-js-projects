const btnElement =document.querySelector('button');
const DefName = document.querySelector('span');

btnElement.onclick=function(){
    const name=prompt("Enter your Name Here: ");
    DefName.textContent=name;
}
