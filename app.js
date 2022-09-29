// DOM Elements
const studentForm = document.getElementById("studentForm")
const studentsContainer = document.querySelector(".students")
const nameInput = studentForm["name"]
const ageInput = studentForm["age"]
const idInput = studentForm["id"]
 
const students = JSON.parse(localStorage.getItem("students")) || []
 
const addStudent = (name, age, id) => {
  students.push({
    name,
    age,
    id,
  })
 
  localStorage.setItem("students", JSON.stringify(students))
 
  return { name, age, id }
}
 
const createStudentElement = ({ name, age, id }) => {
  // Create elements
  const studentDiv = document.createElement("div")
  const studentName = document.createElement("h2")
  const studentAge = document.createElement("p")
  const studentId = document.createElement("p")
 
  // Fill the content
  studentName.innerText = "Student name: " + name
  studentAge.innerText = "Student age: " + age
  studentId.innerText = "Student id: " + id
 
  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentId)
  studentsContainer.appendChild(studentDiv)
 
  studentsContainer.style.display = students.length === 0 ? "none" : "flex"
}
 
studentsContainer.style.display = students.length === 0 ? "none" : "flex"
 
students.forEach(createStudentElement)
 
studentForm.onsubmit = (e) => {
  e.preventDefault()
 
  const newStudent = addStudent(nameInput.value, ageInput.value, idInput.value)
 
  createStudentElement(newStudent)
 
  nameInput.value = ""
  ageInput.value = ""
  idInput.value = ""
}
