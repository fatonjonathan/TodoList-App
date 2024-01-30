import React, { useEffect, useState } from 'react'
import Like from './LikeBtn'
import Delete from './DeleteBtn'
import Edit from './EditBtn';

export default function Card({posts}) {
    
    /**
     * Like or Unlike post
     */
    const [liker, setLiker] = useState('');
    const handleClickLike = (post) => {
        setLiker(!liker);
        post.liker = !post.liker
    };

    /**
     * Delete a post
     */
    const[del, setDel] = useState(posts)
    const handleClickDelete = (postObject) => {
        const newData = del.filter(post => postObject.id !== post.id)   
        setDel(newData)
        if (postObject.liker === true ) {
            postObject.liker = false
        }
    }

    /**
     * Display number of post who liked
     */
    const [count, setCount] = useState(posts.filter(post => post.liker !== false))
    useEffect(() => {
        setCount(posts.filter(post => post.liker !== false))
    }, [liker, del])

    
    //la foncton map est l'équivalent d'un foreach.
    return <div>
            <h3 className='text-center'>Nombre de post liker : {count.length} </h3>
            { del.length > 0 ? del.map(post => (
                
                <div key={post.id} className={post.liker ? "card shadow mb-3 bg-warning-subtle" : "card shadow mb-3"} >
                    
                        <div className="card-body">
                            <h5 className="card-title"><strong>{post.titre} </strong></h5>
                            <p className="card-text">{post.description} </p>
                            <div className='btn-group'>
                                <Like onClick={() => handleClickLike(post) } etatLike={post.liker} />
                                <Delete onClick={() => handleClickDelete(post)} />
                                <Edit postID={post.id} />
                            </div>  
                        </div>
                    
                </div>
            ) 
            ) : <h2 className='text-center mt-5'> Auncun post à afficher pour l'instant</h2>}    
        </div>
  }