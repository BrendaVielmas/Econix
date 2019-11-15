const homePage = document.getElementById("homePage");
const timeLine = document.getElementById("timeLine")
const timelinePost = document.getElementById("timelinePost");
const timelinePostPerfil = document.getElementById("timelinePostPerfil");
let profile = document.getElementById("profile");
let alertForPostEmpty = document.getElementById("alertForPostEmpty");
let alertForPostEmptyProfile = document.getElementById("alertForPostEmptyProfile");
//inicialize of timeline part

let db = firebase.firestore()
db.collection("Users").orderBy("dates", "desc").where("status", "==", "Publico")
	.onSnapshot((mnsj) => {

		document.getElementById("sectionWithPost").innerHTML = "";

		mnsj.forEach((doc) => {
			if (doc.data().uid === uid) {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());

				let postOfUser = doc.data();
				let publicChecked = postOfUser.status == "Publico" ? "checked" : "";
				let privateChecked = postOfUser.status == "Privado" ? "checked" : "";
				document.getElementById("sectionWithPost").innerHTML += `
					<section class="invisible" id = "${doc.id}inputEditPost">
						<input class= "post" id= "${doc.id}editPostInput" type="textArea" size = "30" value = "${postOfUser.message}"></input>
						<label><input type="radio" name="${doc.id}radioForStatus" value="Publico" ${publicChecked}>Público</label>
						<label><input type="radio" name="${doc.id}radioForStatus" value="Privado" ${privateChecked}>Privado</label>
						<section id="boxForBtnSaveCancel">
							<button class= "saveButton" id="${doc.id}saveButton" data-id="${doc.id}">Guardar</button>
							<button class= "cancel" id="${doc.id}cancel" data-id="${doc.id}">Cancelar</button>
						</section>			
						</section>

					<section id="${doc.id}thisPost" class = "postInBox">
						<p class= "txtdate"> ${postOfUser.dates}</p>
						<p class= "txtname">${postOfUser.name}</p>
						<p class= "txtmns">${postOfUser.message}</p>
						<button class="buttonEdit" id="${doc.id}buttonEditPost" data-id="${doc.id}">Editar</button>
						<button class="buttonDelete" id="${doc.id}buttonDelete" data-id="${doc.id}">Eliminar</button>
						<section id="${doc.id}buttonForLike">
							<img src="images/heart.svg" id="${doc.id}buttonLike" class="buttonLike" data-id="${doc.id}" alt="botón de me gusta">
							<p class= "txtlike">Me gusta ${postOfUser.likes}</p>
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
 					<img src="images/heart.svg" id="${doc.id}buttonLike" class="buttonLike" data-id="${doc.id}" alt="botón de me gusta">
 					<p class= "txtlike">Me gusta ${postOfUser.likes}</p>
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
				console.log("Di click");
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
console.log(uid);

let dbUid = firebase.firestore()
dbUid.collection("Users").orderBy("dates", "desc")
	.onSnapshot((mnsj) => {
		document.getElementById("sectionWithUidPost").innerHTML = "";

		mnsj.forEach((doc) => {
			if (doc.data().uid === uid) {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());

				let postOfUserProfile = doc.data();
				let publicChecked = postOfUserProfile.status == "Publico" ? "checked" : "";
				let privateChecked = postOfUserProfile.status == "Privado" ? "checked" : "";
				document.getElementById("sectionWithUidPost").innerHTML += `

			<section class="invisible" id="${doc.id}inputEditPostProfile">
				<input class= "post" id= "${doc.id}editPostInputProfile" type="textArea" size = "30" value = "${postOfUserProfile.message}" aria-labelled="post"></input>
				<label><input type="radio" name="${doc.id}radioForStatusProfile" value="Publico" ${publicChecked}>Público</label>
				<label><input type="radio" name="${doc.id}radioForStatusProfile" value="Privado" ${privateChecked}>Privado</label>
				<section id="boxForBtnSaveCancelProfile">
					<button class= "saveButtonProfile" id="${doc.id}saveButton" data-id="${doc.id}">Guardar</button>
					<button class= "cancel" id="${doc.id}cancelButton" data-id="${doc.id}">Cancelar</button>
				</section>
			</section>
			<section id="${doc.id}thisPostProfile" class = "postInBox">
				<p class= "txtdate">${postOfUserProfile.dates}</p>
				<p class= "txtname">${postOfUserProfile.name}</p>
				<p class= "txtmns">${postOfUserProfile.message}</p>
				<button class="buttonEditProfile" id="${doc.id}buttonEdit" data-id="${doc.id}">Editar</button>
				<button class="buttonDelete" id="${doc.id}buttonDelete" data-id="${doc.id}">Eliminar</button>
				<section id="${doc.id}buttonForLikeProfile">
					<img src="images/heart.svg" id="${doc.id}buttonLike" class="buttonLike" data-id="${doc.id}" alt="botón de me gusta">
					<p class= "txtlike">Me gusta ${postOfUserProfile.likes}</p>
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
				console.log("Di click");
				document.getElementById(`${docId}inputEditPostProfile`).style.display = "block";
				document.getElementById(`${docId}thisPostProfile`).style.display = "none";
				document.getElementById(`${docId}buttonForLikeProfile`).style.display = "none";
			});
		};


		let cancelProfile = document.getElementsByClassName("cancel");
		for (let i = 0; i < cancelProfile.length; i++) {
			cancelProfile[i].addEventListener("click", () => {
				let docId = cancelProfile[i].getAttribute("data-id");
				console.log("Di click");
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
	console.log("in: data.js onAuthStateChanged");
	if (user && user.emailVerified) {
		console.log("usuario conectado");
		console.log(user);
		localStorage.setItem("name", user.displayName);
		localStorage.setItem("uid", user.uid);
		//User is signed in.
		const obj = {
			name: user.displayName,
			email: user.email,
			photo: user.photoURL
		}
		document.getElementById("profile").innerHTML = `
		<img id= "imgProfile" src=${user.photoURL}><strong><p style="vertical-align:top;"
     id= "nameProfile">${user.displayName}</p></strong>` + `
			<section>
		 		<button class="buttonEditPhotoProfile">Cambiar</button>
		 </section>` ;
	} else {
		// User is signed out.
		console.log("usuario desconectado");
	};
})



const deleteButton = (event) => {

	// messageToDelete =
	let idOfPost = event.target.getAttribute("data-id");
		if (confirm("¿Estás seguro que deseas eliminar esta publicación?")) {
		window.data.deleteFunction(idOfPost);
	}
};


const editPost = (event) => {

	let idOfPost = event.target.getAttribute("data-id");
	let newStatus = document.querySelector(`[name="${idOfPost}radioForStatus"]:checked`).value;
	let newPost = document.getElementById(`${idOfPost}editPostInput`).value;
	// messageToDelete =
	window.data.editFunction(idOfPost, newStatus, newPost);
};

const editPostProfile = (event) => {

	let idOfPost = event.target.getAttribute("data-id");
	let newStatus = document.querySelector(`[name="${idOfPost}radioForStatusProfile"]:checked`).value;
	let newPost = document.getElementById(`${idOfPost}editPostInputProfile`).value;
	// messageToDelete =
	window.data.editFunction(idOfPost, newStatus, newPost);
};

const signOutButton = () => {
	console.log("in: button.js signOutButton");
/*	window.data.signOutFunction();*/
	location.assign("index.html");
};

const createPostFunction = (docRef) => {
	console.log("in: button.js createPostFunction");
	// let name = profile.value;
	// console.log(name);
	let status = document.querySelector("[type=radio]:checked").value;
	let message = timelinePost.value;
	let day = new Date().toLocaleDateString();
	let hour = new Date().toLocaleTimeString();
	let dates = " ";
	dates = day + " " + hour;
	console.log(dates);
	let saveResultOfFunction = window.data.createPost(message, status, dates);

	if (saveResultOfFunction != "") {
		alertForPostEmpty.innerHTML = "Escribe un mensaje para empezar a publicar."
	}
	timelinePost.value = "";
};

const createPostFunctionProfile = (docRef) => {
	console.log("in: button.js createPostFunction");
	// let name = profile.value;
	// console.log(name);
	let status = document.querySelector("[type=radio]:checked").value;
	let message = timelinePostPerfil.value;
	let day = new Date().toLocaleDateString();
	let hour = new Date().toLocaleTimeString();
	let dates = " ";
	dates = day + " " + hour;
	console.log(dates);
	let saveResultOfFunction = window.data.createPost(message, status, dates);
	timelinePostPerfil.value = "";
	if (saveResultOfFunction != "") {
		alertForPostEmptyProfile.innerHTML = "Escribe un mensaje para empezar a publicar."
	}
};

/*const editPost = (event) => {
let idOfPost = event.target.id;

// messageToDelete =
window.data.editFunction(idOfPost);
};*/

const sendLikes = (event) => {
	console.log("hola");
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
		console.log("hello");
	} else {
		// User is signed out.
		console.log("usuario desconectado");
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
