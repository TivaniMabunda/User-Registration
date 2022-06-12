/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

    // Get reference to all elements in register tab
    const registerTab = document.getElementsByClassName("register");
    console.log(registerTab);
    const regTabEl1 = registerTab[0];
    const regTabEl2 = registerTab[1];

    // Get reference to all elements in userList tab
    const userTabs = document.getElementsByClassName("users");
    console.log(userTabs);
    const userTabEl1 = userTabs[0];
    const userTabEl2 = userTabs[1];


/* --- Nav references --- */

    // code here...


/* --- Form field references --- */

    let users = [];
    let firstNameInput;
    let lastNameInput;
    let emaiilInput;
    let userNameInput;
    let passWordInput;

    function newUser(firstnameParam, lastnameParam, usernameParam, passwordParam) {
        this._firstname = firstnameParam;
        this._lastname = lastnameParam;
        this._username = usernameParam;
        this._email = emailParam;
        this._password = passwordParam;
    }

/* --- Table list reference --- */

  let ulEl = document.getElementById("user-list");

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

function createUser(){
 firstNameInput = document.getElementById("firstname").value;
 lastNameInput = document.getElementById("lastname").value;
 userNameInput = document.getElementById("username").value;
 emaiilInput = document.getElementById("email").value;
 passWordInput = document.getElementById("password").value;
 const theNewUser = new newUser(firstNameInput, lastNameInput, userNameInput, passWordInput);
 users.push(theNewUser);
 displayUserInfo(theNewUser);
}

function displayUserInfo(userParam) {
    
    let ourlistEl = document.createElement("li");
    ourlistE1.classList.add("entry");

    let ourSpans =
        `
        <span> ${userParam._firstname} </span>
        <span> ${userParam._lastname} </span>
        <span> ${userParam._username} </span>
        <span> ${userParam._email} </span>
        <span> ${userParam._password} </span>
        `;

        ourlistEl.innerHTML = ourSpans;
        ulEl.appendChild(ourlistEl);

    return ourlistEl;
}

let iWantAListEl = createUserElement(theNewUser);

function myCalc ()
{
    let answer = 5*6;
    return answer;
}

/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */
//This function goes to the register tab
function registerTabFunction() {
    regTabEl1.ClassList.add("users");
    regTabEl2.ClassList.add("users");
    userTabEl1.ClassList.remove("users");
    userTabEl2.ClassList.remove("users");
}

function registerTabFunction2(event) {
    event.preventDefault();
    regTabEl1.ClassList.add("users");
    regTabEl2.ClassList.add("users");
    userTabEl1.ClassList.remove("users");
    userTabEl2.ClassList.remove("users");
}

//This function goes to the users tab
function usersTabFunction(){
    regTabEl1.ClassList.add("users");
    regTabEl1.ClassList.add("users");
    userTabEl1.ClassList.remove("users");
    userTabEl2.ClassList.remove("users");
}