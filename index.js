const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

let wrapper=document.querySelector('.wrapper'),
    signUpLink=document.querySelector('.link .signup-link'),
     signInLink=document.querySelector('.link .signin-link');
 signUpLink.addEventListener('click',()=>{
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
 });

 signInLink.addEventListener('click',()=>{
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
 });
      