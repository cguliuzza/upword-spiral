
// import React from "react";

// const PostNewJournal = ({ renderNewPlant }) => {

//   const handleSave = (e) => {
//     e.preventDefault()
//     fetch("http://localhost:6001/plants", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name: e.target.name.value,
//         image: e.target.image.value,
//         price: e.target.price.value
//       })
//     })
//     .then(res => res.json())
//     .then(newPlant => renderNewPlant(newPlant))

//   }

//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <input type="text" name="name" placeholder="Plant name" />
//         <input type="text" name="image" placeholder="Image URL" />
//         <input type="number" name="price" step="0.01" placeholder="Price" />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default PostNewJournal;