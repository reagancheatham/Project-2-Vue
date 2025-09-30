import apiClient from "./services.js";
import Course from "./course.js";

const STATUS_OK = 200;

export default {
    /**
     *
     * @param {Course} course
     */
    create(course) {
        return apiClient.post("/course-t6/", course);
    },

    /**
     * @returns {Promise<Course>}
     */
    async getAll() {
        const response = await apiClient.get("/course-t6/");
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
        return apiClient.put(`/course-t6/${courseNumber}`, course);
    },

    /**
     * 
     * @param {string} courseNumber 
     * @returns {Promise<Course | null>}
     */
    async find(courseNumber) {
        const response = await apiClient.get(`/course-t6/${courseNumber}`);

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
        return apiClient.delete(`/course-t6/${courseNumber}`);
    },

    /**
     * 
     * @returns {Promise<AxiosResponse>}
     */
    deleteAll() {
        return apiClient.delete("/course-t6/");
    }
};
