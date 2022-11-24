const seatcontainerhigh = document.querySelector('.seatcontainer.high')
const seatcontainerlow = document.querySelector('.seatcontainer.low')
const seats = document.querySelectorAll('.rowseat .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

let dollar = 0
let num = 0
// update seat status
function updateSelectedSeat() {
    const selectedSeats = document.querySelectorAll('.rowseat .seat.selected')
    const selectedSeatsCount = selectedSeats.length
}


seatcontainerhigh.addEventListener("click", e =>{
    const classList = e.target.classList;
    console.log('high')
    

    if(classList.contains("seat") && !classList.contains("occupied")){
        if(classList.contains('selected')){
            dollar -= 250
            total.textContent = dollar
            num -= 1
            count.textContent = num
        }else{
            dollar += 250
            total.textContent = dollar
            num += 1
            count.textContent = num
        }
        classList.toggle("selected");
        updateSelectedSeat();
    }
 });

 
 seatcontainerlow.addEventListener("click", e =>{
    console.log('low')
    
    const classList = e.target.classList;
    const n = e.target.getAttribute('data-seat')
    console.log(n)
    if(classList.contains("seat") && !classList.contains("occupied")){
        if(classList.contains('selected')){
            dollar -= 150
            total.textContent = dollar
            num -= 1
            count.textContent = num
        }else{
            dollar += 150
            total.textContent = dollar
            num += 1
            count.textContent = num
        }
        classList.toggle("selected");
        updateSelectedSeat();
    }
 });