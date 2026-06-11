import { useState } from 'react'
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const receiveStudent = (student) => {
    const newStudent = [...students, student];
    setStudents(newStudent);
  }

  return (
    <div>
      <StudentForm receiveStudent={receiveStudent}/>
      <StudentList students={students} />
    </div>
  )
}

export default App