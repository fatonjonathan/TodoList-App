import React from 'react'
import { Link } from 'react-router-dom';


export default function Edit({postID}) {
    const customLinkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        marginLeft: '10px'
      };

      return (
    <Link className="btn btn-warning" to={`/modifier/${postID}`} style={customLinkStyle}> Modifier </Link>
  )
}
