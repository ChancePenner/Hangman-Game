// hangman.js
var hangman =
{
  permanentPhrase: "",  //phrase, but we don't mess with it
  phrase: "", //becomes the actual phrase typed in, but we manipulate it
  currentPhrase: "",  //the phrase to be displayed to the player. Updates as they guess
  currentPhraseWithSpaces: "",  //the current phrase, but we space it out to display nicely
  livesCount: 8,
  setPhrase: (n)=>{
    // console.log("phrase: ", n)
    this.permanentPhrase = n;
    this.phrase = n;
    this.currentPhrase = n; //initialize it so that it's the same length
    for(let i=0;i<n.length;i++) //changes all letters to underscores
    {
      if(this.phrase.charAt(i) == "-")
      {
        this.currentPhrase = this.currentPhrase.substr(0, i) + "-" + this.currentPhrase.substr(i + 1);
      }
      else
      {
        this.currentPhrase = this.currentPhrase.substr(0, i) + "_" + this.currentPhrase.substr(i + 1);
      }
      // Thank you stackoverflow ^^^^
      // https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript

      //thank you stackoverflow vvvv
      //https://stackoverflow.com/questions/7437385/add-a-space-between-characters-in-a-string
      hangman.updatePhrase();
    }
    // console.log("this phrase: ", this.phrase)
    // console.log("this currentPhrase: ", this.currentPhrase)
  },
  getPhrase: ()=>{
    return this.phrase;
  },
  checkForLetter: (n)=>{
    // console.log("this currentPhrase: ", this.currentPhrase)

    let correctGuess = false; //if it stays false, that means the player guessed a wrong letter

    //scans through the string, replacing any occurence of the guessed letter
    //with a "@"". I chose a @ because this keeps the string length
    //the same so that the for loop runs correctly.

    for(i=0;i<this.phrase.length;i++)
    {
      //replaces any uppercase version of the guessed letter with an @
      if(this.phrase.charAt(i) == n.toUpperCase())
      {
        this.phrase = this.phrase.replace(n.toUpperCase(),'@')
        correctGuess = true;
      }
      //replaces any lowercase version of the guessed letter with an @
      else if(this.phrase.charAt(i) == n.toLowerCase())
      {
        this.phrase = this.phrase.replace(n.toLowerCase(),'@')
        correctGuess = true;
      }
    }

    hangman.checkForLoss(correctGuess); //check if player lost. Also, calls drawHangman() to update the picture
    hangman.checkForWin();  //checks if the player just won

    for(let i=0;i<this.permanentPhrase.length;i++)
    {
      if(this.phrase.charAt(i) == "@")  //sets current phrase to phrase, but puts the correct values in for the @ symbol
                                        //by checking permanentPhrase for the actual value at that index
      {
        this.currentPhrase = this.currentPhrase.substr(0, i) + this.permanentPhrase.charAt(i) + this.currentPhrase.substr(i + 1);
      }
      else if(this.phrase.charAt(i) == "-") //sets hyphens to hyphens
      {
        this.currentPhrase = this.currentPhrase.substr(0, i) + "-" + this.currentPhrase.substr(i + 1);
      }
      else  //sets everything else to underscores
      {
        this.currentPhrase = this.currentPhrase.substr(0, i) + "_" + this.currentPhrase.substr(i + 1);
      }
      // Thank you stackoverflow
      // https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
    }

    hangman.updatePhrase(); //calls to update the displayed phrase
  },
  checkForLoss: (correctGuess)=>{
    if(!correctGuess)
    {
      //decrease their lives and draw more of the stick figure
      hangman.livesCount--;   //decrement the lives
      hangman.drawHangman();  //updates the picture
    }
  },
  checkForWin: ()=>{

    let win = document.getElementById("win"); //the win picture

    // console.log("check for win", this.phrase)
    let noMissingLetters = true;
    for(let i=0;i<this.phrase.length;i++) //if the entire string is now "@" and "-", then that means
                                          //there are no more letters to guess, so the player wins
    {
      if(this.phrase.charAt(i) != "@" && this.phrase.charAt(i) != "-")
      {
        noMissingLetters = false;
      }
    }
    if(noMissingLetters)
    {
      //disable all the letter buttons
      for(let i=0;i<buttonsCount;i++)
      {
        buttons[i].disabled=true; //disables the buttons
      }

      //disable all images that could possibly be on the screen

      base.style.display="none";
      first.style.display="none";
      second.style.display="none";
      third.style.display="none";
      fourth.style.display="none";
      fifth.style.display="none";
      sixth.style.display="none";
      seventh.style.display="none";
      eighth.style.display="none";

      //display the win image
      win.style.display="";

      //needs to be timed out otherwise alert will happen first
      setTimeout(function() {
        alert("YOU WIN!");
        },10)
    }
  },
  //updates the phrase to be displayed as the player guesses
  updatePhrase: ()=>{
    //updates the displayed phrase, with eye-pleasing spacing
    this.currentPhraseWithSpaces = this.currentPhrase;  //reinitializes to whatever current string is at the time

    //thank you stackoverflow
    //https://stackoverflow.com/questions/7437385/add-a-space-between-characters-in-a-string
    this.currentPhraseWithSpaces = this.currentPhraseWithSpaces.split("").join(" ");  //this just adds spaces in between each letter for visibility
    document.getElementById("displayCurrentPhrase").innerText = this.currentPhraseWithSpaces;
  },
  drawHangman: ()=>{
    //8 if, else if, statements, that, depending on the number of lives,
    //draws a certain image.

    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");
    let fourth = document.getElementById("fourth");
    let fifth = document.getElementById("fifth");
    let sixth = document.getElementById("sixth");
    let seventh = document.getElementById("seventh");
    let eighth = document.getElementById("eighth");

    //these each disable the image that appear before them,
    //and then display their respective image
    if(hangman.livesCount == 7)
    {
      base.style.display="none";
      first.style.display="";
    }
    else if(hangman.livesCount == 6)
    {
      first.style.display="none";
      second.style.display="";
    }
    else if(hangman.livesCount == 5)
    {
      second.style.display="none";
      third.style.display="";
    }
    else if(hangman.livesCount == 4)
    {
      third.style.display="none";
      fourth.style.display="";
    }
    else if(hangman.livesCount == 3)
    {
      fourth.style.display="none";
      fifth.style.display="";
    }
    else if(hangman.livesCount == 2)
    {
      fifth.style.display="none";
      sixth.style.display="";
    }
    else if(hangman.livesCount == 1)
    {
      sixth.style.display="none";
      seventh.style.display="";
    }
    else if(hangman.livesCount == 0)
    {
      seventh.style.display="none";
      eighth.style.display="";
      //disable all the letter button
      for(let i=0;i<buttonsCount;i++)
      {
        buttons[i].disabled=true;
      }
      let alertVariable = "YOU LOSE!\nThe word was " + this.permanentPhrase;

      //needs to be timed out otherwise alert will happen first
      setTimeout(function() {
        	alert(alertVariable);
        },10)

    }

  }

}

 window.setPhrase = function(){

  // console.log("in setPhrase");
  hangman.setPhrase(document.querySelector("#guessPhrase").value);
  // console.log(hangman.phrase);

}

//this addEventListener is needed to use preventDefault to stop the form from submitting
document.getElementById("inputPhrase").addEventListener("submit", function(event){
  event.preventDefault()

  let form = document.getElementById("inputPhrase");
  form.reset(); //resets the text box so that clicking on it again won't show
                //previously typed responses

  let inputGuessPhrase = document.getElementById("guessPhrase");
  inputGuessPhrase.disabled = true; //disabled the input text box after game starts

  let startButton = document.getElementById("startButton");
  startButton.disabled = true; //disables the start button so the
                                      //user must hit reset

  base.style.display=""; //display the base image

  var buttons = document.querySelectorAll(".letter");
  var buttonsCount = document.querySelectorAll(".letter").length;
  for(let i=0;i<buttonsCount;i++) //makes all the buttons visible when game starts
  {
    buttons[i].style.visibility="visible";
    buttons[i].style.display="visible";
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

  }
}

for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".letter")[i].addEventListener("click", function() {
        // console.log(document.querySelectorAll(".letter")[i].value)
    });
}
