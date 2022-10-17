const input_1_el=document.querySelector('.first-input');
const input_2_el=document.querySelector('.second-input');
const submit_1_el=document.getElementsByClassName('first-submit');
const submit_2_el=document.getElementsByClassName('second-submit');
const form_el=document.querySelector('.first-form');
const form_2_el=document.querySelector('.second-form');
const validate_el=document.querySelector('.email-validate');
const validate_el_2=document.querySelector('.email-validate-2');



validate_el.style.display="none";
validate_el_2.style.display="none";

input_1_el.addEventListener("input", (e) => {
 const emailInputValue = e.currentTarget.value;
  if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true) {
      input_1_el.style.border = "thin solid red";
     validate_el.style.display="block"
  } else {
      input_1_el.style.border = "thin solid green";
      validate_el.style.display="none";
  }
})

input_2_el.addEventListener("input", (event) => {
   const emailInputValue = event.currentTarget.value;
    if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true) {
        input_2_el.style.border = "thin solid grey";
       validate_el_2.style.display="block";
  }else {
   input_2_el.style.border = "thin solid green"
   validate_el_2.style.display="none";
}
})


