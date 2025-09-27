import axios from "axios";

const baseURL = import.meta.env.DEV ? "http://localhost/project-2" : "/project-2";

const apiClient = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Origin": "*",
        crossDomain: true
    },
    transformRequest: (data, headers) => JSON.stringify(data),
    transformResponse: (data) => JSON.parse(data)
});

export default apiClient;