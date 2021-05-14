import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY" : "b83e2178-577b-4922-bb96-0e4464c1ce4c"}
})

export const usersAPI = {
    getUsers(page, count) {
        return instance.get(`users?page=${page}&count=${count}&total`);
    },
    unfollowUser(userId){
        return instance.delete(`follow/${userId}`);
    },
    followUser(userId){
        return instance.post(`follow/${userId}`);
    }
}

export const profileAPI = {
    getProfileInfo(userId){
        return instance.get(`profile/${userId}`);
    },
    setAuthData(){
        return authAPI.me();
    },
    getUserStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateUserStatus(status){
        return instance.put(`profile/status`, status);
    }
}

export const authAPI = {
    logIn(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logOut(){
        return instance.delete(`auth/login`);
    },
    me(){
        return instance.get(`auth/me`);
    }
}