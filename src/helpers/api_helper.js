import axios from "axios"

// const API_URL = `${location.protocol}//${location.host}`
const API_URL = process.env.REACT_APP_API_URL

const axiosApi = axios.create({
  baseURL: `${location.protocol}//${location.host}/api`,
})

axiosApi.interceptors.request.use(function(request) {
  let userObject = localStorage.getItem("authUser")
  if (userObject) {
    request.headers.common["Authorization"] = `Bearer ${JSON.parse(userObject).access}`
  }
  return request
}, function(error) {
  return Promise.reject(error)
})

axiosApi.interceptors.response.use(function(response) { 
  return response
}, function(error) {
  console.log(error.response);
  if (error && error.response && (error.response.status===401)) {
    localStorage.removeItem('authUser')
  } else if (error.response.status===500) {
    console.log(error.response, '>>>>>');
    return 
  }
  return Promise.reject(error)
})

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
