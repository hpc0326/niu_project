const seatcontainerhigh = document.querySelector('.seatcontainer.high')
const seatcontainerlow = document.querySelector('.seatcontainer.low')
const seats = document.querySelectorAll('.rowseat .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const highti = document.getElementById('highti')
const lowti = document.getElementById('lowti')
const highcon = document.getElementById('highcon')
const highcon2 = document.getElementById('highcon2')
const lowcon = document.getElementById('lowcon')
const lowcon2 = document.getElementById('lowcon2')
const ticketbtn = document.getElementById('ticketbtn')

let dollar = 0
let high = []
let low = []

const init = () => {
    axios({
        method : 'get',
        url: 'http://localhost:8000/niuDB/getAll',
        responseType : 'json'
    }).then(function (response) {
        console.log(response)
        response.data['msg'].map((e) => {
            console.log(e)
            const tmp = `[data-seat="${e}"]`
            const item = document.querySelector(tmp)
            const classlist = item.classList
            console.log(classlist)
            item.classList.add('occupied')
            if(classlist.contains('high')){
                item.classList.remove('high')
            }

            if(classlist.contains('low')){
                item.classList.remove('low')
            }
            

        })
        
    })
}

// update seat status
const updateSelectedSeat = () => {
    const selectedSeats = document.querySelectorAll('.rowseat .seat.selected')
    const selectedSeatsCount = selectedSeats.length
}

total.addEventListener('DOMSubtreeModified', (e) => {
    console.log('mod')
    if(high.length + low.length == 0 ){
        
        ticketbtn.hidden = true
    }else{
        ticketbtn.hidden = false
    }
})


seatcontainerhigh.onclick =  (e) => {
    const classList = e.target.classList;
    console.log('high')
    const n = e.target.getAttribute('data-seat')
    const row = n.slice(0, n.indexOf('-'))
    const column = n.slice(n.indexOf('-')+1)
    console.log('You select row' ,row, ' column ', column)

    if(classList.contains("seat") && !classList.contains("occupied") && !classList.contains("unallowed")){
        if(classList.contains('selected')){
            high.pop([`${row}-${column}`])
            dollar -= 250
            total.textContent = dollar
            highti.textContent = '??????'+ high.length + '???'
            classList.toggle("selected");
            classList.toggle("high")
            updateSelectedSeat();
        }else{
            if(high.length + low.length < 2){
                high.push(`${row}-${column}`)
                dollar += 250
                total.textContent = dollar
                highti.textContent = '??????'+ high.length + '???'
                classList.toggle("selected");
                classList.toggle("high")
                updateSelectedSeat();
            }else{
                console.log('????????????????????????')
            }
            
        }
    }
    if( high.length) {
         //highcon.textContent = `?????????${high.length}?????????`
         highcon.hidden = true
         highcon2.textContent=`${high.map(x => x)} `
         highcon2.hidden = false
    }else{
        //highcon.textContent = '????????????????????????'
        highcon.hidden = false
        highcon2.hidden = true
    }
   
    console.log(high)
}

 
seatcontainerlow.onclick = (e) => {
    console.log('low')
    const classList = e.target.classList;
    const n = e.target.getAttribute('data-seat')
    const row = n.slice(0, n.indexOf('-'))
    const column = n.slice(n.indexOf('-')+1)
    console.log('You select row' ,row, ' column ', column)

    if(classList.contains("seat") && !classList.contains("occupied") && !classList.contains("unallowed")){
        if(classList.contains('selected')){
            low.pop(`${row}-${column}`)
            dollar -= 150
            total.textContent = dollar
            lowti.textContent = '??????'+ low.length + '???'
            classList.toggle("selected");
            classList.toggle("low")
            updateSelectedSeat();
        }else{
            if(high.length + low.length < 2){
                low.push(`${row}-${column}`)
                dollar += 150
                total.textContent = dollar
                lowti.textContent = '??????'+ low.length + '???'
                classList.toggle("selected");
                classList.toggle("low")
                updateSelectedSeat();
            }else{
                console.log('????????????????????????')
            }
        }
    }

    if(low.length) {
        //lowcon.textContent = `?????????${low.length}?????????`
        lowcon.hidden = true
        lowcon2.textContent=`${low.map(x => x)} `
        lowcon2.hidden = false
   }else{
        lowcon.textContent = '????????????????????????'
        lowcon.hidden = false
        lowcon2.hidden = true
   }
   console.log(low)
}
 ticketbtn.onclick = (e) => {
    sessionStorage.removeItem('seat')
    let temp = []
    high.map((e)=> {temp.push(e)})
    low.map((e)=> {temp.push(e)})
    sessionStorage.setItem('seat' , JSON.stringify(temp))
    console.log(temp)
    window.location = '/info'
 }

//website render initial
 init()