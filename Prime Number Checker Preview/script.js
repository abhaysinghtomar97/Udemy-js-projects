let input = document.querySelector("input");
let userinput =document.querySelector(".usersinput");

let prime =document.getElementById("prime");



function isprime(){
    let num =userinput.value;
    let count=0;
   
    for(let i=2;i<=num;i++){
        if(num%i==0)
            count++;
    }
     if(!num){
        prime.innerText="Ahmmm, Please Enter Number First!"
        prime.style.color="red"
        input.style.backgroundColor="red"
    }
    else if(count>=2 || num<2){
        prime.innerText="NOT PRIME"
        prime.style.color="red"
        input.style.backgroundColor="red"
        count=0;
    }else{
        prime.innerText="PRIME"
        prime.style.color="green"
        input.style.backgroundColor="green"
        
        count=0;
    }
}