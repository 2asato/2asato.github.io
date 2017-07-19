$(() => {

const emojis = [
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

const randomEmoji = emojis[Math.floor(Math.random()*4)];
  console.log(randomEmoji);
  console.log(randomEmoji.name);
  console.log(randomEmoji.codepoint);






// const $test = String.fromCodePoint( 0x1F600 );
// $('#content').text($test);




$('button').on('click', (e) => {
  console.log('clicked');
})


});
