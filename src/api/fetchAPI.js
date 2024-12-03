import axios from "axios";

const BASE_URL = 'http://localhost:7070/api/v1/surveys'
export const getUserSurvey = (userId)=>{
    return axios.get(`${BASE_URL}?userId=${userId}`)
}
export const getSurveryResults = ()=>{
    return axios.get(`${BASE_URL}/results`)
}

export const createSurvey = (payload) =>{
    return axios.post(`${BASE_URL}/create`,payload)
}

export const updateSurvey = (payload) =>{
    return axios.put(`${BASE_URL}/update`,payload)
}