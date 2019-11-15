const firebaseConfig = {
	apiKey: "AIzaSyCUsBU3Hw9_o8myi2rql4FKoFxm7lIoRqc",
	authDomain: "laboratoria-sn.firebaseapp.com",
	databaseURL: "https://laboratoria-sn.firebaseio.com",
	projectId: "laboratoria-sn",
	storageBucket: "",
	messagingSenderId: "67746155841",
	appId: "1:67746155841:web:88baef8d3cf9be32"
};

firebase.initializeApp(firebaseConfig);


window.data = {

	acountValidation: (user) => {
		console.log("in: data.js acountValidation")
		user.sendEmailVerification().then(() => {
			console.log("Enviando correo electrónico");
			alert("Verifica tu correo electrónico para ingresar");
			// Email sent.
		}).catch((error) => {
			console.log("Error de verificación");
			// An error happened.
		});
	},

	createUser: (email, password, name) => {
		console.log("in: data.js createUser")
		firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
			user = firebase.auth().currentUser;
			window.data.acountValidation(user)
		}).then(() => {
			user.updateProfile({
					displayName: name,
					photoURL: "images/profilePhoto.jpg"
				}).then(() => {
					// User updated
				})
				.catch((error) => {
					console.log(error.message);
				});
		}).catch((error) => {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
			alert(error.message);
			return true;
		});
	},

	goTimeLine: () => {
		console.log("in: data.js goTimeLine")
		location.assign("muro.html");
	},



	createPost: (message, status, dates, likesCounter) => {
		if (message == "") {
			return "Error. El mensaje no puede estar vacío";
		}
		let name = localStorage.getItem("name");
		console.log(name);
		let uid = firebase.auth().currentUser.uid;
		console.log("in data.js createPost");
		let db = firebase.firestore();
		// Add a second document with a generated ID.
		db.collection("Users").add({
				"message": message,
				"uid": uid,
				"name": name,
				"dates": dates,
				"status": status,
				"likes": 0

			})
			.then((docRef) => {

				console.log("Document written with ID: ", docRef.id);

			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	},

	signIn: (email, password) => {
		console.log("in: data.js signIn")
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => {
				console.log(user);
				console.log("usuario activo");
				if (user.user.emailVerified) {
					window.data.goTimeLine()
				}
			})
			.catch((error) => {
				// Handle Errors here.
				let errorCode = error.code;
				let errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				alert(error.message);
        return false;
			});
	},

	signOutFunction: () => {
		console.log("in: data.js signOutFunction")
		firebase.auth().signOut().then(() => {
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});
	},

	deleteFunction: (idOfPost) => {
		console.log("idofpost:" + idOfPost)
		db.collection("Users").doc(idOfPost).delete().then(() => {
			console.log("Document successfully deleted!");
		}).catch(function(error) {
			console.error("Error removing document: ", error);
		});
	},


	editFunction: (idOfPost, newStatus, newPost) => {

		db.collection("Users").doc(idOfPost).set({
			"status": newStatus,
			"message": newPost
		}, {
			merge: true
		}).then(() => {
			console.log("Document successfully edit!");
			console.log(idOfPost);
			console.log(newPost);
			console.log(newStatus);
		}).catch(function(error) {
			console.error("Error edit document: ", error);
		});
	},

	likesFunction: (idOfPost) => {
		const increment = firebase.firestore.FieldValue.increment(1);
		let likesRef = db.collection("Users").doc(idOfPost);
		//  console.log(likesRef);
		likesRef.update({
			likes: increment
		});
		//console.log(likesUpdated);

	},

}
