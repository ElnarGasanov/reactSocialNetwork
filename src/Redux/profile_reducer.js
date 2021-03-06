import {usersAPI} from "../api/api";

let initialState = {
    posts: [
        {id: 1, message: "privet,brat", quantity__like: "15", quantity__dislike: "1"},
        {id: 2, message: "it`s my new post", quantity__like: "15", quantity__dislike: "1"},
        {id: 3, message: "hi,hi", quantity__like: "11", quantity__dislike: "11"},
        {id: 4, message: "it`s my no new post", quantity__like: "133", quantity__dislike: "12"},
    ],
    newPostText: 'privet',
    profile: null,
};

const profile_reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                message: state.newPostText,
                quantity__like: 0,
                quantity__dislike: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText,}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"});
export const updatePostActionCreator = (text) => ({type: "UPDATE-NEW-POST-TEXT", newText: text,});
export const setUserProfile = (profile) => ({type: "SET-USER-PROFILE", profile});

export const userProfile = (userId) => {
    return (dispatch) => {
        usersAPI.userProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}


export default profile_reducer;