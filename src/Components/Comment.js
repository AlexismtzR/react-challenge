import React  from 'react';

    /**
    * Renders a <Comment /> component
    * @param  props
    * @param  props.body - The message of the comment
    * @param  props.name - The name of the person writing the message
    * @param  props.email - The email of the person writing the message
    */


const Comment = ({body, name, email}) => {

    return(
        <div>
        <p>
            <span style={{fontWeight:"500", marginRight:"8px"}}>{name}:</span>
            {body}
        </p>
        <p>
            <span style={{fontWeight:"500", marginRight:"4px"}}>Email:</span>
            {email}
        </p>
         </div>  
    )

}

export default Comment;