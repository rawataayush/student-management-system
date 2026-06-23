import React from 'react'
import StudentCard from './StudentCard'

const StudentList = ({students, handleDelete}) => {

    return (
        <>
            <h2 className="text-2xl md:text-3xl text-center">Students</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {students.length > 0 ? students.map((student, index)=> (
                    <StudentCard
                        key={index}
                        student={student}
                        index={index}
                        handleDelete={handleDelete} />
                )) : (
                    <p className="text-gray-400 text-center md:text-xl">No students added yet.</p>
                )}
            </div>
        </>
    )
}

export default StudentList