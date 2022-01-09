function calc(obj){
    let first= document.getElementById("first").value;
     console.log(first);
     let second= document.getElementById("second").value;
     console.log(second);
    let operation=obj.id;
 //   console.log(obj.innerText);
 let ans="";
 if(operation==="add")
     ans=parseInt(first)+parseInt(second);
     else if(operation==="sub")
     ans=parseInt(first)-parseInt(second);
     else if(operation==="mul")
     ans=parseInt(first)*parseInt(second);
     else
     ans=parseInt(first)/parseInt(second);
     console.log(ans);
     document.getElementById("ans").innerText=ans;
 }