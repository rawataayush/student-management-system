import React from 'react';

const StudentCard = ({ student, index, handleDelete }) => {

    return (
        <div className="my-3.5 mx-4 md:min-w-3xs sm:mx-auto">
            <div className="min-h-sm h-64 w-full sm:w-72 lg:w-80 p-5 rounded-xl shadow-md hover:shadow-xl flex flex-col bg-gray-100">

                <h2 className="text-xl sm:text-2xl font-semibold pb-2 truncate">{student.name}</h2>

                <div className="text-base sm:text-lg space-y-2 flex-1">
                    <p>
                        <span className="font-semibold">Age: </span>
                        <span className="font-normal text-gray-700">{student.age}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Course: </span>
                        <span className="font-normal text-gray-700 wrap-break-word">{student.course}</span>
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="w-full bg-red-500 p-2 mt-4 rounded text-white hover:bg-red-600 transition cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </div>

    )
}

export default StudentCard