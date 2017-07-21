$(() => {

  let score = 0;
  let $emojisMoved = [];

// array of emojis, codepoints are used to display the emoji
const $emojis = [
  {
    name: 'Grinning Face',
    codepoint: 0x1F600,
    class: 'grinning',
  },
  {
    name: 'Crying Face',
    codepoint: 0x1f622,
    class: 'crying',
  },
  {
    name: 'Winking Face',
    codepoint: 0x1F609,
    class: 'winking',
  },
  {
    name: 'Smirking Face',
    codepoint: 0x1F60F,
    class: 'smirking',
  }
];
// console.log($emojis);

// fisher yates shuffle to get random order of $emojis
let x = $emojis.length, y, temp;

while(--x > 0){
  y = Math.floor(Math.random()*(x+1));
  temp = $emojis[y];
  $emojis[y] = $emojis[x];
  $emojis[x] = temp;
}
console.log($emojis);
console.log($emojis[1]);

for (let i = 0; i < $emojis.length; i++ ){
  $emojisMoved.push($emojis[i]);
}
console.log($emojisMoved);


// pulls random emoji from array
const $randomEmojiImage = $emojis[Math.floor(Math.random()*4)];
// const $randomEmoji1 = Math.floor(Math.random()*($emojisMoved.length-1));
// $emojisMoved.splice($randomEmoji1, 1)
// const $randomEmoji2 = Math.floor(Math.random()*($emojisMoved.length-1));
// $emojisMoved.splice($randomEmoji2, 1)
// const $randomEmoji3 = Math.floor(Math.random()*($emojisMoved.length-1));
// $emojisMoved.splice($randomEmoji3, 1)
// const $randomEmoji4 = Math.floor(Math.random()*($emojisMoved.length-1));
// $emojisMoved.splice($randomEmoji4, 1)

// console.log($randomEmoji1);
// console.log($randomEmoji2);
// console.log($randomEmoji3);
// console.log($randomEmoji4);
// console.log($emojisMoved);

  // console.log($randomEmoji);
  // console.log($randomEmoji.name);
  // console.log($randomEmoji.codepoint);

// display random emoji on DOM
const $displayEmoji = () => {
  const $emojiCodepoint = String.fromCodePoint($randomEmojiImage.codepoint);
    // console.log($emojiCodepoint);
    $('#content').text($emojiCodepoint);
}
$displayEmoji();


// display emoji names in answer buttons
const $displayNames = () => {
  for (let i = 0; i < $emojis.length; i++) {
  //   console.log($emojis[i]);
    // $('#one').text($randomEmojiImage.name);
    // $('#two').text($randomEmojiImage.name);
    // $('#three').text($randomEmojiImage.name);
    // $('#four').text($randomEmojiImage.name);
    $('.answer-button').eq(i).text($emojis[Math.floor(Math.random()*4)].name);
}
}
$displayNames();

const checkClick = () => {
  check = $("button").click(function() {
      console.log((this.id));
  });
}
checkClick();

const rightOrWrong = () => {
  for (let i = 0; i < $emojis.length; i++) {
    if ($('.answer-button').text($emojis[i].name === $randomEmojiImage.name)) {
      console.log('RIGHT');
      score++;
      updateScore();
    } else {
      console.log('WRONG');
    }
  }
}

const updateScore = () => {
     $('#score').text('SCORE: ' + score);
  }
  updateScore();



nextRound = () => {
  $displayEmoji()
  $displayNames()
}









$('button').on('click', (e) => {
  // console.log('clicked');
  rightOrWrong();
})


});
