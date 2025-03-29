const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdown=document.querySelectorAll('.dropdown select');
let btn=document.querySelector("form button");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");
let msg=document.querySelector(".msg");
for(let select of dropdown){
    for(codes in countryList){
        let newOption = document.createElement('option');
        newOption.innerText=codes;
        newOption.value=codes;
        if(select.name==="from"&&codes==="USD"){
            newOption.selected=true;
        }
        else if(select.name==="to"&&codes==="INR"){
            newOption.selected=true;
        }
        select.append(newOption);
    }
    select.addEventListener('change',(evt)=>{
        updateFlag(evt.target)
    });
}
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}
const convert=async()=>{
    let amount=document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal===""||amtVal<1)
    {
        amtVal=1;
        amount.value="1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]; 
    let finalAmount = amtVal * rate;
    console.log(`${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}
btn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    convert();
});
window.addEventListener("load", () => {
    convert();
  });
  