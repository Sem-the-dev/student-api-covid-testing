const express = require ('express');
const router = express.Router();

const Students = require('../models/students');

router.get('/', (req, res) => {
    const studentData = Students.all;
    res.send(studentData); 
})

router.get('/:id', (req, res) => {
    try {
        const studentId = parseInt(req.param.id);
        const selectedStudent = Students.findById(studentId);
        res.send(selectedStudent)
    } catch (err) {
        console.log(err);
        res.status(404).send(err)

    }
})

router.post('/', (req, res) => {
    const data = req.body;
    const newStudent = Students.create(data);
    res.status(201).send(newStudent)
})

router.delete('/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentToDestroy = Students.findById(studentId);
    studentToDestroy.destroy();
    res.status(204).send();
})

module.exports = router;