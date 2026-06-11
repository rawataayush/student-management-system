import React from 'react'

const StudentCard = ({student}) => {
    return (
        <div className="flex flex-wrap m-3.5">
            <div className="card w-full p-5 rounded bg-gray-100">
                <h3 className="text-2xl pb-4 text-wrap">{student.name}</h3>
                <p>Age: {student.age}</p>
                <p>Course: {student.course}</p>
            </div>
        </div>
    )
}

export default StudentCard