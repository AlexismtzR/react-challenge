import React , {useState} from 'react';
import { useDispatch } from "react-redux";
import { addComment } from "../redux/actions";
import userimg from '../img/user.jpg'
import Comment from './Comment'

import "./style.css"


    /**
    * Renders a <Post /> component
    * @param  props
    * @param  props.title - The title of the post
    * @param  props.body - The content of the post
    * @param  props.comment - An array of objects containing the comments of the post
    * @param  props.postId - The id of the post
    */

const Post = ({title, body, comment, postId}) => {

    const [com, setCom] = useState(false)
    const [leavecomment, setleave] = useState("")
    const dispatch = useDispatch();

     /**
     * @param  {postId} "postId"
     * @param  {rand} "id"
     * @param  {"CarlosAlexisMartinezRangel"} "name"
     * @param  {"Alexis@alexis.com"} "email"
     * @param  {leavecomment}} "body"
     */

    const aComment = () => {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        const comment = ({
            "postId": postId,
            "id": rand,
            "name": "Carlos Alexis Martinez Rangel",
            "email": "Alexis@alexis.com",
            "body": leavecomment
          })
        dispatch(addComment(comment));
      };

    return(
        <div className="post">
            <div className="post_header">
                <div className='post_headerleft'>
                    <img src={userimg} className='post_profilepic'/>
                    <p style={{marginLeft: "8px"}}>Carlos Alexis Martinez Rangel</p>
                </div>
            </div>
            <div className="post_center">
                <h2>{title}</h2>
                <h3>{body}</h3>
                <button onClick={() =>setCom(!com)}>Comments</button>
            </div>
                {
                    com ? 
                    <div>
                    {
                        comment.map((comment, key) => {
                            return(
                                <Comment name={comment.name} body={comment.body} email={comment.email} key={key}/>
                            )   
                        })
                    }
                    <div style={{margin:"0px 16px"}}>
                        <textarea name="Leave a comment"
                         rows="2" 
                         value={leavecomment} 
                         placeholder="Leave a comment" 
                         style={{border:"none", width:"100%", fontSize:"16px", marginTop:"8px", resize:"none"}}
                         onChange={(e) => setleave(e.target.value)}>
                        </textarea>
                        <button
                        className="button"
                        onClick={()=> aComment()}
                        >
                        Comment
                        </button>                   
                    </div>
                    </div>
                    :<></>
                }
        </div>
    )
}

export default Post;