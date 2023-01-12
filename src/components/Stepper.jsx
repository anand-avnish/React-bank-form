import React from 'react'

function Stepper({step}) {
    // console.log(step);
    return (
        <div className="flex justify-evenly mt-2 pb-2 font-semibold border-b border-[#458ECA] mx-2">
            {(step===1)?activeStep(1, "Personal Details"):completedStep("Personal Details")}
            {(step===2)?activeStep(2, "Bank Details"):((step>2)?completedStep("Bank Details"):inActiveStep(2, "Bank Details"))}
            {(step===3)?activeStep(3, "Address Details"):((step>3)?completedStep("Address Details"):inActiveStep(3, "Address Details"))}
            {(step===4)?activeStep(4, "Success"):inActiveStep(4, "Summary")}
        </div>
    )
}

function activeStep(value, text){
    return (
        <div className='flex flex-col items-center'>
            <div className="flex justify-center items-center circle h-12 w-12 text-white rounded-full bg-[#458ECA]">
                {value}
            </div>
            <p>{text}</p>
        </div>
    )
}

function completedStep(text){
    return (
        <div className='flex flex-col items-center'>
            <div className="flex justify-center items-center circle h-12 w-12 text-white rounded-full bg-[#458ECA]">
                <span className="material-symbols-outlined">
                    done
                </span>
            </div>
            <p>{text}</p>
        </div>
    )
}

function inActiveStep(value, text){
    return (
        <div className='flex flex-col items-center'>
            <div className="flex justify-center items-center circle h-12 w-12 rounded-full bg-gray-400">{value}</div>
            <p>{text}</p>
        </div>
    )
}

export default Stepper