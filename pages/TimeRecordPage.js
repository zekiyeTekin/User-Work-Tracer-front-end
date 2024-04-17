    // BURADA  TÜM VERİLERİ NORMAL SAYFA YÜKLENDİĞİNDE LİSTELİYORUM.
    // //const btnCek = document.querySelector("#btn-record-search");
    // const recordList = document.querySelector("#recordTable");
    // document.addEventListener("DOMContentLoaded", fetchRecordData);
    //     function fetchRecordData(){

    //         fetch('http://localhost:8081/record/getAll')
    //         .then(res => res.json())
    //         .then(data => {

    //             // console.log("Project Name\tUser Name\tSupervisor\tDate\tTime");
    //             console.log(data);
    //             data.forEach(item => {
    //                 const projectName = item.assignment.project.name;
    //                 const userName = `${item.assignment.user.name} ${item.assignment.user.surname}`;
    //                 const supervisorName = `${item.assignment.project.supervisor.name} ${item.assignment.project.supervisor.surname}`;
    //                 const date = item.date;
    //                 const time = item.time;
                    
    //                 //console.log(`${projectName}\t${userName}\t${supervisorName}\t${date}\t${time}`);
    //                 const row = recordList.insertRow();
    //                           row.innerHTML = `
    //                           <td>${projectName}</td>
    //                           <td>${userName}</td>
    //                           <td>${supervisorName}</td>
    //                           <td>${date}</td>
    //                           <td>${time}</td>
    //                   `;
    //             });
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    //       }
    

        





    // BURADA  TÜM VERİLERİ PAGİNATİON'a GÖRE UYARLAYIP SAYFA ÜKLENDİĞİNDE LİSTELİYORUM.
   
   
    
    // const link = document.getElementsByClassName("link");
    // let currentValue = 1;
    const pageSize = 2;
    const recordList = document.getElementById("recordTable");

    async function fetchRecordData(pageNumber) {
       
        try {
            const url = `http://localhost:8081/record/getRecords?page=${pageNumber}&size=${pageSize}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('not ok');
            }
            
            const data = await response.json();
            console.log(data);

            
           
            for (let i = 0; i < data.content.length; i++) {
                const element = data.content[i];

                console.log(element);
                console.log(data.content[i].date);

                const row = recordList.insertRow();
                row.innerHTML =
                `
                <td>${element.assignment.project.name}</td>
                <td>${element.assignment.user.name} ${element.assignment.user.surname}</td>
                <td>${element.assignment.project.supervisor.name} ${element.assignment.project.supervisor.surname}</td>
                <td>${element.date}</td>
                <td>${element.time}</td>
                
                `;
            }
            console.log(data.content[0].supervisor.name);
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    recordList.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const pageNumber = parseInt(event.target.dataset.page);
            fetchRecordData(pageNumber);
        }
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        fetchRecordData(currentPage);
    });

//     // Butonlara tıklanma olayını dinle
//     const pagination = document.querySelector(".pagination");
//     pagination.addEventListener("click", function(event) {
//     if (event.target.tagName === "LI") {
//         const pageNumber = parseInt(event.target.dataset.page);
//         currentPage = pageNumber; 
//         fetchRecordData(currentPage);
//     }
// });


    
    

         const link = document.getElementsByClassName("link");
         let currentValue = 1;
        

        function activeLink(event){
         
                for (l of link) {
                    l.classList.remove("active");
                } 
            event.target.classList.add("active");
            currentValue = event.target.value;
        }
    
        function btnPrev(){
            if(currentValue > 1){
                currentValue--;
                for(l of link){
                    l.classList.remove("active");
                }
                link[currentValue-1].classList.add("active");
            }
        }

        function btnNext(){
            if (currentValue < 6) {
                for (let l of link) {
                    l.classList.remove("active");
                }
                currentValue++;
                link[currentValue-1].classList.add("active");
            }
        }
        
    

