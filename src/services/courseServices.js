import apiClient from "./services.js";
import Course from "./course.js";

const STATUS_OK = 200;

export default {
    /**
     *
     * @param {Course} course
     */
    create(course) {
        return apiClient.post("/courses/", course);
    },

    /**
     * @returns {Promise<Course>}
     */
    async getAll() {
        const response = await apiClient.get("/courses/");
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
        return apiClient.put(`/courses/${courseNumber}`, course);
    },

    /**
     * 
     * @param {string} courseNumber 
     * @returns {Promise<Course | null>}
     */
    async find(courseNumber) {
        const response = await apiClient.get(`/courses/${courseNumber}`);

        if (response.status != STATUS_OK)
        {
            console.error(`Could not find course with courseNumber: ${courseNumber}`);
            return null;
        }

        const { courseNum, name, department, description, level, hours } =
            response.data;

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
        return apiClient.delete(`/courses/${courseNumber}`);
    },

    /**
     * 
     * @returns {Promise<AxiosResponse>}
     */
    deleteAll() {
        return apiClient.delete("/courses/");
    }
};
