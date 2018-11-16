// define drawLetters()
// no parameters

// returns an array of ten strings = > the hand of letters that the player has drawn
// each string should have one letter  ["L", "K", "R"....]
// randomly drawn from a pool of letters letterDistribution

const Adagrams = {

  letterDistribution : {
   "A": 9,
   "B": 2,
   "C": 2,
   "D": 4,
   "E": 12,
   "F": 2,
   "G": 3,
   "H": 2,
   "I": 9,
   "J": 1,
   "K": 1,
   "L": 4,
   "M": 2,
   "N": 6,
   "O": 8,
   "P": 2,
   "Q": 1,
   "R": 6,
   "S": 4,
   "T": 6,
   "U": 4,
   "V": 2,
   "W": 2,
   "X": 1,
   "Y": 2,
   "Z": 1,
 },

  drawLetters() {

    // helper funtion to collect random letters in bag
    // function random_item(items) {
    //   return items[Math.floor(Math.random()*items.length)];
    // }

    // puts available letters in bag
    let bag = [];
    for (let [key, value] of Object.entries(this.letterDistribution)) {
      for (let i = 0; i < value; i++) { bag << key }
    }
    console.log(bag)

    //  adds random letters to draw and removes them from bag pool
    // let drawn = [];
    // for (let i = 0; i < 10; i++) {
    //   let letter = random_item(bag);
    //   drawn << letter;
    //   delete bag.find(letter)
    // }
    //
    // bag = [];
    // return drawn
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
