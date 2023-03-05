let posts= []
function rendposts(){
    let content="";
    for(let p of posts){
        content+=`
        <h3>${p.title}</h3>
        <p>${p.body}</p>
        <hr/>
        `
    }
    document.getElementById("block").innerHTML=content;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts",{method:"GET"})
.then(response=> response.json())
.then((data)=>{
    posts=data.slice(0,10);
    rendposts();
});    



let bt=document.getElementById("new-blog");
bt.addEventListener("submit",function(e){
        e.preventDefault();
        let t=document.getElementById("title").value;
        let b=document.getElementById("body").value;
        const dat={
            title:t,body:b
        }
        fetch("https://apis.scrimba.com/jsonplaceholder/posts",{
            method:"POST",
            body:JSON.stringify(dat),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(p=>{
            posts.unshift(p);
            rendposts();
            
        })
        document.getElementById("new-blog").reset();    
}) 

