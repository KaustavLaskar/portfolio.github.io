var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname) 
{
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbycxj_d55_IDvkmzZBnb7O3G2kBFQYn8s-13qgJFNMi9N1IHufD5et_R724NFI-UaPE9Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML="Uploaded Successfully..!!!"
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
    .catch(error => console.error('Error!', error.message))
})