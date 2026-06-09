import { useState } from 'react'
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <div>
      <StudentForm />
      <StudentList />
    </div>
  )
}

export default App