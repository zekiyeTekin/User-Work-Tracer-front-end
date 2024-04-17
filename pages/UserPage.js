function userList(){
    const btnCek=document.querySelector("#btn-user-list");
    const userList=document.querySelector("#userTable");

    btnCek.removeEventListener("click", fetchUserData);
    btnCek.addEventListener("click", fetchUserData);

    function fetchUserData(){

        fetch('http://localhost:8081/user/getUsers') 
            .then(res => res.json()) 
            .then(data => {
                
                const users = data;
                console.log(users);
                users.forEach(user => {
                    const assignments = user.assignmentDtoList;
                    assignments.forEach(assignment => {
                    const project = assignment.project;
                    const row = userList.insertRow();
                    row.innerHTML = `
                    <td>${user.name} ${user.surname}</td>
                    <td>${project.name}</td>
                    <td>${project.supervisor.name} ${project.supervisor.surname}</td>
                    `;
                    
                });                
            });
            btnCek.removeEventListener("click", fetchUserData);
    });
}
};

userList();