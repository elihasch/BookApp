import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import styles from "./BooksCard.module.css"


function BooksCard({data ,handelLikedList}) {
  const {title, author ,image,language, pages} = data;

  const [like, setLike] = useState(false)

  const likeHandler = () => {
      handelLikedList(data, like)
      setLike(like => !like)
  }
    return (
    <div className={styles.card}>
        <img src={image} alt={title}/>
        <div className={styles.info}>
            <h3>{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages} pages</span>
            </div>

        </div>
        <button onClick={likeHandler}>
            <AiFillHeart  color={like ? "red" : "#fff"} fontSize="1.8rem"/>
        </button>
    </div>
  )
}

export default BooksCard