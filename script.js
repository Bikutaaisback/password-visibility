let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');
function passwordView(){
    if(password.type=='password'){
        password.type ='text';
        eyeicon.src='eye-open.png';
    }else{
        password.type ='password';
        eyeicon.src='eye-close.png';
    }
}
eyeicon.addEventListener('click', passwordView)