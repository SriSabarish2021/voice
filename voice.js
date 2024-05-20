
const speechrecongnition=new webkitSpeechRecognition() || new SpeechRecognition();
speechrecongnition.interimResults = true
speechrecongnition.lang = 'en-US'

let para=document.createElement("p")
const contain=document.querySelector(".container")
contain.appendChild(para)

speechrecongnition.addEventListener('result',element =>{
const map=Array.from(element.results).map(resul=>resul[0]).map(resul=>resul.transcript).join("")
para.textContent=map
if(element.results[0].isFinal){
    para=document.createElement("p")
    contain.appendChild(para)
}
})

speechrecongnition.addEventListener('end',speechrecongnition.start)
speechrecongnition.start() 
