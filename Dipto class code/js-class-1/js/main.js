const username=document.querySelector("#username");
const password=document.querySelector("#password");
const confirmPassword=document.querySelector("#confirmPassword");

const wrongUsername=document.querySelector("#wrongUsername");
const wrongPassword=document.querySelector("#wrongPassword");

const user=["dipto@gmail.com"]
const pass=["12345"]


console.log(user,pass)

function logIn(e){
    e.preventDefault();
    if(!username.value){
        wrongPassword.innerHTML="";
        wrongUsername.innerHTML="place input your username";
        wrongUsername.style.color="red";
    }else if(!password.value){
        wrongUsername.innerHTML="";
        wrongPassword.innerHTML="place input your password";
        wrongPassword.style.color="red";
    }else {
        if(user[0]===username.value){
            if(pass[0]===password.value){
                window.location.assign("../pages/home.html")
            }else{
                alert("your password incorrect")
            }
        }else {
            alert("your user name incorrect")
        }
    }
}


function registration(e){
    e.preventDefault();
    console.log(password.value,confirmPassword.value)
    if(!username.value){
        wrongPassword.innerHTML="";
        wrongUsername.innerHTML="place input your username";
        wrongUsername.style.color="red";
    }else if(!password.value){
        wrongUsername.innerHTML="";
        wrongPassword.innerHTML="place input your password";
        wrongPassword.style.color="red";
    }else{
        if(password.value==confirmPassword.value){
            const newUsername = document.forms[0].username.value;
            const newPassword = document.forms[0].password.value;
            console.log(newUsername,newPassword)
            user.pop();
            pass.pop();
            user.push(newUsername);
            pass.push(newPassword);
            alert("registration successful")
            window.location.href="../index.html"
        }else{
            alert("your password doesn`t match incorrect")
        }
    }
}

function forgot(e){
    e.preventDefault();

    if(!username.value){
        wrongUsername.innerHTML="place input your username";
        wrongUsername.style.color="red";
    }else{
        username.value="";
        alert("forgot password successful")
    }
}

