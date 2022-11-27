const seatcontainerhigh = document.querySelector('.seatcontainer.high')
const seatcontainerlow = document.querySelector('.seatcontainer.low')
const seats = document.querySelectorAll('.rowseat .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const ticketInfo = document.querySelector('.ticketInfo')
const btnsend = document.getElementById('send')

let dollar = 0
let num = 0
// update seat status
const updateSelectedSeat = () => {
    const selectedSeats = document.querySelectorAll('.rowseat .seat.selected')
    const selectedSeatsCount = selectedSeats.length
}

count.addEventListener('DOMSubtreeModified',(e) => {
    if(num==0){
        btnsend.hidden = true
    }else{
        btnsend.hidden = false
    }
})

seatcontainerhigh.onclick =  (e) => {
    const classList = e.target.classList;
    console.log('high')
    const n = e.target.getAttribute('data-seat')
    const row = n.slice(0, n.indexOf('-'))
    const column = n.slice(n.indexOf('-')+1)
    console.log('You select row' ,row, ' column ', column)

    if(classList.contains("seat") && !classList.contains("occupied")){
        if(classList.contains('selected')){
            dollar -= 250
            total.textContent = dollar
            num -= 1
            count.textContent = num
            classList.toggle("selected");
            classList.toggle("high")
            updateSelectedSeat();
        }else{
            if(num < 2){
                dollar += 250
                total.textContent = dollar
                num += 1
                count.textContent = num
                classList.toggle("selected");
                classList.toggle("high")
                updateSelectedSeat();
            }else{
                console.log('每人最多訂購兩張')
            }
            
        }
    }
}

 
seatcontainerlow.onclick = (e) => {
    console.log('low')
    const classList = e.target.classList;
    const n = e.target.getAttribute('data-seat')
    const row = n.slice(0, n.indexOf('-'))
    const column = n.slice(n.indexOf('-')+1)
    console.log('You select row' ,row, ' column ', column)

    if(classList.contains("seat") && !classList.contains("occupied")){
        if(classList.contains('selected')){
            dollar -= 150
            total.textContent = dollar
            num -= 1
            count.textContent = num
            classList.toggle("selected");
            classList.toggle("low")
            updateSelectedSeat();
        }else{
            if(num < 2){
                dollar += 150
                total.textContent = dollar
                num += 1
                count.textContent = num
                classList.toggle("selected");
                classList.toggle("low")
                updateSelectedSeat();
            }else{
                console.log('每人最多訂購兩張')
            }
        }
    }
}
 