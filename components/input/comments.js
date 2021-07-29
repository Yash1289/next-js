import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;
  console.log(eventId)
  //console.log(props.eventId,"heelo")
  const [showComments, setShowComments] = useState(false);
  const [comments , setComments] = useState([])

  useEffect(() => {
    if(showComments){

      fetch(`/api/comments/${eventId}`)
      .then((response) => response.json())
      .then((data) => setComments(data.comments))

    }
  },[showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    const { email , name , text } = commentData; 
    const body = {
      email , name , text
    }
    console.log(eventId)
    console.log(body)
    fetch(`/api/comments/${eventId}`,{
      method : "POST" ,
      body : JSON.stringify(body) ,
      headers : {
        'Content-Type' : "application/json"
      }
    }).then(() => console.log("done"))
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments}/>}
    </section>
  );
}

export default Comments;
