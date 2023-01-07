//Action Types
export const LOGGED_IN = `auth/LOGGED_IN`;
export const LOGGED_OUT = `auth/LOGGED_OUT`;

// export const  initialState = {
//     isLoggedIn: false,
//     user: null
// };
export const  initialState  = {"isLoggedIn": true, "user": {"created_at": "2022-11-29T11:39:16.000000Z", 
    "editing_village_id": 1, "email": "ab2@ameyem.com", "email_verified_at": null, 
    "id": 2, "mobile": "8800197778", "name": "Arun ", "role_id": 1, "status": 1,
     "surname": "Nalamara", "updated_at": "2022-11-29T11:39:16.000000Z"}}

//REDUCER
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:{
            let { user } = action;

            return {...state, isLoggedIn: true, user};
        }

        case LOGGED_OUT:{
            return {...state, ...initialState};
        }

        default:
            return state;
    }
};

export default authReducer;