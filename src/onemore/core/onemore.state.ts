
export type IGender = "Male" | "Female";

export interface IUserInfo{
    name: String;
    dob: String;
    contactNumber: number;
    gender: IGender;
}

export interface IOneMoreState {
    tokenId: String;
    userInfo: IUserInfo;
}

export const INITIAL_STATE: IOneMoreState = {
    tokenId: "",
    userInfo: {
        name: '',
        dob: '',
        contactNumber: 0,
        gender: null,
    }
};

export function rootReducer(lastState: IOneMoreState = INITIAL_STATE, action ) {
    switch(action.type) {
        case 'First':

        default:
           return lastState;
    }
}