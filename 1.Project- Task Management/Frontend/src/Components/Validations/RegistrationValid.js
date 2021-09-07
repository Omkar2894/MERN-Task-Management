
const RegistrationValid = (details) => {

    let errors={};
    // let mobileLength = details.mobile.length;
    // console.log(mobileLength);

    if(!details.name.trim( )){
        errors.name="*Name is Required";
    }
    if(!details.password.trim( )){
        errors.password="*Password is Required"
    }
    else if(details.password.length < 5){
        errors.password="*Password Must be More than 5 Characters"
    }
    else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[@_$#%])(?=.*[A-Z]).{4,10}$/gm.test(details.password)){
         errors.password="*Required atleast one [A-Z] [a-z] [0-9] [@|$|%|_|#]."
     }
    if(!details.email.trim( )){
        errors.email="*Email is Required."
    }
    else if(!/[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/.test(details.email)){
        errors.email="*Email is Invalid."
    }
    if(!details.mobile.trim( )){
        errors.mobile="*Mobile is Required."
    }
    // else if(details.mobile.length < 10  ){
    //     console.log(details.mobile.length);
    //     errors.mobile="*Invalid Mobile Numberr"
    // }
    // else if(!mobileLength == 9  ){
    //     errors.mobile="*Invalid Mobile Numberr"
    // }
    else if(!/(?<!\d)\d{9}(?!\d)/gm.test(details.mobile)){
        errors.mobile="*Invalid Mobile Number."
    }
    return errors;
}

export default RegistrationValid
