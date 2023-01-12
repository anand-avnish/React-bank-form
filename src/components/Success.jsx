import React from 'react'

function Success({restart, values}) {

    const Restart = e => {
        e.preventDefault();
        restart();
    }

    return (
        <div className="flex flex-col text-left px-10 my-2">
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">Name : </span>{values.firstName + " " + values.lastName}</span>
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">Email : </span>{values.email}</span>
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">Phone Number : </span>{values.mobile}</span>
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">Country : </span>{values.country}</span>
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">Currency : </span>{values.currency}</span>
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">IFSC Code : </span>{values.ifscCode}</span>
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">Account Number : </span>{values.accountNo}</span>
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">City : </span>{values.city}</span>
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">Address : </span>{values.address}</span>
            <span className="w-full my-1"><span className="w-1/3 font-bold mr-2">ZIP Code : </span>{values.zipCode}</span>
            <div className="w-full flex justify-center mt-3">
                <button 
                    onClick={Restart}
                    className="mt-3 bg-[#458ECA] text-white p-3 w-max rounded-md"
                >Start Over</button>
            </div>
        </div>
    )
}

export default Success