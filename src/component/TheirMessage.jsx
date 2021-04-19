const TheirMessage = ( {lastMessage, message }) => {
    const isFirstMessagebyUser = !lastMessage || lastMessage.sender.username !== message.sender.username; 
    
    return(
        <div className = "message-row">
            {
                isFirstMessagebyUser && (
<div
    className = "message-avatar"
    style = { {backgroundImage: `url(${message?.sender?.avatar})`}}
/>
        )

            }
        {message?.attachements?.length > 0
            ? (
         <img 
            src = {message.attachements[0].file}
            alt = "message-attachement"
            className= "message-image"
            style = {{ marginLeft: isFirstMessagebyUser ? '4px' : '48px' }}
            />
        ) : (
            <div className = "message"  style = {{ float : 'right',  backgroundColor : '#CABCDC', marginLeft: isFirstMessagebyUser ? '4px' : '48px' }}>
            {message.text} 
{/* // returns text content of the selected object  */}
        </div>

        ) 
    }

        </div>
    );
}

export default TheirMessage;