$(() => {

  let randomImage = '';
  let score = 0;
  let highScore = 0;
  let buttonText = '';
  let $display = [];

// array of emojis, codepoints are used to display the emoji
const $emojis = [
  {
    name: 'Grinning',
    codepoint: 0x1F600,
  },
  {
    name: 'Crying',
    codepoint: 0x1f622,
  },
  {
    name: 'Winking',
    codepoint: 0x1F609,
  },
  {
    name: 'Smirking',
    codepoint: 0x1F60F,
  },
  {
    name: 'Hugging',
    codepoint: 0x1F917,
  },
  {
    name: 'Tears of joy',
    codepoint: 0x1F602,
  },
  {
    name: 'ROFL',
    codepoint: 0x1F923,
  },
  {
    name: 'Persevering',
    codepoint: 0x1F623,
  },
  {
    name: 'Confounded',
    codepoint: 0x1F616,
  },
  {
    name: 'Tired',
    codepoint: 0x1F62B,
  },
  {
    name: 'Thinking',
    codepoint: 0x1F914,
  },
  {
    name: 'Unamused',
    codepoint: 0x1F612,
  },
  {
    name: 'Grimacing',
    codepoint: 0x1F62C,
  },
  {
    name: 'Angry',
    codepoint: 0x1F620,
  },
  {
    name: 'Kissing',
    codepoint: 0x1F617,
  },
  {
    name: 'Expressionless',
    codepoint: 0x1F611,
  },
  {
    name: 'Neutral',
    codepoint: 0x1F610,
  },
  {
    name: 'Hushed',
    codepoint: 0x1F62F,
  },
  {
    name: 'Confused',
    codepoint: 0x1F615,
  },
  {
    name: 'Astonished',
    codepoint: 0x1F632,
  },
];
// console.log($emojis);

// fisher yates shuffle to get random order of $emojis
let x = $emojis.length, y, temp;

const $emojisShuffle = () => {
  x = $emojis.length;
while(--x > 0){
  y = Math.floor(Math.random()*(x+1));
  temp = $emojis[y];
  // console.log(temp);
  $emojis[y] = $emojis[x];
  $emojis[x] = temp;
  }
  // console.log($emojis);
};
// $emojisShuffle();
// console.log($emojis);


const $displayNames = () => {
  $emojisShuffle();
  // for (let i = 0; i < $emojis.length; i++) {
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
};
$displayNames();


// pushes random emojis into $display array
const $pushToDisplayArray = () => {
$display.push($emojis[0], $emojis[1], $emojis[2], $emojis[3]);
console.log($display);
}
$pushToDisplayArray();


// pulls random emoji from array
const $randomEmojiImage = () => {
  $randomImage = $display[Math.floor(Math.random()*$display.length)];
};
$randomEmojiImage();
console.log($randomImage);


// display random emoji on DOM
const $displayEmoji = () => {
  const $emojiCodepoint = String.fromCodePoint($randomImage.codepoint);
    // console.log($emojiCodepoint);
    $('#content').text($emojiCodepoint);
};
$displayEmoji();


// display star for correct answer
const $displayStar = () => {
  const $star = String.fromCodePoint(0x1F31F);
  $('#content').text($star);
};

// display x for wrong answer
const $displayX = () => {
  const $x = String.fromCodePoint(0x274C);
  $('#content').text($x);
};


// stores button text in variable
const $checkText = () => {
  $('.answer-button').click(function() {
    buttonText = $(this).html();
    $(this).css('background-color', '#24dbc9');
    console.log(buttonText);
  })
};
$checkText();

// compares text in button to name of displaying emoji to see if answer is right/wrong
const $rightOrWrong = () => {
  if (buttonText === $randomImage.name) {
    console.log('right');
    score ++;
    $updateScore();
    $('#show').text('Correct!');
    // $('.answer-button').text('Correct!');
    $displayStar();
    } else {
    console.log('wrong');
    $('#show').text('Wrong');
    $displayX();
    $gameEnd();
    $nextRound();
    // setTimeout(location.reload.bind(location), 2000);
    // $('button').text('Wrong');
  }
};


// changes score
const $updateScore = () => {
  $('#score').text('SCORE: ' + score);
}
$updateScore();

const $postHighScore = () => {
  $('#high-score').text('HIGH SCORE: ' + highScore);
};
$postHighScore();

const $updateHighScore = () => {
  if (score > highScore){
    $('#high-score').text('HIGH SCORE: ' + score);
  }
};



// emptys $display array
const $clearDisplayArray = () => {
  $display = [];
}
$clearDisplayArray();

// runs the next round
const $nextRound = () => {
  // $emojisShuffle();
  $clearDisplayArray();
  $displayNames();
  $pushToDisplayArray();
  // console.log($display);
  $randomEmojiImage();
  // console.log($randomImage);
  $displayEmoji();
};


const $gameEnd = () => {
  if (score > highScore){
    $('#show').text('Congrats new high score!').css('font-size', '28px');
    $updateHighScore();
  }
}
















$('.answer-button').on('click', (e) => {
  // console.log('clicked');
  // nextRound();
})

$('.submit-button').on('click', (e) => {
  console.log('clicked');
  $('.answer-button').css('background-color', '#e6e6e6')
  $rightOrWrong();
  // postHighScore();
})

$('.next-button').on('click', (e) => {
  $('#show').text('');
  $nextRound();
  // postHighScore();
})

$('.restart-button').on('click', (e) => {
  console.log('clicked');
  // postHighScore();
  location.reload();
})


});
