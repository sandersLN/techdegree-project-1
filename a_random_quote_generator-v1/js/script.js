/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  
  { quote: 'Life has become immeasurably better since I have been forced to stop taking it seriously.',
    source: 'Hunter S. Thompson',
    year: 1958
  },
  
  { quote: 'Wisdom is always an overmatch for strength.',
    source: 'Phil Jackson',
    year: 1996
  },
  
  { quote: 'Strive not to be a success, but rather to be of value.',
    source: 'Albert Einstein',
    
  },
  
  { quote: 'Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.',
    source: 'Mark Twain',
    
  },
  
  { quote: 'Smile, breathe, and go slowly',
    source: 'Thich Nhat Hanh',
     
  }
  
];
  




/***
 * `getRandomQuote` function
***/
// Do I need to run this function through a for loop?  
function getRandomQuote (arr) {
  let randomGenerator = Math.floor(Math.random() * arr.length);
  return arr[randomGenerator]; 
}





/***
 * `printQuote` function
 * 
***/
console.log(getRandomQuote(quotes));

function printQuote () {
  let quoteObject = getRandomQuote();
  let webString = '<p class="quote"> quoteObject.quote  </p>'
                '<p class="source"> quoteObject.source' 
                if (citation) {
                  '<span class="citation"> quoteObject.citation </span>' 
                }
                if (year) {
                  '<span class="year"> quoteObject.year </span>' 
                  
                } '</p>'
              }

              document.getElementById('quote-box').innerHTML = printQuote;
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);