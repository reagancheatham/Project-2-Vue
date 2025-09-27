import apiClient from "./services.js";
import Course from "./course.js";

// // Create a new course
// router.post("/", courses.create);

// // Retrieve all courses
// router.get("/", courses.findAll);

// // Retrieve a course with a courseNumber
// router.get("/:courseNumber", courses.find);

// // Update a course with a courseNumber
// router.put("/:courseNumber", courses.update);

// // Delete a course with a courseNumber
// router.delete("/:courseNumber", courses.destroy);

// // Delete all courses
// router.delete("/", courses.destroyAll);

export default {
    /**
     * 
     * @param {Course} course 
     * @returns 
     */
    create(course) {
        return apiClient.post("/courses/", course);
    },

    delete(courseNumber) {
        return apiClient.delete(`/courses/${courseNumber}`);
    },

    /** 
     * @returns {Promise<Course>}
    */
    async getAll() {
        const response = await apiClient
            .get("/courses/");
        return response.data.map((courseObject) => {
            const { courseNumber, name, department, description, level, hours } = courseObject;

            return new Course(courseNumber, name, department, description, level, hours);
        });
    },
};
