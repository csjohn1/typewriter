const sentence = "hello there from lighthouse labs\n";
let time = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
  process.stdout.write(sentence.charAt(i));
  }, time += 50)

}