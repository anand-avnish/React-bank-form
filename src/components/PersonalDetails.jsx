import React from 'react'

const PersonalDetails = ({nextStep, handleChange, values, handleSubmit}) => {

    const Next = e => {
        e.preventDefault();
        nextStep();
    }



    return (
        <div className="flex flex-col text-left px-10 my-2">
            <label className="mt-2">First Name<br />
                <input 
                    type="text" 
                    placeholder="First Name" 
                    value={values.firstName} 
                    onChange={handleChange('firstName','personal')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                />
                {values.personalErrors.firstName.length > 0 && <span className='text-red-500'>{values.personalErrors.firstName}</span>}
                {/* {console.log(values)} */}
            </label>

            <label className="mt-2">Last Name<br />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={values.lastName} 
                    onChange={handleChange('lastName','personal')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                />
                {values.personalErrors.lastName.length > 0 && <span className='text-red-500'>{values.personalErrors.lastName}</span>}
            </label>

            <label className="mt-2">Email<br />
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    value={values.email} 
                    onChange={handleChange('email','personal')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                />
                {values.personalErrors.email.length > 0 && <span className='text-red-500'>{values.personalErrors.email}</span>}
            </label>

            <label className="mt-2">Phone Number<br />
                <input 
                    type="text" 
                    placeholder="Phone Number" 
                    value={values.mobile} 
                    onChange={handleChange('mobile','personal')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                />
                {values.personalErrors.mobile.length > 0 && <span className='text-red-500'>{values.personalErrors.mobile}</span>}
            </label>
            <div className="w-full flex flex-row justify-end">
                <button 
                    disabled={!values.personalErrors.valid}
                    onClick={Next}
                    className="mt-3 bg-[#458ECA] text-white p-3 w-max rounded-md disabled:bg-gray-400"
                >Continue</button>
            </div>
        </div>
    )
}

export default PersonalDetails