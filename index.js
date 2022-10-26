const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const countValue = document.getElementById('count-value');

let count=0;

incrementBtn.addEventListener('click',()=>{
    count++;
    console.log(count);
    countValue.innerText = count;
})
decrementBtn.addEventListener('click',()=>{
    count--;
    console.log(count);
    if(count>=0){
        countValue.innerText=count;
    }
    else
        countValue.innerText='0';
})