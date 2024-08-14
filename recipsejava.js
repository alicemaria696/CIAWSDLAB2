var food=document.getElementById("food")
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
       if(xhr.readyState == 4 && xhr.status == 200){
        food.innerHTML = xhr.responseText;
       }
    }
    xhr.open('GET',"https://CynthiaEstherMetilda.github.io/Xhrdeom2024/animal.json",true);
    xhr.send();