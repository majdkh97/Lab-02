'use strict';

// let userName = prompt('What\'s your name ');
// console.log(userName);
// alert('Welcome to my website ' + userName);
// alert('Am gonna ask you five questions please answer by yes/y or no/n');
// let score = 0;

// function userChoice(question)
// {
//   while(question !== 'yes' && question !== 'y' && question !== 'no' && question !== 'n')
//   {
//     question = prompt('please answer with either yes/y or no/n');
//   }
//   return question;
// }

// function mySwitch(question)
// {
//   switch(question)
//   {
//   case 'yes':
//   case 'y' :
//     alert('yes, i actually do');
//     score++;
//     break;
//   case 'no':
//   case 'n' :
//     alert('no, i actually do');
//     break;
//   default:
//     alert('please answer with either yes/y or no/n');
//   }
// }




// function mySwitch1(question)
// {
//   switch(question)
//   {
//   case 'yes':
//   case 'y' :
//     alert('no, i actually don\'t');
//     break;
//   case 'no':
//   case 'n' :
//     alert('yes, i actually don\'t');
//     score++;
//     break;
//   default:
//     alert('please answer with either yes/y or no/n');
//   }
// }


// let question1 = prompt('Do i like flafel');
// console.log(question1);
// mySwitch(userChoice(question1.toLowerCase()));

// let question2 = prompt('Do i like hummus');
// console.log(question2);
// mySwitch(userChoice(question2.toLowerCase()));

// let question3 = prompt('Do i like shawarma');
// console.log(question3);
// mySwitch(userChoice(question3.toLowerCase()));

// let question4 = prompt('Do i like mansaf');
// console.log(question4);
// mySwitch1(userChoice(question4.toLowerCase()));

// let question5 = prompt('Do i like mutton');
// console.log(question5);
// mySwitch1(userChoice(question5.toLowerCase()));

function question6(){
alert('for the next quiz, you have four opportunities to get the correct answer');

let i=0;
for( i; i<4;)
{
  let guessNum = prompt('guess a number between 1~100');
  guessNum = parseInt(guessNum);
  if(guessNum===50)
  {
    alert('you are correct');
    score++;
    break;
  }
  else if(guessNum>0 && guessNum<50)
  {
    alert('your guess is lower than the secret number');
    i++;
  }
  else if(guessNum>50 && guessNum<=100)
  {
    alert('your guess is higher than the secret number');
    i++;
  }
  else
    alert('please choose a number between 1~100');
}

if(i===4)
  alert('you have used up all your chances the correct answer is 50');
}
question6 ();

function question7(){
alert('Guess my favorite Music Band, you only have 6 attempts!');
let favBand = ['LINKIN PARK','BREAKING BENJAMIN','THREE DAYS GRACE','AVENGED SEVENFOLD','MY CHEMICAL ROMANCE','SIMPLE PLAN','FALL OUT BOY'];
loop1:
for(let j=6 ; j>0 ; j--)
{
  let favMusicband = prompt('Guess my favorite Music Band, you only have ' + j + ' attempts left !');
  {
    for(let k=0 ; k<favBand.length ; k++)
      if(favMusicband.toUpperCase()===favBand[k])
      {
        alert('you got it right ' + favBand[k] + ' is one of my favorite bands!');
        score++;
        break loop1;
      }
  }
}

alert('All The Possible Right Answers Are As Follows! : '+ favBand);
alert('Your Final Score is ' + score );
alert('Thank you for visting my website Mr/Ms ' + userName);
}
question7();