
const speechrecongnition=new webkitSpeechRecognition() || new SpeechRecognition();
speechrecongnition.continuous = true;
speechrecongnition.interimResults = true
speechrecongnition.lang = 'en-US'

let para=document.createElement("p")
const contain=document.querySelector(".container")
contain.appendChild(para)

speechrecongnition.addEventListener('result',element =>{
console.log(element)
})
speechrecongnition.start() 
