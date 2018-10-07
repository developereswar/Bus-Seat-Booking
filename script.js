var selectedSeat = [];
var totalSeats = 32;

function GenerateSeats(){
  let bus = document.getElementById('bus');
  for(let i =0; i < totalSeats; i++){
    let Seats = document.createElement("div");
    Seats.className = 'Seats'
    let Attr = document.createAttribute("id");
    Attr.value = 'R'+i
    Seats.setAttributeNode(Attr);
    let Attr2 = document.createAttribute("onclick");
    Attr2.value = "selectseat(this)";
     Seats.setAttributeNode(Attr2);
    bus.appendChild(Seats)
  }
}

function selectseat(e){
  e.classList.toggle("selectedSeats")
  let i = selectedSeat.indexOf(e.id);
  (i === -1) ? selectedSeat.push(e.id) : selectedSeat.splice(i, 1); 
}



function showSeats(id){
	(selectedSeat.length > 0) ? alert(selectedSeat): alert("Please Select Your Seats");
}

function clear(){
  selectedSeat=[];
}