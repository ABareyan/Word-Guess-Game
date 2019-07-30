// persons list
var person1 = {
    firstName: "Mark",
    lastName: "Wahlberg",
    middleName: "Robert Michael",
    profession: "Actor",
    images: "assets/images/person1.jpg",
    hint: ["Wonderland", "Shooter", "Mile 22", "The Departed"]
}

var person2 = {
    firstName: "Will",
    lastName: "Smith",
    middleName: "Carrol",
    profession: "Actor",
    images: "assets/images/person2.jpg",
    hint: ["Focus", "Aladdin", "Seven Pounds", "The Pursuit of Happynes"]
}

var person3 = {
    firstName: "Jack",
    lastName: "Nicholson",
    middleName: "Joseph",
    profession: "Actor",
    images: "assets/images/person3.jpeg",
    hint: ["One Flew Over the Cuckoo's Nest", "As Good as It Gets", "The Departed", "The Bucket List"]
}

var person4 = {
    firstName: "Morgan",
    lastName: "Freeman",
    middleName: "Porterfield",
    profession: "Actor",
    images: "assets/images/person4.jpg",
    hint: ["The Shawshank Redemption", "Seven", "The Bucket List", "Million Dollar Baby"]
}

var person5 = {
    firstName: "Tom",
    lastName: "Hanks",
    middleName: "Jeffrey",
    profession: "Actor",
    images: "assets/images/person5.jpeg",
    hint: ["Forrest Gump", "The Green Mile", "Saving Private Ryan", "Bridge of Spies"]
}

var person6 = {
    firstName: "Uma",
    lastName: "Thurman",
    middleName: "Karuna",
    profession: "Actress",
    images: "assets/images/person6.jpg",
    hint: ["Pulp Fiction", "Prime", "Be Cool", "Dark Hall"]
}

var person7 = {
    firstName: "Michelle",
    lastName: "Rodriguez",
    middleName: "Mayte",
    profession: "Actress",
    images: "assets/images/person7.jpg",
    hint: ["Lost", "Fast & Furious", "Tombo", "Girlfight"]
}

var person8 = {
    firstName: "Freddie",
    lastName: "Mercury",
    middleName: "Farrokh Bulsara",
    profession: "Singer",
    images: "assets/images/person8.jpg",
    hint: ["We Will Rock You", "The Show Must Go On", "Barcelona", "How can I go on"]
}

var person9 = {
    firstName: "Lara",
    lastName: "Fabian",
    middleName: "Sophie Katy",
    profession: "Singer",
    images: "assets/images/person9.jpg",
    hint: ["Je t'aime", "Immortelle", "Adagio", "Ave Maria"]
}

var person10 = {
    firstName: "Elvis",
    lastName: "Presley",
    middleName: "Aron",
    profession: "Singer",
    images: "assets/images/person10.jpg",
    hint: ["Can't Help Falling In Love", "Jailhouse Rock", "If I Can Dream", "Love Me Tender"]
}

var person11 = {
    firstName: "Ray",
    lastName: "Charles",
    middleName: "Robinson",
    profession: "Singer",
    images: "assets/images/person11.jpeg",
    hint: ["Hit The Road, Jack", "Say No More", "Georgia On My Mind", "I Got a Woman"]
}

var person12 = {
    firstName: "Jean",
    lastName: "Reno",
    middleName: "Moreno y Herrera",
    profession: "Actor",
    images: "assets/images/person12.jpg",
    hint: ["Leon", "Wasabi", "22 Bullets", "Ronin"]
}

var person13 = {
    firstName: "Eva",
    lastName: "Mendes",
    middleName: "De la Caridad",
    profession: "Actress",
    images: "assets/images/person13.jpg",
    hint: ["Fast & Furious", "Out of Time", "Hitch", "Cleaner"]
}

var person14 = {
    firstName: "Denzel",
    lastName: "Washington",
    middleName: "Hayes",
    profession: "Actor",
    images: "assets/images/person14.jpg",
    hint: ["American Gangster", "Out of Time", "No One In Safe", "Flight"]
}

var person15 = {
    firstName: "Al",
    lastName: "Pacino",
    middleName: "James",
    profession: "Actor",
    images: "assets/images/person15.jpg",
    hint: ["Scarface", "Scent of a Woman", "Devil's Advocate", "Carlito's Way"]
}

var person16 = {
    firstName: "Michelle",
    lastName: "Pfeiffer",
    middleName: "Marie",
    profession: "Actress",
    images: "assets/images/person16.jpg",
    hint: ["Scarface", "Malavita", "The Russia House", "What Lies Beneath"]
}

var person17 = {
    firstName: "Kurt",
    lastName: "Cobain",
    middleName: "Donald",
    profession: "Singer",
    images: "assets/images/person17.jpg",
    hint: ["Come As You Are", "Bloom", "Lithium", "Polly"]
}

var person18 = {
    firstName: "Jennifer",
    lastName: "Lopez",
    middleName: "Lynn",
    profession: "Singer",
    images: "assets/images/person18.jpg",
    hint: ["On The Floor", "Amor, Amor, Amor", "Dance Again", "Papi"]
}

var person19 = {
    firstName: "Jason",
    lastName: "Statham",
    middleName: "Unknown",
    profession: "Actor",
    images: "assets/images/person19.jpg",
    hint: ["The Bank Job", "Lock, Stock and Two Smoking Barrels", "Snatch", "Parker"]
}




// end of persons list

var array = [
    person1, person2, person3, person4, person5, person6,
    person7, person8, person9, person10, person11, person12,
    person13, person14, person15, person16, person17, person18, person19
]; // array with persons

var guessesLose = 0; // wrong letters count

var countWin = 0; // count of win

var countLose = 0; // count of lose

var userGuess; // user guess letter

var userGuessLow; // for change user guessed to lowercase

var guessWord = []; // user guess letter

var choisePerson = []; // computer person

var guessed = []; // letter that not included in person

var computerChoise; // random person choice 

var nameLow; // lower case of random person choice 

var userHint; // hint for user

var soundError = new Audio('assets/sound/erro.mp3'); // Sound of incorrect choice

var soundCorrect = new Audio('assets/sound/corre.mp3'); // Sound of correct choice

var soundWin = new Audio('assets/sound/applause.mp3'); // Win sound

var soundLose = new Audio('assets/sound/lose.mp3"'); // Lose sound


document.getElementById("userChoice").innerHTML = guessWord.join(" ");
document.getElementById("guesses").innerText = guessesLose;
document.getElementById("wins").innerText = countWin;
document.getElementById("lose").innerText = countLose;

function personChoice() {
    computerChoise = array[Math.floor(Math.random() * array.length)];

    // if user guessed all persons, game start again
    if (array.length === 0) {
        alert("You are an absolute winner!")
        window.location = "index.html";
    }

    nameLow = computerChoise.lastName.toLowerCase();
    for (var i = 0; i < nameLow.length; i++) {
        guessWord[i] = "_";
        choisePerson.push(nameLow[i]);
    }
    guessesLose = 10;
    soundWin.pause();
    soundWin.currentTime = 0;
    soundLose.pause();
    soundLose.currentTime = 0;
    document.getElementById("pers").src = "assets/images/who.png";
    document.getElementById("userChoice").innerHTML = guessWord.join(" ");
    document.getElementById("mainHint").innerText = "HINT:";
    document.getElementById("guesses").innerText = guessesLose;
}


// check letter 

function checkLetter() {
    if (!choisePerson.includes(userGuess) && !guessed.includes(userGuess)) {
        guessesLose--;
        guessed.push(userGuess);
        soundError.play();
        soundError.currentTime = 0;

    } else {
        for (var i = 0; i < nameLow.length; i++) {
            if (userGuess === choisePerson[i]) {
                guessWord[i] = choisePerson[i].toUpperCase();
                soundCorrect.play();
                soundCorrect.currentTime = 0;
            }
        }
    }

    // hint for user
    if (guessesLose > 7) {
        document.getElementById("hint").innerText = "Profession is " + computerChoise.profession;
    }

    if (guessesLose === 7) {
        document.getElementById("hint1").innerText = "Middle Name is " + computerChoise.middleName;
    }

    if (guessesLose < 5 && guessesLose >= 2) {
        if (computerChoise.profession === "Singer") {
            userHint = computerChoise.hint[Math.floor(Math.random() * computerChoise.hint.length)];
            document.getElementById("hint2").innerText = "The song he/she sang: " + userHint;
        } else {
            userHint = computerChoise.hint[Math.floor(Math.random() * computerChoise.hint.length)];
            document.getElementById("hint2").innerText = "Movie he/she played: " + userHint;
        }
    }
    if (guessesLose === 1) {
        document.getElementById("hint3").innerText = "First name is " + computerChoise.firstName;
    }

    //end of hint for user

    // if win
    if (!guessWord.includes("_")) {
        reset();
        countWin++;
        soundWin.play();
        soundWin.currentTime = 0;
        document.getElementById("pers").src = computerChoise.images; // person image
        array = array.filter(function(item) { // no-repeat person choice, if user win
            return item !== computerChoise;
        });

        document.getElementById("mainHint").innerText = "You Win";
        document.getElementById("userChoice").innerHTML = computerChoise.firstName + " " + computerChoise.lastName;
    } else {
        document.getElementById("userChoice").innerHTML = guessWord.join(" ");
    }

    // if lose
    if (guessesLose === 0) {
        reset();
        guessesLose = 10;
        countLose++;
        soundLose.play();
        soundLose.currentTime = 0;
        document.getElementById("mainHint").innerText = "You Lose";
        document.getElementById("pers").src = "assets/images/lose.gif";


    }

    document.getElementById("alreadyGuessed").innerText = guessed;
    document.getElementById("guesses").innerText = guessesLose;
    document.getElementById("wins").innerText = countWin;
    document.getElementById("lose").innerText = countLose;
}

// reset game
function reset() {
    guessWord = [];
    guessed = [];
    choisePerson = [];
    document.getElementById("hint").innerText = "";
    document.getElementById("hint1").innerText = "";
    document.getElementById("hint2").innerText = "";
    document.getElementById("hint3").innerText = "";
}


document.onkeyup = function(even) {
    userGuessLow = even.key;
    userGuess = userGuessLow.toLowerCase();
    if (!guessWord.includes("_")) {
        personChoice();
    } else {
        if (even.keyCode <= 90 && even.keyCode >= 65) {
            checkLetter();
        }
    }
}