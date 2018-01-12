
import { IOneMoreState, IUserInfo } from "./onemore.state";

export class OneMoreActions {

    static UPDATE_USER_INFO = "UPDATE_USER_INFO";
    static UPDATE_LOGGEDIN_STATUS = "UPDATE_LOGGEDIN_STATUS";

    constructor() {}

    updateUserInfo(userInfo: IUserInfo) {
        return {
            type: OneMoreActions.UPDATE_USER_INFO,
            payload: {
                userInfo
            }
        };
    }

    updateLoggedInStatus(loggedInInfo) {
        return {
            type: OneMoreActions.UPDATE_LOGGEDIN_STATUS,
            payload: {
                ...loggedInInfo
            }
        };
    }

    signInUser() {

    }

    signOutUser() {

    }
}
