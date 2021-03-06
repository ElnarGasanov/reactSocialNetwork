import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "192171f4-48b6-4ee6-b3ed-b4f56cc26fba"},
})

export const usersAPI = {
    getUsers ( currentPage, pageSize ){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode)
    },
    followUser(id) {
        return instance.post(`follow/${id}` )
            .then(response => response.data.resultCode)
    },
    userProfile(userId){return instance.get(`profile/${userId}`)},
    authMe(){return instance.get(`auth/me`)},
    getMyData(id) {return instance.get(`profile/${id}`)},
}


