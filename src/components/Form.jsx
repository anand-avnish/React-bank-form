// import React, { Component } from 'react';
// import PersonalDetails from './PersonalDetails';
// import BankDetails from './BankDetails';
// import AddressDetails from './AddressDetails';
// import Success from './Success';
// import Stepper from './Stepper';

// export default class Form extends Component {

//     constructor(){
//         super();
//         this.state={
//             step:1,
//             firstName:'',
//             lastName:'',
//             email:'',
//             mobile:'',
//             country:'',
//             currency:'',
//             ifscCode:'',
//             accountNo:'',
//             city:'',
//             zipCode:'',
//             address:'',
//             errorEmail:'',
//             errorMobile:'',
//             errorIfscCode:'',
//             errorAccountNo:'',
//         }
//         this.prevStep = this.prevStep.bind(this)
//         this.nextStep = this.nextStep.bind(this)
//         this.restart = this.restart.bind(this)
//     }

//     prevStep(){
//         const { step } = this.state;
//         this.setState({ step: step - 1 });
//     }

//     restart(){
//         // const { step } = this.state;
//         this.setState({ 
//             step:1,
//             firstName:'',
//             lastName:'',
//             email:'',
//             mobile:'',
//             country:'',
//             currency:'',
//             ifscCode:'',
//             accountNo:'',
//             city:'',
//             zipCode:'',
//             address:'',
//             errorEmail:'',
//             errorMobile:'',
//             errorIfscCode:'',
//             errorAccountNo:'',
//         });
//     }

//     nextStep(){
//         const step = this.state.step;
//         this.setState({ step: step + 1 });
//     }

//     handleChange = input => e => {
//         this.setState({ [input]: e.target.value });
//     }

//     emailValidation(){
//         const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
//         if(!this.state.email || regex.test(this.state.email) === false){
//             this.setState({
//                 errorEmail: "Email not valid"
//             });
//             return false;
//         }else{
//             this.setState({
//                 errorEmail: ""
//             });
//             return true;
//         }
//     }

//     mobileValidation(){
//         const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
//         if(!this.state.mobile || regex.test(this.state.mobile) === false){
//             this.setState({
//                 errorMobile: "Phone number not valid"
//             });
//             return false;
//         }else{
//             this.setState({
//                 errorMobile: ""
//             });
//             return true;
//         }
//     }

//     ifscValidation(){
//         const regex = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/i;
//         if(!this.state.ifscCode || regex.test(this.state.ifscCode) === false){
//             this.setState({
//                 errorIfscCode: "IFSC Code not valid"
//             });
//             return false;
//         }else{
//             this.setState({
//                 errorIfscCode: ""
//             });
//             return true;
//         }
//     }

//     accountValidation(){
//         const regex = /^[0-9]{9,18}$/i;
//         if(!this.state.accountNo || regex.test(this.state.accountNo) === false){
//             this.setState({
//                 errorAccountNo: "Account number should be between 9-18 digits"
//             });
//             return false;
//         }else{
//             this.setState({
//                 errorAccountNo: ""
//             });
//             return true;
//         }
//     }

//     render() {
//         const { step } = this.state;
//         const { email, firstName, lastName, mobile, country, currency, ifscCode, accountNo, city, zipCode, address, errorEmail, errorMobile, errorIfscCode, errorAccountNo } = this.state;
//         const values = { email, firstName, lastName, mobile, country, currency, ifscCode, accountNo, city, zipCode, address, errorEmail, errorMobile, errorIfscCode, errorAccountNo }
//         switch (step) {
//             case 1: 
//                 return (
//                     <React.Fragment>
//                         <Stepper step = {step} />
//                         <PersonalDetails 
//                             nextStep = {this.nextStep}
//                             handleChange = {this.handleChange}
//                             values = {values}
//                             emailValidation = {this.emailValidation}
//                             mobileValidation = {this.mobileValidation}
//                         />
//                     </React.Fragment>
//                 )
//             case 2: 
//                 return (
//                     <React.Fragment>
//                         <Stepper step = {step} />
//                         <BankDetails 
//                             prevStep = {this.prevStep}
//                             nextStep = {this.nextStep}
//                             handleChange = {this.handleChange}
//                             values = {values}
//                             ifscValidation = {this.ifscValidation}
//                             accountValidation = {this.accountValidation}
//                         />
//                     </React.Fragment>
//                 )
//             case 3: 
//                 return (
//                     <React.Fragment>
//                         <Stepper step = {step} />
//                         <AddressDetails 
//                             prevStep = {this.prevStep}
//                             nextStep = {this.nextStep}
//                             handleChange = {this.handleChange}
//                             values = {values}
//                         />
//                     </React.Fragment>
//                 )
//             case 4:
//                 return (
//                     <React.Fragment>
//                         <Stepper step = {step} />
//                         <Success 
//                             restart = {this.restart}
//                             values = {values}
//                         />
//                     </React.Fragment>
//                 )

//             default: 
//         }
//     }
// }


import React,{useState, useEffect} from 'react';
import PersonalDetails from './PersonalDetails';
import BankDetails from './BankDetails';
import AddressDetails from './AddressDetails';
import Success from './Success';
import Stepper from './Stepper';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validMobileRegex = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
);

const validIfscRegex = RegExp(
    /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/i
);

const validAccountRegex = RegExp(
    /^[0-9]{9,18}$/i
);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

const camel2title = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase())
  .trim();

function Form() {
    const [state, setState] = useState({
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        mobile:'',
        country:'',
        currency:'',
        ifscCode:'',
        accountNo:'',
        city:'',
        zipCode:'',
        address:'',
        errorEmail:'',
        errorMobile:'',
        errorIfscCode:'',
        errorAccountNo:'',
        personalErrors:{
            firstName:'',
            lastName:'',
            email:'',
            mobile:'',
            valid:false
        },
        bankErrors:{
            country:'',
            ifscCode:'',
            accountNo:'',
            valid:false
        },
        addressErrors:{
            city:'',
            address:'',
            zipCode:'',
            valid:false
        }
    })

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

    function prevStep(){
        const { step } = state;
        setState({ ...state, step: step - 1 });
    }

    function restart(){
        setState({ 
            step:1,
            firstName:'',
            lastName:'',
            email:'',
            mobile:'',
            country:'',
            currency:'',
            ifscCode:'',
            accountNo:'',
            city:'',
            zipCode:'',
            address:'',
            errorEmail:'',
            errorMobile:'',
            errorIfscCode:'',
            errorAccountNo:'',
            personalErrors:{
                firstName:'',
                lastName:'',
                email:'',
                mobile:'',
                valid:false
            },
            bankErrors:{
                country:'',
                ifscCode:'',
                accountNo:'',
                valid:false
            },
            addressErrors:{
                city:'',
                address:'',
                zipCode:'',
                valid:false
            }
        });
    }

    function nextStep(){
        const step = state.step;
        setState({ ...state, step: step + 1 });
    }

    const handleChange = (input,category) => e => {
        category+="Errors"
        let errors = state[category];
        // console.log(errors);
        let value = e.target.value;
        switch (input) {
            case 'email': 
                errors.email = 
                    validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
                break;
            case 'mobile': 
                errors.mobile = 
                    validMobileRegex.test(value)
                    ? ''
                    : 'Phone number is not valid!';
                break;
            case 'ifscCode': 
                errors.ifscCode = 
                    validIfscRegex.test(value)
                    ? ''
                    : 'IFSC code is not valid!';
                break;
            case 'accountNo': 
                errors.accountNo = 
                    validAccountRegex.test(value)
                    ? ''
                    : 'Account number is not valid!';
                break;
            case 'country':
                let obj = data.country.find(o => o.countryName === value);
                state.currency = obj.currencyCode
                break;
            default:
                errors[input] = 
                    value.length < 2
                    ? camel2title(input)+' must be at least 2 characters long!'
                    : '';
                break;
        }
        handleSubmit(category)
        setState({ ...state, [input]: value, [category]:errors });
        // console.log(state);
    }

    const handleSubmit = (category) => {
        // console.log(category);
        // event.preventDefault();
        // category+="Errors"
        if(validateForm(state[category])) {
            // console.info('Valid Form')
            state[category]['valid']=true;
        }else{
            // console.error('Invalid Form')
            state[category]['valid']=false;
        }
    }

    const { step } = state;
    const { email, firstName, lastName, mobile, country, currency, ifscCode, accountNo, city, zipCode, address, errorEmail, errorMobile, errorIfscCode, errorAccountNo, personalErrors, bankErrors, addressErrors } = state;
    const values = { email, firstName, lastName, mobile, country, currency, ifscCode, accountNo, city, zipCode, address, errorEmail, errorMobile, errorIfscCode, errorAccountNo, personalErrors, bankErrors, addressErrors  }
    switch (step) {
        case 1: 
            return (
                <React.Fragment>
                    <Stepper step = {step} />
                    <PersonalDetails 
                        nextStep = {nextStep}
                        handleChange = {handleChange}
                        values = {values}
                        handleSubmit = {handleSubmit}
                    />
                </React.Fragment>
            )
        case 2: 
            return (
                <React.Fragment>
                    <Stepper step = {step} />
                    <BankDetails 
                        prevStep = {prevStep}
                        nextStep = {nextStep}
                        handleChange = {handleChange}
                        values = {values}
                        handleSubmit = {handleSubmit}
                    />
                </React.Fragment>
            )
        case 3: 
            return (
                <React.Fragment>
                    <Stepper step = {step} />
                    <AddressDetails 
                        prevStep = {prevStep}
                        nextStep = {nextStep}
                        handleChange = {handleChange}
                        values = {values}
                        handleSubmit = {handleSubmit}
                    />
                </React.Fragment>
            )
        case 4:
            return (
                <React.Fragment>
                    <Stepper step = {step} />
                    <Success 
                        restart = {restart}
                        values = {values}
                    />
                </React.Fragment>
            )

        default: 
    }
}

export default Form