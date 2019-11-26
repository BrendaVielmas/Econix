
const homePage = document.getElementById("homePage");
const timeLine = document.getElementById("timeLine")
const timelinePost = document.getElementById("timelinePost");
const timelinePostPerfil = document.getElementById("timelinePostPerfil");
let profile = document.getElementById("profile");
let alertForPostEmpty = document.getElementById("alertForPostEmpty");
let alertForPostEmptyProfile = document.getElementById("alertForPostEmptyProfile");
//inicialize of timeline part

let db = firebase.firestore()
db.collection("Users").orderBy("dates", "desc").where("status", "==", "Public")
	.onSnapshot((mnsj) => {
		document.getElementById("sectionWithPost").innerHTML = "";
		mnsj.forEach((doc) => {
			if (doc.data().uid === uid) {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
				let postOfUser = doc.data();
				let publicChecked = postOfUser.status == "Public" ? "checked" : "";
				let privateChecked = postOfUser.status == "Private" ? "checked" : "";
				document.getElementById("sectionWithPost").innerHTML += `
					<section class="invisible" id = "${doc.id}inputEditPost">
						<input class= "post" id= "${doc.id}editPostInput" type="textArea" size = "30" value = "${postOfUser.message}"></input>
						<label><input type="radio" name="${doc.id}radioForStatus" value="Public" ${publicChecked}>Public</label>
						<label><input type="radio" name="${doc.id}radioForStatus" value="Private" ${privateChecked}>Private</label>
						<section id="boxForBtnSaveCancel">
							<button class= "saveButton" id="${doc.id}saveButton" data-id="${doc.id}">Save</button>
							<button class= "cancel" id="${doc.id}cancel" data-id="${doc.id}">Cancel</button>
						</section>			
						</section>

					<section id="${doc.id}thisPost" class = "postInBox">
						<p class= "txtdate"> ${postOfUser.dates}</p>
						<p class= "txtname">${postOfUser.name}</p>
						<p class= "txtmns">${postOfUser.message}</p>
						<button class="buttonEdit" id="${doc.id}buttonEditPost" data-id="${doc.id}">Edit</button>
						<button class="buttonDelete" id="${doc.id}buttonDelete" data-id="${doc.id}">Delete</button>
						<section id="${doc.id}buttonForLike">
							<img src="images/pepper.png" id="${doc.id}buttonLike" class="buttonLike" data-id="${doc.id}" alt="">
							<p class= "txtlike">I like it! ${postOfUser.likes}</p>
						</section>
					</section>`


			} else {
				console.log(doc.id, " => ", doc.data());
				let postOfUser = doc.data();
				document.getElementById("sectionWithPost").innerHTML += `
 			<section id="${doc.id}thisPost" class = "postInBox">
				<p class= "txtdate"> ${postOfUser.dates}</p>
				<p class= "txtname">${postOfUser.name}</p>
				<p class= "txtmns">${postOfUser.message}</p>
				<section id="buttonForLike">
 					<img src="images/pepper.png id="${doc.id}buttonLike" class="buttonLike" data-id="${doc.id}" alt="">
 					<p class= "txtlike">I like it! ${postOfUser.likes}</p>
 				</section>
 			</section>`


			}
		});
		let buttons = document.getElementsByClassName("buttonDelete");
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", deleteButton);
		};

		let editButtons = document.getElementsByClassName("buttonEdit");
		for (let i = 0; i < editButtons.length; i++) {
			editButtons[i].addEventListener("click", () => {
				let docId = editButtons[i].getAttribute("data-id");
				console.log("Di click");
				document.getElementById(`${docId}inputEditPost`).style.display = "block";
				document.getElementById(`${docId}thisPost`).style.display = "none";
				document.getElementById(`${docId}buttonForLike`).style.display = "none";
			});
		};

		let cancel = document.getElementsByClassName("cancel");
		for (let i = 0; i < cancel.length; i++) {
			cancel[i].addEventListener("click", () => {
				let docId = cancel[i].getAttribute("data-id");
				document.getElementById(`${docId}inputEditPost`).style.display = "none";
				document.getElementById(`${docId}thisPost`).style.display = "block";
				document.getElementById(`${docId}buttonForLike`).style.display = "block";
			});
		};

		let savebuttons = document.getElementsByClassName("saveButton");
		for (let i = 0; i < savebuttons.length; i++) {
			savebuttons[i].addEventListener("click", editPost);
		}
		let likeButtons = document.getElementsByClassName("buttonLike");
		for (let i = 0; i < likeButtons.length; i++) {
			likeButtons[i].addEventListener("click", sendLikes);
		}
	});
//finalize of timeline part

//inicialize of profile part
let uid = localStorage.getItem("uid");
let dbUid = firebase.firestore()
dbUid.collection("Users").orderBy("dates", "desc")
	.onSnapshot((mnsj) => {
		document.getElementById("sectionWithUidPost").innerHTML = "";
		mnsj.forEach((doc) => {
			if (doc.data().uid === uid) {
				let postOfUserProfile = doc.data();
				let publicChecked = postOfUserProfile.status == "Public" ? "checked" : "";
				let privateChecked = postOfUserProfile.status == "Private" ? "checked" : "";
				document.getElementById("sectionWithUidPost").innerHTML += `

			<section class="invisible" id="${doc.id}inputEditPostProfile">
				<input class= "post" id= "${doc.id}editPostInputProfile" type="textArea" size = "30" value = "${postOfUserProfile.message}" aria-labelled="post"></input>
				<label><input type="radio" name="${doc.id}radioForStatusProfile" value="Public" ${publicChecked}>Public</label>
				<label><input type="radio" name="${doc.id}radioForStatusProfile" value="Private" ${privateChecked}>Private</label>
				<section id="boxForBtnSaveCancelProfile">
					<button class= "saveButtonProfile" id="${doc.id}saveButton" data-id="${doc.id}">Save</button>
					<button class= "cancel" id="${doc.id}cancelButton" data-id="${doc.id}">Cancel</button>
				</section>
			</section>
			<section id="${doc.id}thisPostProfile" class = "postInBox">
				<p class= "txtdate">${postOfUserProfile.dates}</p>
				<p class= "txtname">${postOfUserProfile.name}</p>
				<p class= "txtmns">${postOfUserProfile.message}</p>
				<button class="buttonEditProfile" id="${doc.id}buttonEdit" data-id="${doc.id}">Edit</button>
				<button class="buttonDelete" id="${doc.id}buttonDelete" data-id="${doc.id}">Delete</button>
				<section id="${doc.id}buttonForLikeProfile">
					<img src="images/pepper.png id="${doc.id}buttonLike" class="buttonLike" data-id="${doc.id}" alt="">
					<p class= "txtlike">I like it! ${postOfUserProfile.likes}</p>
				</section>
			</section>`

			};
		});
		let buttonsProfile = document.getElementsByClassName("buttonDelete");
		for (let i = 0; i < buttonsProfile.length; i++) {
			buttonsProfile[i].addEventListener("click", deleteButton);
		};
		let editButtonsProfile = document.getElementsByClassName("buttonEditProfile");
		for (let i = 0; i < editButtonsProfile.length; i++) {
			editButtonsProfile[i].addEventListener("click", () => {
				let docId = editButtonsProfile[i].getAttribute("data-id");
				document.getElementById(`${docId}inputEditPostProfile`).style.display = "block";
				document.getElementById(`${docId}thisPostProfile`).style.display = "none";
				document.getElementById(`${docId}buttonForLikeProfile`).style.display = "none";
			});
		};

		let cancelProfile = document.getElementsByClassName("cancel");
		for (let i = 0; i < cancelProfile.length; i++) {
			cancelProfile[i].addEventListener("click", () => {
				let docId = cancelProfile[i].getAttribute("data-id");
				document.getElementById(`${docId}inputEditPostProfile`).style.display = "none";
				document.getElementById(`${docId}thisPostProfile`).style.display = "block";
				document.getElementById(`${docId}buttonForLikeProfile`).style.display = "block";
			});
		};

		let savebuttonsProfile = document.getElementsByClassName("saveButtonProfile");
		for (let i = 0; i < savebuttonsProfile.length; i++) {
			savebuttonsProfile[i].addEventListener("click", editPostProfile);
		}
		let likeButtons = document.getElementsByClassName("buttonLike");
		for (let i = 0; i < likeButtons.length; i++) {
			likeButtons[i].addEventListener("click", sendLikes);
		};

	});
//finalize of profile part


firebase.auth().onAuthStateChanged(function(user) {
	if (user && user.emailVerified) {
		localStorage.setItem("name", user.displayName);
		localStorage.setItem("uid", user.uid);
		const obj = {
			name: user.displayName,
			email: user.email,
			photo: user.photoURL
		}
	} else {
	};
})
const deleteButton = (event) => {
	let idOfPost = event.target.getAttribute("data-id");
		if (confirm("Are you sure you want to delete this post?")) {
		window.data.deleteFunction(idOfPost);
	}
};
const editPost = (event) => {
	let idOfPost = event.target.getAttribute("data-id");
	let newStatus = document.querySelector(`[name="${idOfPost}radioForStatus"]:checked`).value;
	let newPost = document.getElementById(`${idOfPost}editPostInput`).value;
	window.data.editFunction(idOfPost, newStatus, newPost);
};

const editPostProfile = (event) => {
	let idOfPost = event.target.getAttribute("data-id");
	let newStatus = document.querySelector(`[name="${idOfPost}radioForStatusProfile"]:checked`).value;
	let newPost = document.getElementById(`${idOfPost}editPostInputProfile`).value;
	window.data.editFunction(idOfPost, newStatus, newPost);
};

const signOutButton = () => {
	location.assign("index.html");
};

const createPostFunction = (docRef) => {
	let status = document.querySelector("[type=radio]:checked").value;
	let message = timelinePost.value;
	let day = new Date().toLocaleDateString();
	let hour = new Date().toLocaleTimeString();
	let dates = " ";
	dates = day + " " + hour;
	let saveResultOfFunction = window.data.createPost(message, status, dates);
	if (saveResultOfFunction != "") {
		alertForPostEmpty.innerHTML = "Escribe un mensaje para empezar a Post."
	}
	timelinePost.value = "";
};

const createPostFunctionProfile = (docRef) => {
	let status = document.querySelector("[type=radio]:checked").value;
	let message = timelinePostPerfil.value;
	let day = new Date().toLocaleDateString();
	let hour = new Date().toLocaleTimeString();
	let dates = " ";
	dates = day + " " + hour;
	let saveResultOfFunction = window.data.createPost(message, status, dates);
	timelinePostPerfil.value = "";
	if (saveResultOfFunction != "") {
		alertForPostEmptyProfile.innerHTML = "Escribe un mensaje para empezar a Post."
	}
};
const sendLikes = (event) => {
	let idOfPost = event.target.getAttribute("data-id");
	window.data.likesFunction(idOfPost);
};

const goToProfilePage = () => {
	homePage.style.display = "none";
	timeLine.style.display = "block";
};

const goToHomePage = () => {
	homePage.style.display = "block";
	timeLine.style.display = "none";
}

const security = firebase.auth().onAuthStateChanged(function(user) {
	if (user && user.emailVerified) {
	} else {
		location.assign("index.html");
	};
});

document.getElementById("buttonReset").addEventListener('click',() => {
window.location = "#nav";
});

document.getElementById("signOut").addEventListener("click", signOutButton);
document.getElementById("buttonForCreatePost").addEventListener("click", createPostFunction);
document.getElementById("buttonForCreatePostPerfil").addEventListener("click", createPostFunctionProfile);
document.getElementById("goProfilePage").addEventListener("click", goToProfilePage);
document.getElementById("goHomePage").addEventListener("click", goToHomePage);
