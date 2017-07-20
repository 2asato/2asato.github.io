$(() => {

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


const usedAnswers = [];

// pulls random emoji from array
const $randomEmoji = $emojis[Math.floor(Math.random()*4)];
  // console.log($randomEmoji);
  // console.log($randomEmoji.name);
  // console.log($randomEmoji.codepoint);

// display random emoji on DOM
const $displayEmoji = () => {
  const $emojiCodepoint = String.fromCodePoint($randomEmoji.codepoint);
    // console.log($emojiCodepoint);
    $('#content').text($emojiCodepoint);
}
$displayEmoji();

// let $headerMsg = String.fromCodePoint(0x1F1EA);
//   $headerMsg += String.fromCodePoint(0x1F1F2);
//   $headerMsg += String.fromCodePoint(0x1F1F4);
//   $headerMsg += String.fromCodePoint(0x1F1EF);
//   $headerMsg += String.fromCodePoint(0x1F1EE);
//   $headerMsg += String.fromCodePoint(0x1F1F8);
//
//   $('h1').text($headerMsg);


// display emoji names in answer buttons
const $displayNames = () => {
  // for (let i = 0; i < $emojis.length; i++) {
  //   console.log($emojis[i]);
    $('button').text($emojis[0].name);
    $('#two').text($emojis[1].name);
    $('#three').text($emojis[2].name);
    $('#four').text($emojis[3].name);
}
$displayNames();

const checkClick = () => {
  check = $("button").click(function() {
      // console.log((this.id)); // or alert($(this).attr('id'));
  });
}
checkClick();







$('button').on('click', (e) => {
  // console.log('clicked');
})


});
