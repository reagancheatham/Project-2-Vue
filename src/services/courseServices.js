import apiClient from "./services.js";
import Course from "./course.js";

const STATUS_OK = 200;
const API_ROOT = "/courses/";

export default {
    /**
     *
     * @param {Course} course
     */
    create(course) {
        return apiClient.post(API_ROOT, course);
    },

    /**
     * @returns {Promise<Course>}
     */
    async getAll() {
        const response = await apiClient.get(API_ROOT);
        return response.data.map((courseObject) => {
            const {
                courseNumber,
                name,
                department,
                description,
                level,
                hours,
            } = courseObject;

            return new Course(
                courseNumber,
                name,
                department,
                description,
                level,
                hours
            );
        });
    },

    /**
     *
     * @param {Course} course
     * @returns {Promise<Course>}
     */
    update(courseNumber, course) {
        return apiClient.put(`${API_ROOT}${courseNumber}`, course);
    },

    /**
     *
     * @param {string} courseNumber
     * @returns {Promise<Course | null>}
     */
    async find(courseNumber) {
        try {
            const response = await apiClient.get(`${API_ROOT}${courseNumber}`);
        } catch (error) {
            console.error(
                `Could not find course with courseNumber: ${courseNumber}`
            );
            return null;
        }

        const { courseNum, name, department, description, level, hours } =
            response.data;

        console.log(response.data);

        return new Course(
            courseNum,
            name,
            department,
            description,
            level,
            hours
        );
    },

    /**
     *
     * @param {string} courseNumber
     */
    delete(courseNumber) {
        return apiClient.delete(`${API_ROOT}${courseNumber}`);
    },

    /**
     *
     * @returns {Promise<AxiosResponse>}
     */
    deleteAll() {
        return apiClient.delete(API_ROOT);
    },
};
