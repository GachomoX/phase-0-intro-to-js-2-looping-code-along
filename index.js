// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event) {
  let thanks =[];
  event = "surprise";
  for (let i= 0; i < names.length; i++) {
  thanks[i] = 'Thank you, '+ names[i] +', for the wonderful ' +event+' gift!';
  }
  return thanks;
}


let number = 10;
function countDown (number) {
  while (number >= 0) {
    console.log(number--);
  }
} 