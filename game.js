const wordText=  document.querySelector(".word");
const hintText= document.querySelector(".hint");
/*Query selectors pick the selected element from the document. Stating the variables (wordtext, hinttext, timetext, inputfield and refresh&checkword buttons)
as global scope ensures they are picked upon mentioning of the variable keyword
I notice calling a variable, linking it to the html document(document.quesrySelecctor(selector satated as a string)) and stating the function with the variable name allows execution of the code function
upon intercation of the element selected
*/

timeText=document.querySelector(".timeleft b");
inputField= document.querySelector("input");
refreshButton= document.querySelector(".refresh");
checkWordButton=document.querySelector(".check");

let correctWord; //the correct word is changed to the randomwords, which are linked to the words (object in the words4game.js, listing all words)
let timer;

/* Creating the time aspect*/

const initialTime= stopTime=>{
  clearInterval(timer);
    timer=setInterval(() =>{
      if (stopTime > 0){
        stopTime--; //minus 1 the time decrementially
        return timeText.innerText=stopTime;
      }
      clearInterval(timer);
      alert ("Time is up!")
      initGame (); //time is out, refreshing for player
    }, 1000);
}

const initGame = () =>{
  initialTime(30);//calling time at start and refresh
  let randomWords= words[Math.floor(Math.random()*words.length)];

  //splitting the randomized words, by length of the correct word object, into letters
  let wordArray = randomWords.word.split("");

//Looping the function of randomizing the words, and splitting all of them

  for(let w=wordArray.length -1; w>0; w--){
    let x=Math.floor(Math.random()*(w+1));// obtains random word indexes from the array
    [wordArray[w], wordArray[x]]=[wordArray[x], wordArray[w]];
  }
  wordText.innerText=wordArray.join("")//removes the commas separating the word letters
  /*

  */
  hintText.innerText=randomWords.hint;//changes hint for different words
  correctWord=randomWords.word.toLocaleLowerCase();//the selected words before are passed as the correct words
  inputField.value=(""); //upon clikcing refresh, the input field clears
  inputField.setAttribute("maxlength", correctWord.length);//input of more caharacters does not show on field

  }
initGame();

const checkWord=() => {
  let userWord=inputField.value.toLocaleLowerCase();
  if(!userWord)return alert("Please enter the muscle name for the desrcibed hint")//no entry remarks

  if(userWord !==correctWord) {
    return alert('Wrong spelling! '+userWord+ ' is incorrect');
  }//wrong name input

  {alert('You got it! ' +userWord+ ' is the correct muscle name!');
}//is this like else?
/*
*/
}

refreshButton.addEventListener("click", initGame);
checkWordButton.addEventListener("click", checkWord);