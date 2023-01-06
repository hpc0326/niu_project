import {HOST} from 'API'

const Name = document.getElementById('Name')
const ID = document.getElementById('studentID')
const btnnext = document.getElementById('next')
const Nameframe = document.getElementById('Nameframe')
const IDframe = document.getElementById('IDframe')



const sendBooking = () => {
    const payload = {
        studentID : sessionStorage.getItem('ID'),
        name : sessionStorage.getItem('name')
    }
    const seat = JSON.parse(sessionStorage.getItem('seat'))
    let error = []

    axios.post(
        `http://${HOST}/niuDB/howMany/`, 
        payload, 
        {responseType : 'json'})
        .then(function(response) {
            console.log(response.data.msg)
            if(response.data.msg == '0'){
                console.log('0')
                if( seat.length > 1){

                    payload['seat'] = seat[0]
                    axios.post(
                        `http://${HOST}/niuDB/book/`, 
                        payload, 
                        {responseType : 'json'})
                        .then(function(response) {
                            if(response.data.msg == 'unavailable'){
                               error.push (seat[0])
                            }else{
                                console.log(`${seat[0]} ${response.data.msg}`)
                            }
                        }
                    )
            
                        payload['seat'] = seat[1]
                        axios.post(
                            `http://${HOST}/niuDB/book/`, 
                            payload, 
                            {responseType : 'json'})
                            .then(function(response) {
                                if(response.data.msg == 'unavailable'){
                                   error.push (seat[2])
                                }else{
                                    console.log(`${seat[1]} ${response.data.msg}`)
                                }
                            }
                        )
                    
                        sessionStorage.setItem('error', JSON.stringify(error))
                       
            
            
                }else{
                    payload['seat'] = seat[0]
                    axios.post(
                        `http://${HOST}/niuDB/book/`, 
                        payload, 
                        {responseType : 'json'})
                        .then(function(response) {
                            console.log(response)
                        })
                
                }

            }else if(response.data.msg == '1'){
                console.log('1')
                if( seat.length > 1){

                    payload['seat'] = seat[0]
                    axios.post(
                        `http://${HOST}/niuDB/book/`, 
                        payload, 
                        {responseType : 'json'})
                        .then(function(response) {
                            if(response.data.msg == 'unavailable'){
                               error.push (seat[0])
                            }else{
                                console.log(`${seat[0]} ${response.data.msg}`)
                            }
                        }
                    )
                        
                        error.push (seat[1])
                    
                        sessionStorage.setItem('error', JSON.stringify(error))
                        sessionStorage.removeItem('seat')
            
            
                }else{
                    payload['seat'] = seat[0]
                    axios.post(
                        `http://${HOST}/niuDB/book/`, 
                        payload, 
                        {responseType : 'json'})
                        .then(function(response) {
                            console.log(response)
                        }
                    )
                }
                 sessionStorage.removeItem('seat')
            }else{
                console.log('else')
                seat.map((e)=> {
                    error.push(e)
                })
                 sessionStorage.removeItem('seat')
                sessionStorage.setItem('error', JSON.stringify(error))
                window.location = '/BookingError'
            }
        })


    
    
}




const checkInfo = (Name, ID) => {
    let IDb, Nameb
    const reg = ID.match(/[a-zA-Z]{1}[0-9]{7}/);
    console.log(reg)
    if(ID && Name && reg){
        console.log('id name true')
        if(Nameframe.classList.contains('warning')){
            Nameframe.classList.toggle('warning')
        }
        if(IDframe.classList.contains('warning')){
            IDframe.classList.toggle('warning')
        }
        return true
    }else{
        if(Name == ''){
            if(!Nameframe.classList.contains('warning')){
                console.log('name toggle')
                Nameframe.classList.toggle('warning')
                console.log( Nameframe.classList)
                
            }
           
        }else{
            if(Nameframe.classList.contains('warning')){
                Nameframe.classList.toggle('warning')
            }
        }
    
        if(ID == '' ||  !reg){
            if(!IDframe.classList.contains('warning')){
                console.log('id toggle')
                IDframe.classList.toggle('warning')
                console.log( ID.classList)
            }
            
        }else{
            if(IDframe.classList.contains('warning')){
                IDframe.classList.toggle('warning')
            }
        }
        return false
    }

   
}

btnnext.onclick = (e) => {
    if( checkInfo(Name.value, ID.value)){
        sessionStorage.setItem('name', Name.value)
        sessionStorage.setItem('ID', ID.value)

        sendBooking()
        window.location = '/result'
    }

}