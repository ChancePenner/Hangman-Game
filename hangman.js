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
  //add list of all letters, and once used, just remove them. use a function that
  //just checks "if letter in this array, then get rid of it and then check if in word,
  //if not in it, then already guessed"
}

 window.setPhrase = function(){

  console.log("in setPhrase");
  hangman.setPhrase(document.querySelector("#guessPhrase").value);
  console.log(hangman.phrase);

}

//this addEventListener is needed to use preventDefault to stop the form from submitting
document.getElementById("inputPhrase").addEventListener("submit", function(event){
  event.preventDefault()

  let form = document.getElementById("inputPhrase");
  form.reset();

});

// const buttons = document.querySelectorAll('.letter')
// buttons.forEach(function(currentBtn){
//   currentBtn.addEventListener('click', handleEvent)
// })

var buttons = document.querySelectorAll(".letter");
var buttonsCount = document.querySelectorAll(".letter").length;

for(let i=0;i<buttonsCount;i++)
{
  buttons[i].onclick=function(e){
    this.style.visibility="hidden"; //makes the letter disappear once guessed
    //action to be taken once button pushed
    //alert(this.value);
  }
}

for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".letter")[i].addEventListener("click", function() {
        console.log(document.querySelectorAll(".letter")[i].value)
    });
}
