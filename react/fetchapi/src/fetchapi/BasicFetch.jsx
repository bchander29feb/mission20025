
const BasicFetch = () => {
 
let api  = "https://jsonplaceholder.typicode.com/ussers";

    
 const  apidata = async() => {
  
    try{
        let res = await fetch(api);
        if(!res.ok){
            throw new Error (`The error is : ${res.status}`)
        }
        let resData = await res.json();

        //html part 

        let tableBody = document.getElementById("user-table tbody");

        resData.map((currData) => {
         let row = document.createElement("tr");
             row.innerHTML = 

           ` <td>${currData.id}</td>
             <td>${currData.name}</td>
            <td>${currData.email}</td>
            <td>${currData.address.city}</td>`
            tableBody.appendChild(row)

        })

        
    }
    catch(error){

        console.log(error.message);

        let div = document.createElement("div");
            div.textContent = error.message;
            document.body.appendChild(div)

    }
    
 }

 apidata()





    return (

       <>
        
    <table id="user-table">

        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
        </tr>
        </thead>

        <tbody id="user-table tbody">
            
        </tbody>


    </table>
        
       </>
    )


}

export default BasicFetch;