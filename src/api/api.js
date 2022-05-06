import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
      "API-Key": "88d7ae79-8db9-429a-adb2-6ff9c7634674",
    },
  });

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getAuth(){
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  // getFollow(user){
  //   return axios
  //     .delete(`follow/${user.id}`)
  //     .then((response) => {
  //       return response.data;
  //     });
  // }
};



