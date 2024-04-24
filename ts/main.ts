

let checkbox = document.getElementById('checkbox')! as HTMLInputElement
let Send = document.getElementById('send')! as  HTMLButtonElement


// 1
// Send.onclick = function (){}


// 2

checkbox.onclick = function() {
    if(checkbox.checked){
        Send.disabled = false
    }
    else{
        Send.disabled = true
    }
}
Send.addEventListener('click', () =>{
    console.log(checkbox.checked);
   
    
})