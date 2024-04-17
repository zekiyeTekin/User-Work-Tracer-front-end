 function listUser(){
     const btnCek=document.querySelector("#btn-list-home");
     const tbListe=document.querySelector("#fakeDataTable");
     btnCek.addEventListener("click",function(){
         fetch('https://www.melivecode.com/api/users') 
             .then(cevap => cevap.json()) 
             .then(veri => {
                 //console.log(veri);
                 veri.forEach(element => {
                     console.log(element);
                     tbListe.innerHTML += `<tr>
                 <td id="" >${element.id}  </td>
                 <td id="" >${element.fname}  </td>
                 <td id="" >${element.lname}  </td>
                 <td id="" >${element.username} </td>
                 <td id="" >${element.avatar} </td>
                 
                 </td>
             </tr>`
             //<td id="" > <a href="" class="btn" onclick="updateUser(${element.id})"> Güncelle </a>
                    
                 });
             });
     });
 }
 listUser();


async function createUser(){
    const tbList=document.querySelector("#userTable");
    const data={
        fname:document.getElementById("fname").value || "Değer yoktur",
        lname:document.getElementById("lname").value || "Değer yoktur",
        username:document.getElementById("username").value || "Değer yoktur",
        email:document.getElementById("email").value || "Değer yoktur",
        password:document.getElementById("password").value || "Değer yoktur",
        avatar:document.getElementById("avatar").value || "Değer yoktur",
    };

    const response = await fetch("https://www.melivecode.com/api/users/create",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
            console.log(responseData);
            
            tbList.innerHTML += `
            <tr>
            <td id="" >${data.fname} </td>
            <td id="" >${data.lname}  </td>
            <td id="" >${data.username} </td>
            <td id="" >${data.email} </td>
            <td id="" >${data.password} </td>
            <td id="" >${data.avatar} </td>
            <td id="" > <a href="" class="btn" onclick="updateUser(${data.id})"> Güncelle </a>
            </td>
        </tr> ` ;
    };







    
       
    
