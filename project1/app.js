$(() => {

// array of emojis, codepoints are used to display the emoji
const $emojis = [
  {
    name: 'Grinning Face',
    codepoint: 0x1F600,
  },
  {
    name: 'Crying Face',
    codepoint: 0x1f622,
  },
  {
    name: 'Winking Face',
    codepoint: 0x1F609,
  },
  {
    name: 'Smirking Face',
    codepoint: 0x1F60F,
  }
];

// pulls random emoji from array
const $randomEmoji = $emojis[Math.floor(Math.random()*4)];
  // console.log($randomEmoji);
  // console.log($randomEmoji.name);
  console.log($randomEmoji.codepoint);

const $displayEmoji = () => {
  const $emojiCodepoint = String.fromCodePoint($randomEmoji.codepoint);
    // console.log($emojiCodepoint);
    $('#content').text($emojiCodepoint);
}
$displayEmoji();







// const $test = String.fromCodePoint( 0x1F600 );
// $('#content').text($test);




$('button').on('click', (e) => {
  console.log('clicked');
})


});
