const height=document.querySelector("#height")
const weight=document.querySelector("#weight")
document.querySelector('#calculate').addEventListener('click',calc)

const bmi = document.querySelector("#hey")


function calc() {
    console.log("hello")
    heightValue =height.value
    weightValue = weight.value
    if (heightValue=='' || weightValue=='') {
        alert("Please! Enter both value")
    }else{
        clearInput();
         bmiValue= ((weightValue/heightValue/heightValue)*10000).toFixed(2)
        if (bmiValue<18.5) {
            return bmi.innerText='Your BMI is '+bmiValue +' , and you are Under weight.'
        }
        else if(bmiValue>18.5 || bmiValue<24.9){
            return bmi.innerText='Your BMI is '+bmiValue +' , and you are preety much normal.'

        }
        else if(bmiValue>25 || bmiValue<29.9){
            return bmi.innerText='Your BMI is '+bmiValue +' , and you are Over Weight.'

        }
        else if(bmiValue>30 || bmiValue<39.9){
            return bmi.innerText='Your BMI is '+bmiValue +' , and you are preety much Fatty.'

        }
        else if(bmiValue>40){
            return bmi.innerText='Your BMI is '+bmiValue +' ,Are you big show??'

        }
        
    }
}
function clearInput() {
    height.value=' '
    weight.value=' '
    
}
