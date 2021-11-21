import Usertypes from "./user-type";

const INITIAL_STATE = {
  setloginuser: [
    {
      email: "",
      password: "",
    },
  ],
  setregisteruser: [
    {
      emailAdress: "",
      password: "",
      confirmPassword: "",
      adress: "",
      accountType: "",
      addFace: "",
    },
  ],
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Usertypes.SET_LOGIN_USER:
      return {
        ...state,
        setloginuser: action.payload,
      };
    case Usertypes.SET_REGISTER_USER:
      return {
        ...state,
        setregisteruser: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
