import Usertypes from "./user-type"


export const UserActions = (user) => ({
    type: Usertypes.SET_LOGIN_USER,
    type: Usertypes.SET_REGISTER_USER,
    payload: user,
})
