
import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class AuthService {

    private CONFIG;
    private GOOGLE_PROVIDER;
    private FACEBOOK_PROVIDER;

    constructor() {
        this.CONFIG =  {
            apiKey: "AIzaSyCOpyDNYSvg7ugzj0KNpxHylfmUoV8vHNw",
            authDomain: "onemore-b49c1.firebaseapp.com",
            projectId: "onemore-b49c1",
            messagingSenderId: "104462704724"
          };
        firebase.initializeApp(this.CONFIG);
        this.GOOGLE_PROVIDER = new firebase.auth.GoogleAuthProvider();
        this.GOOGLE_PROVIDER.addScope("https://www.googleapis.com/auth/contacts.readonly");

        this.FACEBOOK_PROVIDER = new firebase.auth.FacebookAuthProvider();
        this.FACEBOOK_PROVIDER.addScope('user_birthday');
        this.FACEBOOK_PROVIDER.addScope('user_about_me');
        this.FACEBOOK_PROVIDER.addScope('email');
        this.FACEBOOK_PROVIDER.addScope('public_profile');
    }

    googleSignIn() {
        firebase.auth().signInWithPopup(this.GOOGLE_PROVIDER).then((result) => {
            console.log({result: result});
        }).catch( (error) => {
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
        firebase.auth().signInWithPopup(this.FACEBOOK_PROVIDER).then( (result) => {
            console.log({result: result});
        }).catch((error) => {
            this.checkAlreadyExists(error);
            console.error({error: error})
        });
    }

    private checkAlreadyExists(error) {
        if ( error.code === "auth/account-exists-with-different-credential" ) {
            firebase.auth().fetchProvidersForEmail(error.email).then( (providers) => {
                
            });
        }
    }

    facebookSignOut() {
        this.googleSignOut();
    }
}
