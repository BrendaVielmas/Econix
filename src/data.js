const firebaseConfig = {
	apiKey: "AIzaSyCRTZD5G445OJHz5ws_8hB9PNzYTdOw4kw",
    authDomain: "social-network2-bc07b.firebaseapp.com",
    databaseURL: "https://social-network2-bc07b.firebaseio.com",
    projectId: "social-network2-bc07b",
    storageBucket: "social-network2-bc07b.appspot.com",
    messagingSenderId: "730773946253",
    appId: "1:730773946253:web:0802abed54ec8ab818c7c4"
};

firebase.initializeApp(firebaseConfig);

window.data = {

	acountValidation: (user) => {
	
		user.sendEmailVerification().then(() => {
		alert("Verifica tu Email Address para ingresar");
			
		}).catch((error) => {
		});
	},

	createUser: (email, password, name) => {
	
		firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
			user = firebase.auth().currentUser;
			window.data.acountValidation(user)
		}).then(() => {
			user.updateProfile({
					displayName: name,
					photoURL: "images/profilePhoto.jpg"
				}).then(() => {
				})
				.catch((error) => {
					console.log(error.message);
				});
		}).catch((error) => {
		
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
			alert(error.message);
			return true;
		});
	},

	goTimeLine: () => {
		location.assign("home.html");
	},



	createPost: (message, status, dates, likesCounter) => {
		if (message == "") {
			return "Error. El mensaje no puede estar vacío";
		}
		let name = localStorage.getItem("name");
		let uid = firebase.auth().currentUser.uid;
		
		let db = firebase.firestore();
		
		db.collection("Users").add({
				"message": message,
				"uid": uid,
				"name": name,
				"dates": dates,
				"status": status,
				"likes": 0

			})
			.then((docRef) => {
			})
			.catch((error) => {
			});
	},

	signIn: (email, password) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => {
				if (user.user.emailVerified) {
					window.data.goTimeLine()
				}
			})
			.catch((error) => {
				let errorCode = error.code;
				let errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				alert(error.message);
        return false;
			});
	},

	signOutFunction: () => {
		firebase.auth().signOut().then(() => {
		}).catch((error) => {
		});
	},

	deleteFunction: (idOfPost) => {
	
		db.collection("Users").doc(idOfPost).delete().then(() => {
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
		}).catch(function(error) {
			console.error("Error edit document: ", error);
		});
	},

	likesFunction: (idOfPost) => {
		const increment = firebase.firestore.FieldValue.increment(1);
		let likesRef = db.collection("Users").doc(idOfPost);
		likesRef.update({
			likes: increment
		});

	},

}
