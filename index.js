// Code your solutions in this file
const cards = [];

function writeCards(name)
{
   for (let i = 0; i < name.length; i++) { 
      cards.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
   }

   return cards
}

function countDown(num)
{
  let i = num
  while (i >= 0) {
     console.log(i);
     i--
  }
}
