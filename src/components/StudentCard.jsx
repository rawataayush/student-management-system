import React from 'react'

const StudentCard = ({student, index, handleDelete}) => {

    return (
        <div className="flex flex-wrap m-3.5">
            <div className="card w-full p-5 rounded bg-gray-100">
                <h3 className="text-2xl pb-2 text-wrap">{student.name}</h3>

                <div className="flex gap-0.5 text-lg">
                    <span>Age:</span>
                    <span className="font-normal text-gray-700">{student.age}</span>
                </div>
                <div className="flex gap-0.5 text-lg">
                    <span>Course:</span>
                    <span className="font-normal text-gray-700">{student.course}</span>
                </div>

                <button
                    type="button"
                    onClick={()=>handleDelete(index)}
                    className="w-full bg-red-500 p-1.5 mt-4 rounded text-white hover:bg-red-600 transition">Delete</button>
            </div>
        </div>
    )
}

export default StudentCard