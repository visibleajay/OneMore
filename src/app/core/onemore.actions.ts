import { IOneMoreState, IUserInfo } from "./onemore.state";
import { NgRedux } from '@angular-redux/store';

export class OneMoreActions {

    static UPDATE_USER_INFO = "UPDATE_USER_INFO";
    static UPDATE_LOGGEDIN_STATUS = "UPDATE_LOGGEDIN_STATUS";

    constructor(private ngRedux: NgRedux<IOneMoreState>) {}

    updateUserInfo(userInfo: IUserInfo) {
        return {
            type: OneMoreActions.UPDATE_USER_INFO,
            payload: {
                userInfo
            }
        };
    }

    updateLoggedInStatus(tokenId: String) {
        return {
            type: OneMoreActions.UPDATE_LOGGEDIN_STATUS,
            payload: {
                tokenId
            }
        };
    }

    signInUser() {

    }

    signOutUser() {

    }
}
