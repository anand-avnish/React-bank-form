import React from 'react'

const AddressDetails = ({prevStep, nextStep, handleChange, values, handleSubmit}) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div className="flex flex-col text-left px-10 my-2">
            <label className="mt-2">City<br />
                <input 
                    type="text" 
                    placeholder="City" 
                    value={values.city} 
                    onChange={handleChange('city', 'address')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                />
                {values.addressErrors.city.length > 0 && <span className='text-red-500'>{values.addressErrors.city}</span>}
            </label>

            <label className="mt-2">Address<br />
                <input 
                    type="text" 
                    placeholder="Address" 
                    value={values.address} 
                    onChange={handleChange('address', 'address')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                />
                {values.addressErrors.address.length > 0 && <span className='text-red-500'>{values.addressErrors.address}</span>}
            </label>

            <label className="mt-2">Zip Code<br />
                <input 
                    type="text" 
                    placeholder="Zip Code" 
                    value={values.zipCode} 
                    onChange={handleChange('zipCode', 'address')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                />
                {values.addressErrors.zipCode.length > 0 && <span className='text-red-500'>{values.addressErrors.zipCode}</span>}
            </label>

            <div className="w-full flex flex-row justify-between">
                <button 
                    onClick={Previous}
                    className="mt-3 border border-black p-3 w-max rounded-md"
                >Go Back</button>
                <button 
                    disabled={!values.addressErrors.valid}
                    onClick={Next}
                    className="mt-3 bg-[#458ECA] text-white p-3 w-max rounded-md disabled:bg-gray-400"
                >Submit</button>
            </div>
        </div>
    )
}

export default AddressDetails