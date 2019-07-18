// persons list
var person1 = {
    firstName: "Mark",
    lastName: "Wahlberg",
    middleName: "Robert Michael",
    profession: "Actor",
    images: "person1",
    hint: ["Wonderland", "Shooter", "Mile 22", "The Departed"]
}

var person2 = {
    firstName: "Will",
    lastName: "Smith",
    middleName: "Carrol",
    profession: "Actor",
    images: "person2",
    hint: ["Focus", "Aladdin", "Seven Pounds", "The Pursuit of Happynes"]
}

var person3 = {
    firstName: "Jack",
    lastName: "Nicholson",
    middleName: "Joseph",
    profession: "Actor",
    images: "person3",
    hint: ["One Flew Over the Cuckoo's Nest", "As Good as It Gets", "The Departed", "The Bucket List"]
}

var person4 = {
    firstName: "Morgan",
    lastName: "Freeman",
    middleName: "Porterfield",
    profession: "Actor",
    images: "person4",
    hint: ["The Shawshank Redemption", "Seven", "The Bucket List", "Million Dollar Baby"]
}

var person5 = {
    firstName: "Tom",
    lastName: "Hanks",
    middleName: "Jeffrey",
    profession: "Actor",
    images: "person5",
    hint: ["Forrest Gump", "The Green Mile", "Saving Private Ryan", "Bridge of Spies"]
}

var person6 = {
    firstName: "Uma",
    lastName: "Thurman",
    middleName: "Karuna",
    profession: "Actress",
    images: "person6",
    hint: ["Pulp Fiction", "Prime", "Be Cool", "Dark Hall"]
}

var person7 = {
    firstName: "Michelle",
    lastName: "Rodriguez",
    middleName: "Mayte",
    profession: "Actress",
    images: "person7",
    hint: ["Lost", "Fast & Furious", "Tombo", "Girlfight"]
}

var person8 = {
    firstName: "Freddie",
    lastName: "Mercury",
    middleName: "Farrokh Bulsara",
    profession: "Singer",
    images: "person8",
    hint: ["We Will Rock You", "The Show Must Go On", "Barcelona", "How can I go on"]
}

var person9 = {
    firstName: "Lara",
    lastName: "Fabian",
    middleName: "Sophie Katy",
    profession: "Singer",
    images: "person9",
    hint: ["Je t'aime", "Immortelle", "Adagio", "Ave Maria"]
}

var person10 = {
    firstName: "Elvis",
    lastName: "Presley",
    middleName: "Aron",
    profession: "Singer",
    images: "person10",
    hint: ["Can't Help Falling In Love", "Jailhouse Rock", "If I Can Dream", "Love Me Tender"]
}

var person11 = {
    firstName: "Ray",
    lastName: "Charles",
    middleName: "Robinson",
    profession: "Singer",
    images: "person11",
    hint: ["Hit The Road, Jack", "Say No More", "Georgia On My Mind", "I Got a Woman"]
}

var person12 = {
    firstName: "Jean",
    lastName: "Reno",
    middleName: "Moreno y Herrera",
    profession: "Actor",
    images: "person12",
    hint: ["Leon", "Wasabi", "22 Bullets", "Ronin"]
}

var person13 = {
    firstName: "Eva",
    lastName: "Mendes",
    middleName: "De la Caridad",
    profession: "Actress",
    images: "person13",
    hint: ["Fast & Furious", "Out of Time", "Hitch", "Cleaner"]
}

var person14 = {
    firstName: "Denzel",
    lastName: "Washington",
    middleName: "Hayes",
    profession: "Actor",
    images: "person14",
    hint: ["American Gangster", "Out of Time", "No One In Safe", "Flight"]
}

// end of persons list

var array = [
    person1, person2, person3, person4, person5, person6, person7,
    person8, person9, person10, person11, person12, person13, person14
]; // array with persons

var guessesLose = 0; // wrong letters count

var countWin = 0; // count of win

var countLose = 0; // count of lose

var userGuess; // user guess letter

var guessWord = []; // user guess letter

var choisePerson = []; // computer person

var guessed = []; // letter that not included in person

var computerChoise; // random person choice 

var nameLow; // lower case of random person choice 

var soundError = document.getElementById("errorSound"); // Sound of incorrect choice

var soundCorrect = document.getElementById("correctSound"); // Sound of correct choice

var soundWin = document.getElementById("applauseSound"); // Win sound

var soundLose = document.getElementById("loseSound"); // Lose sound


document.getElementById("userChoice").innerHTML = guessWord.join(" ");
document.getElementById("guesses").innerText = guessesLose;
document.getElementById("wins").innerText = countWin;
document.getElementById("lose").innerText = countLose;

function personChoice() {
    computerChoise = array[Math.floor(Math.random() * array.length)];
    computerChoiseImage = computerChoise.images;
    nameLow = computerChoise.lastName.toLowerCase();
    nameUpper = computerChoise.lastName.toUpperCase();
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
    document.getElementById("hint").innerText = "";

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
    if (guessesLose > 5) {
        document.getElementById("hint").innerText = "Profession is " + computerChoise.profession;
    }

    if (guessesLose === 5) {
        document.getElementById("hint").innerText = "Middle Name is " + computerChoise.middleName;
    }

    if (guessesLose < 5 && guessesLose >= 2) {
        if (computerChoise.profession === "Singer") {
            document.getElementById("hint").innerText = "The song he/she sang: " + computerChoise.hint[Math.floor(Math.random() * computerChoise.hint.length)];
        } else {
            document.getElementById("hint").innerText = "Movie he/she played: " + computerChoise.hint[Math.floor(Math.random() * computerChoise.hint.length)];
        }
    }
    if (guessesLose === 1) {
        document.getElementById("hint").innerText = "First name is " + computerChoise.firstName;
    }

    //end of hint for user


    // person image if win
    function personImage() {
        if (computerChoise.images === "person1") {
            document.getElementById("pers").src = "assets/images/person1.jpg";
        }
        if (computerChoise.images === "person2") {
            document.getElementById("pers").src = "assets/images/person2.jpg";
        }
        if (computerChoise.images === "person3") {
            document.getElementById("pers").src = "assets/images/person3.jpeg";
        }
        if (computerChoise.images === "person4") {
            document.getElementById("pers").src = "assets/images/person4.jpg";
        }
        if (computerChoise.images === "person5") {
            document.getElementById("pers").src = "assets/images/person5.jpeg";
        }
        if (computerChoise.images === "person6") {
            document.getElementById("pers").src = "assets/images/person6.jpg";
        }
        if (computerChoise.images === "person7") {
            document.getElementById("pers").src = "assets/images/person7.jpg";
        }
        if (computerChoise.images === "person8") {
            document.getElementById("pers").src = "assets/images/person8.jpg";
        }
        if (computerChoise.images === "person9") {
            document.getElementById("pers").src = "assets/images/person9.jpg";
        }
        if (computerChoise.images === "person10") {
            document.getElementById("pers").src = "assets/images/person10.jpg";
        }
        if (computerChoise.images === "person11") {
            document.getElementById("pers").src = "assets/images/person11.jpeg";
        }
        if (computerChoise.images === "person12") {
            document.getElementById("pers").src = "assets/images/person12.jpg";
        }
        if (computerChoise.images === "person13") {
            document.getElementById("pers").src = "assets/images/person13.jpg";
        }
        if (computerChoise.images === "person14") {
            document.getElementById("pers").src = "assets/images/person14.jpg";
        }
    }



    // if win
    if (!guessWord.includes("_")) {
        reset();
        countWin++;
        soundWin.play();
        soundWin.currentTime = 0;
        personImage();
        document.getElementById("hint").innerText = "You Win";
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
        document.getElementById("hint").innerText = "You Lose";
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
}


document.onkeyup = function(even) {
    userGuess = even.key;
    if (!guessWord.includes("_")) {
        personChoice();
    } else {
        if (even.keyCode <= 90 && even.keyCode >= 65) {
            checkLetter();
        }
    }
}