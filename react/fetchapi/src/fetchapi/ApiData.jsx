const ApiData =  () => {


    let api = "https://jsonplaceholder.typicode.com/users";

    const apiData = async() => {
     
       try{

        let res = await fetch(api);

        if(!res.ok){
            
            throw new Error (`The message : ${res.status} `)

        }

        let resData = await res.json();
        console.log(resData)
        
        let table = document.getElementById("custom-table");
        let tbody = document.getElementById("tbody");

        resData.map((currData) => {
        
         let row = document.createElement('tr');
          
         row.innerHTML = 
         ` 
            <td> ${currData.id} </td>
            <td> ${currData.name} </td>
            <td> ${currData.username} </td>
             <td> ${currData.email} </td>

         `;
         
           tbody.appendChild(row);

        })


       }
       catch(error){
        console.log(error.message);

       }

    }

apiData()

    return (

        <>

            <table id="custom-table">

                <thead>
                    <tr>

                        <th> id </th>
                    <th> name </th>
                    <th> username </th>
                    <th> email </th>

                    </tr>
                </thead>

                <tbody id="tbody">


                </tbody>
                

            </table>
        
        </>

    )


}


export default ApiData;