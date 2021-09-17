import {combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import friends_reducer from "./friends_reducer";

let reducers = combineReducers({
   profilePage: profile_reducer,
   dialogsPage: dialogs_reducer,
   friendsPage: friends_reducer,
});

let store = createStore(reducers);

window.store = store;

export default store;