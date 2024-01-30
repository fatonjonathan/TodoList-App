import React from 'react'
import { Link } from 'react-router-dom'

export default function Erreur404() {
  return (
    <div className='container my-5'>
      <div className="row text-center">
        <h2>
          Erreur 404
        </h2>
        <p>
          la page demandé existe peut être dans une autre dimension
        </p>
        <Link to="/" className='btn btn-primary'>Retour à l'accueil</Link>
      </div>
    </div>
  )
}
