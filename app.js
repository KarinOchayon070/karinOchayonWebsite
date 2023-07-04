// This is the code for the changing text in the home section

// Find all the words that has the "word" class - this are the words i'm gonna change the text all the time
let words = document.querySelectorAll(".word");

words.forEach(function(word){
    // The text content will be divided into individual characters and stored as separate elements in an array
    let letters = word.textContent.split("");
    // Setting the text content of an HTML element to an empty string
    word.textContent = "";
    letters.forEach(function(letter){
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length-1;

words[currentWordIndex].style.opacity = "1";


let changeText = function(){
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i*80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        }, 340 + i*80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

changeText();
setInterval(changeText, 4000);


//  The code initializes variables to store tab links and tab contents, and defines a function openTab
// that handles tab switching based on user interaction.
let tabLinks = [...document.getElementsByClassName("tabLinks")];
let tabContents = [...document.getElementsByClassName("tabContents")];
console.log(tabContents);

function openTab(event, tabName) {
    event.preventDefault(); // Prevent the default behavior of the click event

    for (tabLink of tabLinks) {
        tabLink.classList.remove("activeLink");
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove("activeTab");
    }

    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabName).classList.add("activeTab");
}


let sideMenu = document.getElementById("sideMenu");


function openMenue(){
    sideMenu.style.right = "0";
}

function closeMenue(){
    sideMenu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbyECJI514UyezzXvDtGdOamWo2WaalcFa0__NNGmaM_ecGrO7qTsiKKn6x-efX5sxfkrg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form), redirect: "follow"})
      .then(response => {
        console.log({response})
        msg.innerHTML = "Thank you! Message sent successfully."
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
      form.reset()
        })
      .catch(error => {
        console.log({error})
        msg.innerHTML = "Oh oh! Something went worng, message didn't sent."
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
      form.reset()
        })
  })


