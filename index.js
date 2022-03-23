//Generating 4 digits numbers 
const generateNumber =() =>{
    return Math.floor(1000 + Math.random() * 9000);
} 

//Creating 4 digits numbers as assign it to value. 
let digitsNumber;
digitsNumber = generateNumber();



//HTML DOM ELEMENTS
let checkDigits = document.querySelector('#guess_number');
let guessedNumber =document.querySelector("#gussed_number");
let table = document.querySelector('#table');
let newGame = document.querySelector('#new_game')
let winGame=document.querySelector("#win_game")

//disable button if digits less than 4 .length
function showValue(dd)
{
    if(dd.value.length!=4)
    {
        checkDigits.disabled = true;
      
    }else{
        checkDigits.disabled=false;
    }
  
}


///Array to store the previous user gusses values.
//ArrIndex is to point on the stored value ( index ) and to display it. 
let resultsArr = [];
let arrIndex = 0;

//Cows and bulls the values for the code symbols for the users. 

let cows =0;
let bulls = 0;

//function starts everytime we click on guess button.
console.log(digitsNumber.toString().split(''))
checkDigits.addEventListener("click",()=>{

    //storing the user gussed number into array and sperating values so we can compare the values between the last user input and genrated digits. 
    resultsArr.push(guessedNumber.value.split(''));

    //making the digits and user input into strings ( easier comperasion ) and sperating each digit for comparesion
    let stringDigitsNumber = digitsNumber.toString().split('');
    let stringGussedNumber = guessedNumber.value.split('');

  

    console.log(`Generated numbers : ${stringDigitsNumber}`)
    console.log(`last user input : ${resultsArr[arrIndex]}`)

    //If correct number in wrong postion increase cows by 1; 
    stringDigitsNumber = stringDigitsNumber.filter(val=> stringGussedNumber.includes(val)  ? cows+=1:cows );

    //second way for the bulls if correct number and correct postion increase it by 1
    //Starting loop on the user input ( 4 digits )
    for(let i = 0; i<stringGussedNumber.length;i++)
    {
        // if correct number in the correct position we increase bulls by 1
        if(stringGussedNumber[i]==stringDigitsNumber[i])
        {
            bulls++;
        }
        //once bulls == 4 it means the user have won since the 4 digits in the correct position and number
        if(bulls == 4)
        {
            winGame.innerHTML=`Congratulations you have solved the mystery, after ${arrIndex+1} tries <br> 
            click on New Game to restart game :) `
            
        }
   
      

      
    }

    

    //then display the result on the HTML, and reset cows and bulls values for the next guess.
    //we increase arrIndex so we can move forward for the next user guess. 
    table.innerHTML+=`<tr><td>${arrIndex}</td><td>${resultsArr[arrIndex]}</td><td>${cows}</td><td>${bulls}</td></tr>`;
    arrIndex++;
    cows=0;
    bulls = 0;




})


//Restart game button ( image ) to restart the game
newGame.addEventListener('click',()=>{

    table.innerHTML=` <tr>
    <th>Tries</th>
    <th>Guess</th>
    <th>Cows</th>
    <th>Bulls</th>
</tr>`;
winGame.innerHTML="";
    cows=0;
    bulls=0;
    arrIndex=0;
    resultsArr=[];
    digitsNumber = generateNumber();
    console.log(digitsNumber.toString().split(''))

})
