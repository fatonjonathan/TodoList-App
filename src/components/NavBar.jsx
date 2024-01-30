import React, { useState } from 'react'
import AddPostForm from './AddPostForm'
import { Link } from 'react-router-dom'

export default function NavBar({onUpdate, postsList}) {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }

    const [valueInputs, setValueInputs] = useState({
        titre: '',
        description: ''
    })

    let newPost = []
    const [list, setList] = useState(postsList)
    const handleClickAdd = () => {
    newPost = list.push({
            //le code écrit pour l'id me permet de faire une incrémentation pour ajouter le nouvelle objet à mon tableau
            //slice(-1) me permet de récupérer le dernier élément du tableau.
            id: postsList.slice(-1)[0].id + 1,
            titre: valueInputs.titre,
            description: valueInputs.description,
            liker: false
        })
        onUpdate(list)
        setValueInputs({
            titre: '',
            description: ''
        })
    }

    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setValueInputs((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const style = {
        display: "flex", 
        gap:"10px"
    }
  return (
    <>
        <div style={style}>
            <button className='btn btn-success py-2' onClick={handleClick}>
                <strong>
                    Add new post
                </strong>
            </button>
            
            <Link className="btn btn-dark py-2" to={"/apropos"} >
                <strong>
                    Apropos
                </strong>
            </Link>
        </div>
        <div>
            {show && <AddPostForm 
                values={valueInputs} 
                onChange={handleChangeInput} 
                onSubmit={handleSubmit} 
                onClickAdd={handleClickAdd} 
                onClose={handleClick}
            />}
        </div>
    </>
  )
}
