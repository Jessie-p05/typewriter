const sentence = "hello there from lighthouse labs";
// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     // print the char here
//     process.stdout.write(sentence[i]);
//     if (i === sentence.length - 1) {
//       process.stdout.write('\n');
//     }
//   }, 50 * (i + 1))
// }

let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i)
  i += 200;
}

setTimeout(() => console.log(''), i)



