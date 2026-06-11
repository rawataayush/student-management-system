import React from 'react'
import StudentCard from './StudentCard'

const StudentList = (students) => {

    return (
        <>
            <h2 className="text-2xl text-center">Students</h2>
            {students.students.length > 0 ? students.students.map((student, index)=> (
                <StudentCard key={index} student={student} />
            )) : (
                <p className="text-gray-400 text-center">No students added yet.</p>
            )}
        </>
    )
}

export default StudentList