import React from 'react'
import { useParams } from 'react-router-dom'

export default function EditForm() {
    const {id} = useParams()
  return (
    <form onSubmit={ onSubmit} className='mt-3 mb-3'>
        <input className='form-control mb-2' value={values.titre} onChange={onChange} name='titre' type="text" placeholder='Titre su post' />
        <input className='form-control mb-2' value={values.description} onChange={onChange} name='description' type="text" placeholder='Description du post'/>
        <button type="submit" onClick={onClickAdd} className='btn btn-primary'>Ajouter</button>
        <button className="btn btn-danger" onClick={onClose} >Fermer</button>
    </form>
  )
}
