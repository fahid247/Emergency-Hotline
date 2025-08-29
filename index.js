function text(id){
    return document.getElementById(id).innerText;
}


const heartIcons = document.querySelectorAll('.heartIcon')
for (const heartIcon of heartIcons) {
    heartIcon.addEventListener('click',function(){
        const heartCount = parseInt(text('heartCount'));
        const newHeartCount = heartCount + 1;
        document.getElementById('heartCount').innerText = newHeartCount;
    })
}

const arr =[];

const callBtns = document.querySelectorAll('.callBtn');
for (const callBtn of callBtns) {
    callBtn.addEventListener('click',function(event){
        const parent =  event.target.closest(".card");
        const serviceName = parent.querySelector('.serviceName').innerText;
        const serviceNumber = parent.querySelector('.serviceNumber').innerText;
        const balance = parseInt(document.querySelector('.balance').innerText);
        if(balance<20){
            alert("You don't have enough coins to call");
            return;
        }
        const newBalance = balance - 20;
        document.querySelector('.balance').innerText = newBalance;
        alert("📞 calling "+serviceName+' , '+serviceNumber+"...");
        data = {
            service : serviceName,
            num : serviceNumber,
            date: new Date().toLocaleTimeString()
        }
        arr.push(data);
        const container = document.querySelector('.rightSideMain');
        container.innerText="";
        arr.forEach(element => {
            const div = document.createElement('div');
        div.innerHTML=`
        <div class="flex justify-between items-center mt-[5%]">
            <div class="div1">
              <p class="inter font-semibold max-[540px]:text-[0.3rem] text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1.05rem] 2xl:text-[1.25rem]">${element.service}</p>
              <p class="hind-madurai font-normal max-[540px]:text-[0.3rem] text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1.05rem] 2xl:text-[1.25rem] text-[rgba(92,92,92,1)]">${element.num}</p>
            </div>
            <div class="div2">
              <p class="hind-madurai font-normal max-[540px]:text-[0.3rem] text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1.05rem] 2xl:text-[1.25rem]">${element.date}</p>
            </div>
        </div>
        `
        container.appendChild(div);
        });
        
        

    });
}

document.getElementById('clear').addEventListener('click', function(){
    document.querySelector('.rightSideMain').innerText ="";
    arr.length = 0;
})


const copyBtns = document.querySelectorAll('.copyBtn');
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click',function(){
        const copyCount = parseInt(text('copyCount'));
        const newCopyCount = copyCount + 1 ;
        document.getElementById('copyCount').innerText = newCopyCount;
    })
}

for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click',function(event){
        const parent =  event.target.closest(".card");
        copyText = parent.querySelector('.serviceNumber').innerText;
        navigator.clipboard.writeText(copyText)
         .then(() => {
            alert('text copied to clipboard');
        }).catch((err) => {
            alert('failed to copy text'+err);
        });
    })

}