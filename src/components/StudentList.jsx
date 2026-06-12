import React from 'react'
import StudentCard from './StudentCard'

const StudentList = ({students, handleDelete}) => {

    return (
        <>
            <h2 className="text-2xl text-center">Students</h2>
            {students.length > 0 ? students.map((student, index)=> (
                <StudentCard 
                    key={index}
                    student={student} 
                    index={index} 
                    handleDelete={handleDelete} />
            )) : (
                <p className="text-gray-400 text-center">No students added yet.</p>
            )}
        </>
    )
}

export default StudentList