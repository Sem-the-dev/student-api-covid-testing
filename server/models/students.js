const studentData = require('../data');

class Student {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.results = data.results;
    }

    static get all() {
        const students = studentData.map((student) => new Student(student));
        return students
    }

    static findById(id) {
        try {
            const studentData = studentData.filter((student) => student.id === id)[0];
            const student = new Student(studentData);
            return student;
        } catch (err) {
            throw new Error('That student does not exist');
        }
    }

    static create(student) {
        const newStudentId = studentData.length + 1;
        const newStudent = new Student({ id: newStudentId, ...student});
        studentData.push(newStudent);
        return newStudent;
    }

    destroy() {
    const student = studentData.filter((student) => student.id === this.id)[0];
    studentData.splice(studentData.indexOf(student), 1);
  }
}



module.exports = Student;