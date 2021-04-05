'use strict';

let userName = prompt('What\'s your name ')
console.log(userName);
alert('Welcome to my website ' + userName);
alert('Am gonna ask you five questions please answer by yes/y or no/n')

function userChoice(question)
{
    while(question !== 'yes' && question !== 'y' && question !== 'no' && question !== 'n')
    {
        question = prompt('please answer with either yes/y or no/n');
    }
    return question;
}

function mySwitch(question)
{   
    switch(question)
        {
            case 'yes':
            case 'y'  :
                alert('yes, i actually do');
                break;
            case 'no':
            case 'n'  :
                alert('no, i actually do');
                break;
            default:
            alert('please answer with either yes/y or no/n');     
        }
}

function mySwitch1(question)
{   
    switch(question)
        {
            case 'yes':
            case 'y'  :
                alert('no, i actually don\'t');
                break;
            case 'no':
            case 'n'  :
                alert('yes, i actually don\'t');
                break;
            default:
            alert('please answer with either yes/y or no/n');     
        }
}


let question1 = prompt('Do i like flafel');
console.log(question1);
mySwitch(userChoice(question1.toLowerCase()));

let question2 = prompt('Do i like hummus')
console.log(question2);
mySwitch(userChoice(question2.toLowerCase()));

let question3 = prompt('Do i like shawarma');
console.log(question3);
mySwitch(userChoice(question3.toLowerCase()));

let question4 = prompt('Do i like mansaf');
console.log(question4);
mySwitch1(userChoice(question4.toLowerCase()));

let question5 = prompt('Do i like mutton');
console.log(question5);
mySwitch1(userChoice(question5.toLowerCase()));

