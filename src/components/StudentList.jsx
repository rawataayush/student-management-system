import React from 'react'
import StudentCard from './StudentCard'

const StudentList = ({students, handleDelete}) => {

    return (
        <>
            <h2 className="text-2xl md:text-3xl text-center mb-4">Students</h2>
            
                {students.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'> 
                    {students.map((student, index)=> (
                        <StudentCard
                            key={index}
                            student={student}
                            index={index}
                            handleDelete={handleDelete} />
                    ))}
                </div>) : (
                    <div className='flex items-center justify-center h-40'>
                        <p className="text-gray-400 text-center md:text-xl">
                            No students added yet.
                        </p>
                    </div>
                )}
        </>
    )
}

export default StudentList