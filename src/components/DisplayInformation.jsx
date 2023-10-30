export default function DisplayInformation({ fullName, emailAddress, submit }) {
    return (
        <div className="p-10">
            <h1 className="text-4xl">Display Information</h1>
            {submit ? <div>
                <h2>{fullName.prev}</h2>
                <h2>{emailAddress.prev}</h2>
            </div> : 'Not submitted'}





            {/* <h2>{fullName === "" ? "This is where your name will be." : fullName}</h2>
            <h2>{emailAddress === "" ? "This is where your email address will be." : emailAddress}</h2> */}
        </div>
    )
}