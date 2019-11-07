// hangman.js
var hangman =
{
  phrase: "", //becomes the actual phrase typed in
  currentPhrase: "",  //the phrase to be displayed to the player. Updates as they guess
  livesCount: 8,
  setPhrase: (n)=>{
    console.log("phrase: ", n)
    this.phrase = n;
    this.currentPhrase = n; //initialize it so that it's the same length
    for(let i=0;i<n.length;i++)
    {
      if(this.phrase.charAt(i) == "-")
      {
        this.currentPhrase = this.currentPhrase.substr(0, i) + "-" + this.currentPhrase.substr(i + 1);
      }
      else
      {
        this.currentPhrase = this.currentPhrase.substr(0, i) + "_" + this.currentPhrase.substr(i + 1);
      }
      // Thank you stackoverflow
      // https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
    }
    console.log("this phrase: ", this.phrase)
    console.log("this currentPhrase: ", this.currentPhrase)
  },
  getPhrase: ()=>{
    return this.phrase;
  },
  checkForLetter: (n)=>{

    let correctGuess = 0; //if it stays 0, that means the player guessed a wrong letter

    //scans through the string, replacing any occurence of the guessed letter
    //with a "@"". I chose a @ because this keeps the string length
    //the same so that the for loop runs correctly. I then just replace
    //every occurrence of an @ symbol with '' empty space.
    //Why don't I just skip the middle man and replace any occurence
    //of the guessed letter with '' empty space? Well, this is because
    //the replace function only replaces the first occurrence of the
    //passed in variable. I did modify it to replace any occurrence
    //of a character, but only if you pass in the character, not a variable.
    //For example:
    // this.phrase = this.phrase.replace(/n/g, "");
    // would replace every letter 'n', not my variable n, which holds the
    // guessed letter. That's why I just forced everything to an @ so that
    // I know to replace it with '' empty space

    for(i=0;i<this.phrase.length;i++)
    {
      //replaces any uppercase version of the guessed letter with an @
      if(this.phrase.charAt(i) == n.toUpperCase())
      {
        this.phrase = this.phrase.replace(n.toUpperCase(),'@')
        correctGuess++;
      }
      //replaces any lowercase version of the guessed letter with an @
      else if(this.phrase.charAt(i) == n.toLowerCase())
      {
        this.phrase = this.phrase.replace(n.toLowerCase(),'@')
        correctGuess++;
      }
    }

    if(correctGuess == 0)
    {
      //decrease their lives and draw more of the stick figure
      this.livesCount--;
      hangman.drawHangman();
    }
    //replaces all @ symbols with '' empty space, updating the phrase
    //to only have what letters are left to guess in it
    this.phrase = this.phrase.replace(/@/g, "");
    console.log("new phrase is");
    console.log(this.phrase);
  },
  //updates the phrase to be displayed as the player guesses
  updatePhrase: ()=>{

  },
  drawHangman: ()=>{
    //8 if, else if, statements, that, depending on the number of lives,
    //draws a certain image.
    //draw more of the dude
    let head = document.getElementById("head");
    console.log(head);
    head.style.display="";

  }

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
  form.reset(); //resets the text box so that clicking on it again won't show
                //previously typed responses

  let inputGuessPhrase = document.getElementById("guessPhrase");
  inputGuessPhrase.disabled = true;

  let startButton = document.getElementById("startButton");
  startButton.disabled = true; //disables the start button so the
                                      //user must hit reset


  var buttons = document.querySelectorAll(".letter");
  var buttonsCount = document.querySelectorAll(".letter").length;
  for(let i=0;i<buttonsCount;i++)
  {
    buttons[i].style.visibility="visible";
    buttons[i].style.display="visible";

      //action to be taken once button pushed
      //alert(this.value);

  }
});


var buttons = document.querySelectorAll(".letter");
var buttonsCount = document.querySelectorAll(".letter").length;

for(let i=0;i<buttonsCount;i++)
{
  buttons[i].onclick=function(e){
    hangman.checkForLetter(buttons[i].value); //once the button is pressed, we call to check if it's
                                              //in the word/phrase
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
