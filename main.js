const accordionContent = [
    {
      que: "Who was the first person in space?",
      ans: "Yuri Gagarin, a Soviet cosmonaut, was the first person to travel into space on April 12, 1961.",
      open: false
    },
    {
      que: "Which planet is known as the Red Planet?",
      ans: "Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface.",
      open: false
    },
    {
      que: "What is the largest planet in our solar system?",
      ans: "Jupiter is the largest planet in our solar system, with a diameter of about 139,822 km.",
      open: false
    },
    {
      que: "What is the speed of light?",
      ans: "The speed of light is approximately 299,792 kilometers per second (186,282 miles per second).",
      open: false
    },
    {
      que: "Who invented the telephone?",
      ans: "Alexander Graham Bell is credited with inventing the telephone in 1876.",
      open: false
    },
  
  ];
  

const accList=document.createElement('div')
accList.setAttribute('class','acc-list')



accordionContent.map((elem,index)=>{
    const faqDiv=document.createElement('div')
    faqDiv.setAttribute('class','acc-div')
    const queDiv=document.createElement('div')
    queDiv.setAttribute('class','quesiton')
    queDiv.innerText=elem.que
    const statusIcon=document.createElement('div')
    statusIcon.innerText=elem.open?'-':'+'
    statusIcon.setAttribute('class','status-icon')
    statusIcon.addEventListener('click',()=>{
        elem.open=!elem.open
        statusIcon.innerText=elem.open?'-':'+'
        ansDiv.style.display=elem.open?'block':'none'

        
    })
    
    queDiv.appendChild(statusIcon)

   
    const ansDiv=document.createElement('div')
    ansDiv.setAttribute('class','answer')
    ansDiv.innerText=elem.ans
    ansDiv.style.display=elem.open?'block':'none'
    faqDiv.appendChild(queDiv)
    faqDiv.appendChild(ansDiv)
    accList.appendChild(faqDiv)
   

})
const main=document.querySelector('.main')
main.appendChild(accList)


console.log(accList)

