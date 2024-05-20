window.SpeechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;

const recongnition=new SpeechRecognition()
recongnition.interimResults=true;

let para=document.createElement("p")
const contain=document.querySelector(".container")
contain.appendChild(para)

recongnition.addEventListener('result',element =>{
console.log(element)
})
recongnition.start() 