let seatInfo 
const nameInfo = sessionStorage.getItem('name')
const IDInfo = sessionStorage.getItem('ID')

const nameBlank = document.getElementById('nameBlank')
const idBlank = document.getElementById('idBlank')
const seatBlank = document.getElementById('seatBlank')
const seatUUID = document.getElementById('seatUUID')
const backbtn = document.getElementById('back')

const payload = { "studentID" : IDInfo, "name" : nameInfo }


const init = () => {
    axios.post(
        'http://localhost:8000/niuDB/search/', 
        payload, 
        {responseType : 'json'})
        .then(display)

}

const display = (data) => {
    const payload = {
        studentID : sessionStorage.getItem('ID'),
        name : sessionStorage.getItem('name')
    }
    axios.post(
        'http://localhost:8000/niuDB/howMany/', 
        payload, 
        {responseType : 'json'})
        .then(function(response) {
            console.log(typeof response.data.msg)}
        )
    data = data.data.msg
    console.log(data)
    if(data == 'no order'){
        document.getElementById('noOrder').hidden = false
        document.getElementById('ordered').hidden = true
    }else{
        nameBlank.textContent = nameInfo
        idBlank.textContent = IDInfo
        seatUUID.textContent = data[0]
        let temp
        if (data.length > 2){
            temp = `${data[1]} ${data[2]}`
        }else{
            temp = `${data[1]}`
        }
        seatBlank.textContent = temp 
    }
    
   
}


init()

backbtn.onclick = () => {
    sessionStorage.clear()
    window.location = '/'
}
