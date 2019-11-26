let alertForVerification = document.getElementById("alertForVerification");
alertForVerification.style.display = "none";

const logInPage = document.getElementById("logInPage");
const signInPage = document.getElementById("signInPage");
const timeLine = document.getElementById("timeLine");

let enterUsername = document.getElementById("enterUsername");
let enterName = document.getElementById("enterName");
let timelinePost = document.getElementById("timelinePost");

let enterEmail = document.getElementById("enterEmail");
let enterPassword = document.getElementById("enterPassword");

let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");

let signIn = () => {
	let email = userEmail.value;
	let password = userPassword.value;
	window.data.signIn(email, password)

};

let createAcountFunction = () => {
	logInPage.style.display = "none";
	signInPage.style.display = "block";
};

let createUser = () => {
	let email = enterEmail.value;
	let password = enterPassword.value;
	let name = enterName.value;

	window.data.createUser(email, password, name);

	signInPage.style.display = "none";
	logInPage.style.display = "block";
	alertForVerification.style.display = "block";
};

const signOutFunction = () => {
	window.data.signOutFunction()
	timeLine.style.display = "none";
	userInformationInTimeline.style.display = "none";
	logInPage.style.display = "block";
};

let uiConfig = {
	callbacks: {
		signInSuccessWithAuthResult: function(authResult, redirectUrl) {
			return true;
		},
		uiShown: function() {
		}
	},
	
	signInFlow: 'popup',
	signInSuccessUrl: 'muro.html',
	signInOptions: [
	
		firebase.auth.GoogleAuthProvider.PROVIDER_ID
	],

	tosUrl: 'index.html',
	
	privacyPolicyUrl: '<your-privacy-policy-url>'
};
let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#authContainer', uiConfig);

document.getElementById("buttonComeBack").addEventListener("click", ()=>{
	signInPage.style.display = "none";
	logInPage.style.display ="block";
});

document.getElementById("buttonSignIn").addEventListener("click", signIn);
document.getElementById("createAcount").addEventListener("click", createAcountFunction);
document.getElementById("buttonRegister").addEventListener("click", createUser);
