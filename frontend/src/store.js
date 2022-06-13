import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer
} from "./reducers/userReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import {
    noteListReducer,
    noteCreateReducer,
    noteUpdateReducer,
    noteDeleteReducer,
} from "./reducers/notesReducer"
 
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    noteList: noteListReducer,
    noteCreate: noteCreateReducer,
    noteUpdate: noteUpdateReducer,
    noteDelete: noteDeleteReducer,
    userUpdate: userUpdateReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin:{userInfo : userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;