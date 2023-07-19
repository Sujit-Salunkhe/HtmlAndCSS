alert('sujit is great')
// let i=0;
// while  (i<11) {
//     console.log("sujit is good boy")
//     console.log("He is great boy")
//     i+=1;
    
//     let para = document.getElementById('para'); 
//     para.addEventListener('mouseover',function run(){
//     alert("mouse  inside")
// });
document.addEventListener('DOMContentLoaded', function() {
    let para = document.getElementById('para');
    para.addEventListener('mouseover', function run() {
      alert("Mouse inside");
    });
  });

function hide(){
    // let btn=document.getElementById('btn');
    let para=document.getElementById('para')
    if(para.style.display != 'none'){
        para.style.display='none';
    }
    else{
        para.style.display ='block';
    }
}