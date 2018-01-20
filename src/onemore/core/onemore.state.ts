import { OneMoreActions } from "./onemore.actions";

export type IGender = "Male" | "Female";

export interface ILoggedInInfo {
	isLoggedIn: Boolean;
	accessTokenId: String;
}

export interface IUserInfo{
	name: String;
	// dob: String;
	email: String
	gender: IGender;
}

export interface IOneMoreState {
	loggedInInfo: ILoggedInInfo
	userInfo: IUserInfo;
}

export const INITIAL_STATE: IOneMoreState = {
	loggedInInfo: {
		isLoggedIn: false,
		accessTokenId: null
	},
	userInfo: {
			name: '',
			email: '',
			gender: null,
	}
};

export function rootReducer(lastState: IOneMoreState = INITIAL_STATE, action ) {
	switch(action.type) {
		case OneMoreActions.UPDATE_USER_INFO:
			return {
				...lastState,
				userInfo: action.payload.userInfo
			};
		case OneMoreActions.UPDATE_LOGGEDIN_STATUS:
			return {				
				...lastState,
				loggedInInfo: {
					isLoggedIn: action.payload.isLoggedIn,
					accessTokenId: action.payload.accessTokenId
				},
			};
		default:
			return lastState;
	}
}