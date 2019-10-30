// hangman.js
var hangman =
{
  phrase: "",
  setPhrase: (n)=>{
    console.log("phrase: ", n)
    this.phrase = n;
    console.log("this phrase: ", this.phrase)
  },
  getPhrase: ()=>{
    return this.phrase;
  }
  // setNumber1: function(n){this.number1 = Number(n.value)},
  // setNumber2: function(n){this.number2 = Number(n.value)},
  // getResult: function(){return Number(this.number1 + this.number2)}
}

 window.setPhrase = function(){

  console.log("hi");
  hangman.setPhrase(document.querySelector("#guessPhrase").value);
  console.log(hangman.phrase);
  console.log("hih");

}
// document.getElementsByName("inputPhrase")[0].addEventListener("click", function(event){
//   setPhrase();
//   event.preventDefault()
// });

document.getElementById("inputPhrase").addEventListener("submit", function(event){
  event.preventDefault()

  // game = new hangman;
  //setPhrase();
  // game.setPhrase(document.querySelector("#guessPhrase").value);
  let form = document.getElementById("inputPhrase");
  // form.reset();
  // document.querySelector("#guessPhrase").innerText = "";
  console.log("bruh");

  console.log(hangman.getPhrase());
});
