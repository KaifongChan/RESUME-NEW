import { useState } from "react"

export default function InputInformation({ fullName, emailAddress, onNameChange, onEmailChange, handleSubmit }) {
    useState()

    return (
        <div className="p-10">
            <h1 className="text-4xl">Information Fields</h1>
            <div className="flex flex-col">
                <h2 className="text-2xl">Personal Details</h2>
                <form action="" className="flex flex-col">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" className="bg-slate-200" value={fullName.current} onChange={onNameChange} required />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="bg-slate-200" value={emailAddress.current} onChange={onEmailChange} required />
                    <br />
                    {fullName.current != "" & emailAddress.current != "" ? <button className="bg-cyan-500 w-1/4" onClick={handleSubmit}>Submit</button> : <button className="bg-red-500 w-1/4" onClick={handleSubmit} disabled>Submit</button>}

                </form>
            </div>
        </div>
    )

}