var pass = '12345'

var password = prompt("Enter your password")

if(password === ''){
    alert("Please enter your password")
}

else if(password === pass){
    alert("Correct! The password you entered matchs the orignal password")
}

else if (password != pass){
    alert("Incorrect Password")
}