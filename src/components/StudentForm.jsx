import React, { useState } from 'react';

const StudentForm = ({receiveStudent}) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit =  (e)=>{
        e.preventDefault();
        console.log("form submitted");
        const student = {
            name: name,
            age: age,
            course: course
        }

        receiveStudent(student);
        
        setName('');
        setAge('');
        setCourse('');
    }

    return (
        <div>
            <h1 className="text-2xl pt-5 text-center mb-10 mt-7 md:text-3xl">Student Manager</h1>

            <form 
                    className="w-full md:w-sm mx-auto rounded border-gray-300 p-2 m-2"
                onSubmit={handleSubmit}>

                <div className="flex flex-col pb-1.5">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        className="flex-1 border border-gray-300 rounded p-1"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-col pb-1.5">
                    <label htmlFor="age">Age</label>
                    <input 
                        className="flex-1 border border-gray-300 rounded p-1"
                        type="text"
                        name="age"
                        id="age"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
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
                        value={course}
                        onChange={(e)=>setCourse(e.target.value)}
                        required 
                    />
                </div>

                <button
                    className="border rounded p-1 bg-green-700 text-white w-full cursor-pointer" 
                    type="submit">
                        Add Student
                </button>
            </form>
        </div>
    )
}

export default StudentForm