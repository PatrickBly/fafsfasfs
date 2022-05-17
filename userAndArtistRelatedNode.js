require('./signInAndAccountCreation/signIntoSite')
//Profile Info
var userInfo = [
    {
        userName: createAccountUsername,
        email: createAccountEmail,
        password: createAccountPassword,
        userType: accountType,
        songsSaved: addedSong,
        playlistsSaved: [],
        songsPublished: [],
    },
]

//Create/Sign Into Profiles
function createProfile(){
    if (document.getElementById('createAccountUsername') === '' || document.getElementById('createAccountEmail') === '' || document.getElementById('createAccountPassword') === ''){
        let missingAccountCreationInfo = document.createElement('h2')
        missingAccountCreationInfo.innerHTML = 'One of the input fields is empty D:'
        document.getElementsByClassName('createProfileButton').appendChild(missingAccountCreationInfo)
    } else {
        let accountSuccessfullyCreated = document.createElement('h2')
        accountSuccessfullyCreated.innerHTML = 'One of the input fields is empty D:'
        document.getElementsByClassName('createProfileButton').appendChild(accountSuccessfullyCreated)
        Object.create(userInfo)
    }
}

function signIntoProfile(){
    if (userInfo.includes(document.getElementById('signInEmailOrUserName').value) == true){
        if (document.getElementById('signInEmailOrUserName').value != userInfo[0].userName || document.getElementById('signInEmailOrUserName').value != userInfo[0].password){
            let incorrectSignIn = document.createElement('h2')
            incorrectSignIn.className = 'incorrectSignIn'
            incorrectSignIn.innerHTML = "Your Username, Email, or Password Are Incorrect."
            document.getElementById('goToAccountCreationButton').appendChild(incorrectSignIn)
        } else {
            location.href = 'musicStreaming/signedIn/yourHomePage.html'
        }
    }
}

function addSongToList(){
    var addedSong = document.createElement('h3');
    addedSong.className = "addedSong";
    addedSong.controls = "controls";
    addedSong.src = ;
    //^^ Should be a variable that only artists have access to.
    function storeSongInList(){
        localStorage.setItem(,)
    }
    //^^ Stores song in user database thingy ^^
    addedSong.innerHTML = `${songName} ${songDuration}`;
    document.getElementById('yourSongsList').appendChild(addedSong);
    // ^^ Creates the audio tag for the song users added to the main page. ^^
    var addedSongButton = document.createElement('button');
    addedSongButton.className = "addedSongsButton";
    document.getElementById('yourSongsList').appendChild(addedSongButton);
    addedSong.push(items[1].songsSaved)
}

function removeSongFromList(){
    localStorage.removeItem(,)
}