import axios from "axios";

const baseURL = import.meta.env.DEV ? "http://localhost/course-t6" : "/nodeapps/2025/project2/t6";

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