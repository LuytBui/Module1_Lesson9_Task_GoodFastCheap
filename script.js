console.log('load');
let good = 0, fast = 0, cheap = 0;
let checkboxGood = document.getElementById('checkboxGood');
let checkboxFast = document.getElementById('checkboxFast');
let checkboxCheap = document.getElementById('checkboxCheap');


function toggleGood(){
    good = good ^ true;
    if (good && cheap) {
        fast = 0;
    }
    updateSliders();
}
function toggleFast(){
    fast = fast ^ true;
    if (fast && good) {
        cheap = 0;
    }
    updateSliders();
}
function toggleCheap(){
    cheap = cheap ^ true;
    if (cheap && fast) {
        good = 0;
    }
    updateSliders();
}

function updateSliders() {
    good ? checkboxGood.checked = true : checkboxGood.checked = false;
    fast ? checkboxFast.checked = true : checkboxFast.checked = false;
    cheap ? checkboxCheap.checked = true : checkboxCheap.checked = false;
}
function submit(){
    let message = 'You want my products to be: '+
        (!good? 'fast and cheap.':
            !fast ? 'good and cheap.' : 'good and fast');
    alert(message);
}