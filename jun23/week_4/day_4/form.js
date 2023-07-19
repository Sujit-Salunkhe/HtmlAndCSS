const myform = document.getElementById('myform');
const nameinput = document.getElementById('text');
const emailinput = document.getElementById('email');
const passwordinput = document.getElementById('password');
const confirmpasswordinput = document.getElementById('confirmpassword');
const emailpattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
myform.addEventListener('submit',function (event){
    event.preventDefault();
    nameinput.addEventListener('keydown',function(event){
        if(event.key === "Enter"){
            if(nameinput.value.trim()==="" ){
                document.getElementById('texterror').textContent="please fill the name"
            }
            else{
                event.preventDefault();
                passwordinput.focus();
            }
        }
    });
passwordinput.addEventListener('keydown',function(event){
        if(event.key==='Enter'){
            if(passwordinput.value.trim()=== ''){
            event.preventDefault();
            document.getElementById('passworderror').textContent="Please fill the password"
            }
            else{
            event.preventDefault();
            emailinput.focus();
            }
    }
    })
    emailinput.addEventListener('keydown',function(event){
            if(event.key==='Enter'){
                if(!emailpattern.test(emailinput.value)){
                    event.preventDefault();
                    document.getElementById('emailerror').textContent="please fill the email correctily"
                }
                else{
                    event.preventDefault();
                    confirmpasswordinput.focus();
        
                }
                }})
        if(confirmpasswordinput.value !== passwordinput.value){
            document.getElementById('passwordmistake').textContent="Password is not match"
        }
        else{
            document.getElementById('passwordmistake').textContent=''
        }
        if(nameinput.value.trim() !== '' && emailpattern.test(emailinput.value) && passwordinput.value.trim() !== "" && confirmpasswordinput.value === passwordinput.value ){
            myform.submit()
        }
        // else{
        //     document.getElementById('error').textContent="ERROR:please fill out the required fields"
        //     event.preventDefault();

        // }
        
})
// let validations = () =>{
//     if(nameinput.value.trim() !== '' && emailpattern.test(emailinput.value) && passwordinput.value.trim() !== "" && confirmpasswordinput.value === passwordinput.value ){
//         myform.submit()
//     }      
//     else{
//             document.getElementById('error').textContent="ERROR:please fill out the required fields"
//         }
//     }