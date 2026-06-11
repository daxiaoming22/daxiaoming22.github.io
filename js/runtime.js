document.addEventListener("DOMContentLoaded",function(){
  var start=new Date("2025-10-22");
  var days=Math.floor((new Date()-start)/864e5);
  var el=document.getElementById("runtime");
  if(el)el.textContent=days;
})
