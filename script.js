let checkButton=document.getElementById("checkButton")

checkButton.addEventListener("click", ()=>{
  
    let userInput=document.getElementById("userInput")
    let num= userInput.value
    let output=document.getElementById("output")
    
    num = parseInt(num)
    if (isNaN(num) || num <= 1) {
        output.innerText = "Please enter a valid number greater than 1."
        return
    }

    let isPrime = true
    
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        output.innerText = num + " is a Prime Number!"
    } else {
        output.innerText = num + " is not a Prime Number."
    }
    
    userInput.value=''
    userInput.focus()
})


