const seatcontainerhigh = document.querySelectorAll('.seatcontainer')
const seatcontainerlow = document.querySelectorAll('.seatcontainer')
const seats = document.querySelectorAll('.rowseat .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

// update seat status
function updateSelectedSeat() {
    const selectedSeats = document.querySelectorAll('.rowseat .seat.selected')
    const selectedSeatsCount = selectedSeats.length
}
 
seatcontainerhigh.addEventListener("click", e =>{
    const classList = e.target.classList;
    console.log('high')
    if(classList.contains("seat") && !classList.contains("occupied")){
        classList.toggle("selected");
        updateSelectedSeat();
    }
 });

 seatcontainerlow.addEventListener("click", e =>{
    console.log('low')
    const classList = e.target.classList;
    if(classList.contains("seat") && !classList.contains("occupied")){
        classList.toggle("selected");
        updateSelectedSeat();
    }
 });