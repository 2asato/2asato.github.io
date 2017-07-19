$(() => {

const $test = String.fromCodePoint( 0x1F600 );
$('#content').text($test);





$('button').on('click', (e) => {
  console.log('clicked');
})


});
