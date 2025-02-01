const messages= [
    "Initializing Hacking",
    "Reading your files",
    "Password files detected",
    "Sending all password and personal files to server",
    "Cleaning up"
]
const dots = ["",".","..","..."]

function sleep(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },ms)
    })
}

const speed = 40;
async function displayMessages() {
    const container = document.getElementById("container")
    const progress_bar = document.getElementById("progress_bar")
    const progress_container = document.getElementById("progress_container")

    for(let message of messages){
        let dotidx = 0;
        let messageElement = document.createElement("div")
        messageElement.classList.add("message")
        container.appendChild(messageElement)

        for(let i=0;i<message.length;i++){
            messageElement.textContent+=message[i];
            await sleep(speed)
        }

        let startTime = Date.now();
        while(Date.now()-startTime<3600){
            messageElement.textContent = message + dots[dotidx]
            dotidx = (dotidx+1)%dots.length;
            await sleep(400)
        }
        if(message=="Sending all password and personal files to server"){
            progress_container.style.display = "block";
            for(let i=0;i<=100;i++){
                progress_bar.style.width = i+"%";
                await sleep(50)
            }
            await sleep(500)
            progress_container.style.display = "none";
        }
        messageElement.style.transform = "translateY(-30px)";

        await sleep(100)
    }
}

displayMessages()




