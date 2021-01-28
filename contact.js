


const isValidated = (fields, errors)=>{

    let isValidated = true;

    if(fields[0].value=="" || fields[0].value == null)
    {
        errors[0].innerText = 'Sorry, you must enter a first name';
        isValidated = false;
    }else{
        if( !isNaN(fields[0].value))
       {
           
            isValidated=false;
            errors[0].innerText = 'Sorry, your first name cannot contain a number';
       }
       else
       {
        errors[0].innerText = "";
       }
    }
    
    if(fields[1].value=="" || fields[1].value == null)
    {
        errors[1].innerText = 'Sorry, you must enter a last name';
        isValidated = false;
    }else{
        if( !isNaN(fields[1].value))
       {
           
            isValidated=false;
            errors[1].innerText = 'Sorry, your last name cannot contain a number';
       }
       else
       {
        errors[1].innerText = "";
       }
    }
    
    if(fields[2].value=="" || fields[2].value == null)
    {
        errors[2].innerText = 'Sorry, you must enter an email address';
        isValidated = false;
    }
   
    if(fields[3].value=="" || fields[3].value == null)
    {
        errors[3].innerText = 'Sorry, you must enter an  address';
        isValidated = false;
    }

    if(fields[4].value=="" || fields[4].value == null)
    {
        errors[4].innerText = 'Sorry, you must enter a postal code';
        isValidated = false;
    }else{
        if(fields[4].value.length < 6)
       {
           
            isValidated=false;
            errors[4].innerText = 'Sorry, postal code must contain atleast 6 characters';
       }
       else
       {
        errors[4].innerText = "";
       }
    }

    return isValidated;
}



const RemoveHiddenInput = () =>{
    const orderProblem = document.querySelector(".order-problem");
    const problem = document.querySelector("#problem");
    
    problem.addEventListener("click", ()=> {
        
        orderProblem.classList.remove("hide");
    
    })
}


const submmision = ()=>{
    alert("Form Submitted");
}


const main = ()=>{

    const formControl = document.querySelectorAll(".form-control > input[type=text]");  
    const errorFields = document.querySelectorAll(".form-control > .error-fields")
    const submitBtn = document.querySelector(".submitBtn");

    RemoveHiddenInput();
    
    submitBtn.addEventListener("click", ()=>{

        const val = isValidated(formControl, errorFields);

        if(val==true){
            submmision();
        }
    });


}

main();