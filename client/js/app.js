const form = document.querySelector('form');
form.addEventListener('submit', submitStudent)

// index
function getAllStudents(){
    fetch('http://localhost:3000/students')
        .then(r => r.json())
        .then(appendStudents)
        .catch(console.warn)
};

// create
function submitStudent(e){
    e.preventDefault();

    const studentData = {
        name: e.target.name.value,
        age: e.target.age.value,
        results: e.target.results.value,
        
    };
console.log(studentData)
    const options = { 
        method: 'POST',
        body: JSON.stringify(studentData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/students', options)
        .then(r => r.json())
        .then(appendStudent)
        .catch(console.warn)
};

// helpers
function appendStudents(students){
    students.forEach(appendStudent);
};

function appendStudent(studentData){
    const newLi = document.createElement('li');
    newLi.textContent = `${studentData.name} aged ${studentData.age} has tested ${studentData.results}`
    const studentsList = document.querySelector('ul');
    studentsList.append(newLi);
};

getAllStudents()

module.exports = {
    getAllStudents,
    submitStudent,
    appendStudents,
    appendStudent,
}