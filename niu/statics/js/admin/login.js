const account = document.getElementById('account')
const pw = document.getElementById('password')
const nextbtn = document.getElementById('next')
const Accountframe = document.getElementById('Accountframe')
const PWframe = document.getElementById('PWframe')
const warnning = sessionStorage.getItem('relogin')
const warntext = document.getElementById('warntext')

if(warnning){
    Accountframe.classList.toggle('warning')
    PWframe.classList.toggle('warning')
    warntext.hidden = false
}


const login = () => {

    if(account.value && pw.value ){
        
        if(Accountframe.classList.contains('warning')){
            Accountframe.classList.toggle('warning')
        }
        if(PWframe.classList.contains('warning')){
            PWframe.classList.toggle('warning')
        }

        return true
    }else{
        if(account.value == ''){
            if(!Accountframe.classList.contains('warning')){
                console.log('name toggle')
                Accountframe.classList.toggle('warning')
            }
           
        }else{
            if(Accountframe.classList.contains('warning')){
                Accountframe.classList.toggle('warning')
            }
        }
    
        if(pw.value == ''){
            if(!PWframe.classList.contains('warning')){
                console.log('id toggle')
                PWframe.classList.toggle('warning')
            }
            
        }else{
            if(PWframe.classList.contains('warning')){
                PWframe.classList.toggle('warning')
            }
        }
        return false
    }
    
}


nextbtn.onclick = () => {

    
    if(login()){
    
        const hash = CryptoJS.SHA256(pw.value).toString();
     
        const payload = {
            account : account.value,
            password : hash
        }
     
        axios.post(
            'http://localhost:8000/niuDB/super/login', 
            payload, 
            {responseType : 'json'})
            .then(function(response){
                if(response.data.msg == 'win'){
                    sessionStorage.removeItem('relogin')
                    window.location = '/super/dashboard'
                }else{
                    sessionStorage.setItem('relogin', '1')
                    window.location = '/super/login'
                }
                
            })
    }

}


