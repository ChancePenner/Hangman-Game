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
  
}

 window.setPhrase = function(){

  console.log("YES");
  hangman.setPhrase(document.querySelector("#guessPhrase").value);
  console.log(hangman.phrase);
  console.log("hih");

}

//this addEventListener is needed to use preventDefault to stop the form from submitting
document.getElementById("inputPhrase").addEventListener("submit", function(event){
  event.preventDefault()

  let form = document.getElementById("inputPhrase");
  form.reset();

});
