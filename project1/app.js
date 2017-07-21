$(() => {

  let score = 0;
  let buttonText = '';

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

const $emojisShuffle = () => {
while(--x > 0){
  y = Math.floor(Math.random()*(x+1));
  temp = $emojis[y];
  $emojis[y] = $emojis[x];
  $emojis[x] = temp;
  }
};


// pulls random emoji from array
const $randomEmojiImage = $emojis[Math.floor(Math.random()*4)];


// display random emoji on DOM
const $displayEmoji = () => {
  const $emojiCodepoint = String.fromCodePoint($randomEmojiImage.codepoint);
    // console.log($emojiCodepoint);
    $('#content').text($emojiCodepoint);
}
$displayEmoji();


// display emoji names in answer buttons
const $displayNames = () => {
  $emojisShuffle();
  for (let i = 0; i < $emojis.length; i++) {
    // console.log($emojis[i]);
    // displays name on DOM
    $('#one').text($emojis[0].name);
    // gives value of name in html
    // $('#one').attr('value', $emojis[0].name)
    $('#two').text($emojis[1].name);
    // $('#two').attr('value', $emojis[1].name)
    $('#three').text($emojis[2].name);
    // $('#three').attr('value', $emojis[2].name)
    $('#four').text($emojis[3].name);
    // $('#four').attr('value', $emojis[3].name)
  }
}
$displayNames();


const checkClick = () => {
  check = $("button").click(function() {
    // checks the click of the button by its id
      console.log(this.id);
  });
}
checkClick();


// stores button text in variable
const checkText = () => {
  $('.answer-button').click(function() {
    buttonText = $(this).html();
    console.log(buttonText);
  })
}
checkText();

// compares text in button to name of displaying emoji to see if answer is right/wrong
const rightOrWrong = () => {
  if (buttonText === $randomEmojiImage.name) {
    console.log('right');
    score ++;
    updateScore();
    $('#show').text(buttonText);
    $('button').text('Correct!');
  } else {
    console.log('wrong');
    $('#show').text('Wrong');
    // $('button').text('Wrong');
  }
};


// changes score
const updateScore = () => {
     $('#score').text('SCORE: ' + score);
}
updateScore();

const nextRound = () => {
  $displayEmoji()
  $displayNames()
}









$('button').on('click', (e) => {
  // console.log('clicked');
  rightOrWrong();
})


});
