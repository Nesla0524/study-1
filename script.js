 const form = document.getElementById('formvalidate');
 form.addEventListener('submit',function(event){
     if(!validate()){
     event.preventDefault();
     }
 })
 
 
function validate(callback){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
   
    if(username.value.trim()=="admin" && password.value.trim()=="12345"){
        callback();
       
    }
    else{
        alert("invalid");
        return false;
}
}
function displaylist(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange=function(){
        try{
            if(httpRequest.readyState===XMLHttpRequest.DONE){
              if(httpRequest.status === 200)  {
                //   console.log(httpRequest.responseText);
                  display(httpRequest.responseText)
              }
              else{;
                  alert("error")
              }
            }
        }
        catch(e){
            alert(e.description);

        }
    };
    try{
      httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos',true);
      httpRequest.send();
    }
    catch(e){
        alert (e.description);
    }
}