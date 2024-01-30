import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function () {
  return (
    <div className='container my-2' >
        <div className="row">
            <h2>Page Apropos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nulla quaerat veritatis et officia? Optio commodi, eligendi expedita ad consectetur fuga? Animi repellendus voluptatum at soluta quo suscipit doloribus nulla.
                Perspiciatis minus alias, dolores tempore officiis molestias hic suscipit odio ut quos! Alias perspiciatis esse nostrum adipisci impedit tempora voluptas, totam architecto id aliquid fugit iste. Aperiam sequi ut ratione.
                Esse distinctio ipsa consectetur inventore iste, unde ullam reiciendis veritatis accusantium ducimus nostrum officiis eligendi in. Commodi non mollitia incidunt sint quo sit, voluptate quod eum, vel libero nulla praesentium!
                Accusamus natus distinctio odio atque odit? Sint ullam ab sit, quia dolor expedita nihil inventore officiis quibusdam voluptatum. Amet est, sunt non hic deleniti voluptate quas adipisci incidunt expedita. Itaque.
            </p>
            <div style={{ display: 'flex', gap: '10px', textDecoration: 'none' }}>
                <Link to={"/apropos/contact"} >Nous contacter</Link>
                <Link to={"/apropos/offres"} >Nos offres</Link>
            </div>
            {/* Outlet permet d'afficher les enfants de la route parents sans avoir a recharger la page. Dans notre cas apropos est le parent */}
            <Outlet />
        </div>
    </div>
  )
}
