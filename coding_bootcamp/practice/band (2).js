// Instructions:
// Make a JavaScript file called bands.js that exports an object of music genres and bands like this:
// {  punk: 'Green Day',  rap: 'Run DMC',  classic: 'Led Zeppelin' }
// Require this JavaScript file in run.js, loop over the values, and console.log them.
// Make sure the program runs properly when entered into the terminal like this:
// node run.js
// And that the output looks something like the below:
// A punk band is Green Day A rap band is Run DMC A classic band is Led Zeppelin

var bands = ['Green Day', 'Run DMC', 'Led Zeppelin' ];

var text = "A punk band is" + bands[0] + "A rap band is" + bands[1] + "A classic band is" + bands[3];
var i;
for (i = 0; i < bands.length; i++) {
  text += bands[i] + "<br>";
}

console.log(text);