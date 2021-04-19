

const MyMessage = ({ message }) => {
    if( message.attachements && message.attachements.length>0 )
    {
        
        return(
            <img 
            src = {message.attachements[0].file}
            alt = "message-attachement"
            className= "message-image"
            style = {{ float : 'right'}}
            />
        ); 
    }
    console.log({message})
    return(
        <div className = "message"  style = {{ float : 'right', marginRight : '18px' , color:'white', backgroundColor : '#3B2A50' }}>
            {message.text} 
{/* // returns text content of the selected object  */}
        </div>
    );
}

export default MyMessage;