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
   


   
    
    const link = document.getElementsByClassName("link");
    let currentValue = 1;
    const pageSize = 2;
    let pageNumber = 1;
    const recordList = document.getElementById("recordTable");
   

    async function fetchRecordData(pageNumber) {
       
        try {


            const url = `http://localhost:8081/record/getRecords?page=${pageNumber}&size=${pageSize}`;
             const response = await fetch(url
                //, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type' : 'application/json'
            //     },
            //     body: JSON.stringify(filterData)
            // }
            
            );
            
            if (!response.ok) {
                throw new Error('not ok');
            }
            
            const data = await response.json();
            console.log(data);

            recordList.innerHTML = "";

            
           
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
    

    document.getElementById("prev").addEventListener("click", function() {
        if (pageNumber > 1) {
            pageNumber--;
            document.getElementById("pageNumber").value = pageNumber;
            fetchRecordData(pageNumber);
        }
    });
    
    document.getElementById("next").addEventListener("click", function() {
        pageNumber++;
        document.getElementById("pageNumber").value = pageNumber;
        fetchRecordData(pageNumber);
    });
    
    document.getElementById("pageNumber").addEventListener("change", function() {
        pageNumber = parseInt(this.value);
        fetchRecordData(pageNumber);
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        fetchRecordData(pageNumber);
    });
