import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    //Data
    let data = {
        email: email,
        password: password,
        username: username,
        role: role,
        image: image,
    }

    return axios.post('api/v1/participant/create', data);
}

const getAllUser = () => {

    return axios.get('api/v1/participant/getall');
}

export { postCreateNewUser, getAllUser };