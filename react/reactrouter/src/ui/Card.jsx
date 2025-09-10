
const Card = ({mData}) => {

   const {Poster,Year,Title,Actors,Awards} = mData

    return (

        <>

 <div class="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border">
  <img 
    class="w-full h-64 object-cover" 
    src={Poster}
  />
  <div class="p-4">
    <h2 class="text-xl font-bold text-gray-800 mb-2">{Title}</h2>
    <p class="text-sm text-gray-600 mb-2">
      <strong>Year:</strong> {Year}
    </p>
    <p class="text-sm text-gray-600 mb-2">
      <strong>Actors:</strong> {Actors}
    </p>
    <p class="text-sm text-gray-600 mb-4">
      <strong>Awards:</strong> {Awards}
    </p>
    <button class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
      View Details
    </button>
  </div>
</div>

        
        </>

    )

}


export default Card ;