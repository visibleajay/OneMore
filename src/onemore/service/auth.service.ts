
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IOneMoreState, IUserInfo, ILoggedInInfo } from '../core/onemore.state';
import { OneMoreActions } from '../core/onemore.actions';
import { Router } from '@angular/router';

declare var firebase: any;

@Injectable()
export class AuthService {

	private CONFIG;
	private GOOGLE_PROVIDER;
	private FACEBOOK_PROVIDER;

	constructor(public ngRedux: NgRedux<IOneMoreState>,
							public oneMoreActions: OneMoreActions,
							private router: Router
						) {
		this.CONFIG = {
				apiKey: "AIzaSyCOpyDNYSvg7ugzj0KNpxHylfmUoV8vHNw",
				authDomain: "onemore-b49c1.firebaseapp.com",
				projectId: "onemore-b49c1",
				messagingSenderId: "104462704724"
			};
		firebase.initializeApp(this.CONFIG);
		this.GOOGLE_PROVIDER = new firebase.auth.GoogleAuthProvider();
		this.GOOGLE_PROVIDER.addScope('https://www.googleapis.com/auth/userinfo.profile');
		this.GOOGLE_PROVIDER.addScope('https://www.googleapis.com/auth/userinfo.email');
		this.GOOGLE_PROVIDER.addScope("https://www.googleapis.com/auth/user.birthday.read");

		this.FACEBOOK_PROVIDER = new firebase.auth.FacebookAuthProvider();
		this.FACEBOOK_PROVIDER.addScope('user_birthday');
		this.FACEBOOK_PROVIDER.addScope('user_about_me');
		this.FACEBOOK_PROVIDER.addScope('email');
		this.FACEBOOK_PROVIDER.addScope('public_profile');
	}

	googleSignIn() {
		firebase.auth().signInWithPopup(this.GOOGLE_PROVIDER).then(this.APISuccess).catch( (error) => {
			console.log({error: error});
		});
	}

	googleSignOut() {
		firebase.auth().signOut().then(() => {
			console.log("Sign Out successfully");
		}).catch( () => {
			console.log("Sign out error");
		});
	}

	facebookSignIn() {
		firebase.auth().signInWithPopup(this.FACEBOOK_PROVIDER).then(this.APISuccess).catch((error) => {
	
		});
	}

	APISuccess = (result) => {
		const USER: IUserInfo = {
			'name': result.additionalUserInfo.profile.name,
			'email': result.additionalUserInfo.profile.email,
			'gender': result.additionalUserInfo.profile.gender
		};
		const LOGGEDININFO: ILoggedInInfo = {
			'isLoggedIn': true,
			'accessTokenId': result.credential.accessToken
		};
		this.router.navigate(['/form']);
		this.ngRedux.dispatch(this.oneMoreActions.updateLoggedInStatus(LOGGEDININFO));
		this.ngRedux.dispatch(this.oneMoreActions.updateUserInfo(USER));
	}
	
	private checkAlreadyExists(error) {
		if ( error.code === "auth/account-exists-with-different-credential" ) {
			
		}
	}

	facebookSignOut() {
		this.googleSignOut();
	}

	signIn(signInInfo) {
		console.log("inside normal signin");
		console.log({info: signInInfo});
	}
}
