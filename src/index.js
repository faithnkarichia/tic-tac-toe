    document.addEventListener("DOMContentLoaded",function(){



let buttons=document.querySelectorAll(".tic-tac-toe-container div")

buttons.forEach((button)=>{
button.addEventListener("click",()=>{

    const randomValue=Math.random()<0.5? "*":"0"
button.textContent=randomValue
})




})



























        
    })