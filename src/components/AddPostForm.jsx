export default function AddPostForm({values, onSubmit, onChange, onClickAdd, onClose}) {
  const style = {
    display: "flex", 
    gap:"10px"
}
  return (
    <form onSubmit={ onSubmit} className='mt-3 mb-3'>
        <input className='form-control mb-2' value={values.titre} onChange={onChange} name='titre' type="text" placeholder='Titre su post' />
        <input className='form-control mb-2' value={values.description} onChange={onChange} name='description' type="text" placeholder='Description du post'/>
        <div style={style}>
          <button type="submit" onClick={onClickAdd} className='btn btn-primary'>Ajouter</button>
          <button className="btn btn-danger" onClick={onClose} >Fermer</button>
        </div>
    </form>
  )
}
