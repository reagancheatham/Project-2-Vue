import axios from "axios";

const baseURL = import.meta.env.DEV ? "http://localhost/course-t6" : "/course-t6";

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
    transformResponse: (data) => data
});

export default apiClient;