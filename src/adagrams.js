const Adagrams = {
  drawLetters() {

    let letterDistribution = [
      'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
      'B', 'B',
      'C', 'C',
      'D', 'D', 'D', 'D',
      'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
      'F', 'F',
      'G', 'G', 'G',
      'H', 'H',
      'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
      'J',
      'K',
      'L', 'L', 'L', 'L',
      'M', 'M',
      'N', 'N', 'N', 'N', 'N', 'N',
      'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
      'P', 'P',
      'Q',
      'R', 'R', 'R', 'R', 'R', 'R',
      'S', 'S', 'S', 'S',
      'T', 'T', 'T', 'T', 'T', 'T',
      'U', 'U', 'U', 'U',
      'V', 'V',
      'W', 'W',
      'X',
      'Y', 'Y',
      'Z'
    ];

    let random = function(items) {
      return items[Math.floor(Math.random()*items.length)];
    }

    let drawn = [];
    for (let i = 0; i < 10; i++) {
      let letter = random(letterDistribution);
      drawn.push(letter)
    }

    return drawn
  },

  usesAvailableLetters(input, lettersInHand) {
    let result = true
    let letters_array = input.toUpperCase().split('')

    letters_array.forEach(function(letter) {

      if (!lettersInHand.includes(letter)) {
        result = false;
      } else {

        let index_2 = lettersInHand.indexOf(letter)
        lettersInHand.splice(index_2, 1);
      }
    });

    return result;
  },

  scoreWord(word) {
    const scoreChart = {
      "A" : 1,
      "B" : 3,
      "C" : 3,
      "D" : 2,
      "E" : 1,
      "F" : 4,
      "G" : 2,
      "H" : 4,
      "I" : 1,
      "J" : 8,
      "K" : 5,
      "L" : 1,
      "M" : 3,
      "N" : 1,
      "O" : 1,
      "P" : 3,
      "Q" : 10,
      "R" : 1,
      "S" : 1,
      "T" : 1,
      "U" : 1,
      "V" : 4,
      "W" : 4,
      "X" : 8,
      "Y" : 4,
      "Z" : 10,
    };

    let score = 0;

    if (word.length > 6) {
      score += 8;
    }

    let letters = word.toUpperCase().split('')

    letters.forEach(function(letter) {
      if (scoreChart[letter]) {
        score += scoreChart[letter]
      } else {
        console.log("Letter does not exits")
      }
    });

    return score;
  },

// one parameter words - contains array of strings
// return hash of winning word =  hash = { word : score}
// tie breaking - shorter word wins. or one with 10 letters
// else pick the firts word
  highestScoreFrom(words) {

  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
