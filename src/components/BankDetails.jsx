import React, {useEffect, useState} from 'react'

const BankDetails = ({prevStep, nextStep, handleChange, values, handleSubmit}) => {

    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('countries.json'
            ,{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function(response){
            // console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            // console.log(myJson);
            setData(myJson)
        });
    }

    useEffect(()=>{
        getData()
    },[])

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
            <label className="mt-2">Country<br />
                {/* <input 
                    type="text" 
                    placeholder="Country" 
                    value={values.country} 
                    onChange={handleChange('country','bank')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                /> */}
                <select 
                    value={values.country} 
                    onChange={handleChange('country','bank')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                >
                    {
                        data.country && data.country.length>0 && data.country.map((item)=><option value={item.countryName} key={item.countryName}>{item.countryName}</option>)
                    }
                </select>
                {/* {values.bankErrors.country.length > 0 && <span className='text-red-500'>{values.bankErrors.country}</span>} */}
            </label>

            <label className="mt-2">Currency<br />
                <input 
                    type="text" 
                    placeholder="Currency" 
                    value={values.currency} 
                    onChange={handleChange('currency','bank')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    readOnly
                    required
                />
                {/* {values.bankErrors.currency.length > 0 && <span className='text-red-500'>{values.bankErrors.currency}</span>} */}
            </label>

            <label className="mt-2">IFSC Code<br />
                <input 
                    type="text" 
                    placeholder="IFSC Code" 
                    value={values.ifscCode} 
                    onChange={handleChange('ifscCode', 'bank')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                />
                {values.bankErrors.ifscCode.length > 0 && <span className='text-red-500'>{values.bankErrors.ifscCode}</span>}
            </label>

            <label className="mt-2">Account Number<br />
                <input 
                    type="text" 
                    placeholder="Account Number" 
                    value={values.accountNo} 
                    onChange={handleChange('accountNo', 'bank')}
                    className="my-2 w-full h-10 border border-black px-2 rounded-md"
                    required
                />
                {values.bankErrors.accountNo.length > 0 && <span className='text-red-500'>{values.bankErrors.accountNo}</span>}
            </label>
            <div className="w-full flex flex-row justify-between">
                <button 
                    onClick={Previous}
                    className="mt-3 border border-black p-3 w-max rounded-md"
                >Go Back</button>
                <button 
                    disabled={!values.bankErrors.valid}
                    onClick={Next}
                    className="mt-3 bg-[#458ECA] text-white p-3 w-max rounded-md disabled:bg-gray-400"
                >Continue</button>
            </div>
        </div>
    )
}

export default BankDetails