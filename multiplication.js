        const num=document.querySelector("#num");
        const btn=document.querySelector("#gen");
        const show=document.querySelector(".show");
        const times=document.querySelector(".times");
          btn.addEventListener("click",() => {
            let t = times.value
            show.innerHTML = null;
            
            let n = num.value;
            try{
             if(n=="")
             throw "required field"
            }
             catch(error){
                 show.innerHTML=error;
                 }
             t= times.value;
            try{
              if(t=="")
              throw "required field"
              }
              catch(error){
                  show.innerHTML=error;
              }
             for( let i=1;i<=t;i++){
              let a = `${n} x ${i} = ${n*i} <br>`;
                show.innerHTML += a ;
                
              
             }
             
             
             
        
          });
        