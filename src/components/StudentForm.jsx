import React from 'react'

const StudentForm = () => {

    const handleSubmit =  (e)=>{
        e.preventDefault();
        console.log("form submitted");
    }

    return (
        <div>
            <h1 className="text-2xl pt-5 text-center mb-10 mt-7">Student Manager</h1>

            <form 
                className="rounded border-gray-300 p-2 m-2"
                onSubmit={handleSubmit}>

                <div className="flex flex-col pb-1.5">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        className="flex-1 border border-gray-300 rounded p-1" 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Enter name"
                        required/>
                </div>

                <div className="flex flex-col pb-1.5">
                    <label htmlFor="age">Age</label>
                    <input 
                        className="flex-1 border border-gray-300 rounded p-1"
                        type="text" 
                        name="age" 
                        id="age" 
                        placeholder="Enter age"
                        required
                    />
                </div>

                <div className="flex flex-col pb-1.5">
                    <label htmlFor="course">Course</label>
                    <input 
                        className="flex-1 border border-gray-300 rounded p-1" 
                        type="text" 
                        name="course" 
                        id="course" 
                        placeholder="Enter course"
                        required 
                        />
                </div>

                <button
                    className="border rounded p-1 bg-green-700 text-white w-full cursor-pointer" 
                    type="submit"
                    >Add Student</button>
            </form>
        </div>
    )
}

export default StudentForm