import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const receiveStudent = (student) => {
    const newStudent = [...students, student];
    setStudents(newStudent);
  }

  const handleDelete = (index) => {
    const updatedStudent = students.filter((student, currentIdx )=> {
      return currentIdx !== index;
    })
    setStudents(updatedStudent);
  }

  return (
    <div>
      <StudentForm receiveStudent={receiveStudent}/>
      <StudentList students={students} handleDelete={handleDelete}/>
    </div>
  )
}

export default App