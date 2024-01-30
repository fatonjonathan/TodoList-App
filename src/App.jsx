import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './components/Card'
import NavBar from './components/navBar'


let POSTS = [
  {id: 1, titre: "Special title treatment", description: "With supporting text below as a natural lead-in to additional content.", liker: false},
  {id: 2, titre: "Dynamic Web Development", description: "Crafting interactive websites with seamless user experiences.", liker: true},
  {id: 3, titre: "Culinary Delights", description: "Exploring the art of flavors and creating delectable dishes.", liker: false},
  {id: 4, titre: "Hoops Enthusiast", description: "Dribbling through the world of basketball with passion and skill.", liker: false},
  {id: 5, titre: "Gaming Adventures", description: "Embarking on virtual journeys through the realm of video games.", liker: false},
  {id: 6, titre: "Knowledge Quest", description: "Continuously expanding general knowledge horizons with curiosity.", liker: false},
  {id: 7, titre: "SQL Mastery", description: "Crafting efficient and powerful database queries for optimal performance.", liker: false},
  {id: 8, titre: "Laravel Wizardry", description: "Weaving magic with Laravel to build robust and scalable back-end systems.", liker: false},
]

function App() {
  
  const [updatePostsList, setUpdatePostsList] = useState(null)
  console.log(updatePostsList);

  const handleUpdate = (newPostList) => {   
     setUpdatePostsList(newPostList)
     return
  }

  return ( 
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-md-6 offset-md-3">
          <NavBar postsList={updatePostsList !== null ? updatePostsList : POSTS} onUpdate={handleUpdate}/>     
          <Card posts={updatePostsList !== null ? updatePostsList : POSTS} />       
        </div>
      </div>
    </div>
    )
}



export default App
