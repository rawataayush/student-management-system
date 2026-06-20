import { useEffect, useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const receiveStudent = (student) => {
    const newStudent = [...students, student];
    setStudents(newStudent);
  }
  
  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    const loadedStudents = storedStudents? JSON.parse(storedStudents) : [];
    console.log('loading', loadedStudents);
    setStudents(loadedStudents)
  }, []);
  
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
    console.log('saving', students);
  }, [students]);

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