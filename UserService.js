import axios from 'axios'

const USER_BASE_REST_API_URL ='http://localhost:8080';

class UserService{

    getAllUsers(User){
        return axios.get(USER_BASE_REST_API_URL+'/users',User);
    }
    createUser(User){
        return axios.post(USER_BASE_REST_API_URL+'/'+'add-user',User);
    }

    getUserByMail(email)
    {
        return axios.get(`${USER_BASE_REST_API_URL}/user/get/${email}`); 
    }

    // getUserById(Userid){
    //     return axios.get(`${USER_BASE_REST_API_URL}/user/${Userid}`);
    // }

    updateUser(Userid, user){
        return axios.put(`${USER_BASE_REST_API_URL}/update-user/${Userid}`,user);
    }

    deleteUser(Userid){
        return axios.delete(`${USER_BASE_REST_API_URL}/delete-user/${Userid}`);
    }

}
export default new UserService();