import { useState } from 'react';
import axios from 'axios';
import { ConsoleSqlOutlined } from '@ant-design/icons';

const projectID = '0f9aea98-2639-43b4-85f3-46589f741c41';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
       await axios.get('https://api.chatengine.io/chats', { headers: authObject }).then((res) => {console.log(res)});

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    
    } catch (err) {
      console.log(username);
        console.log(password);
        console.log(projectID);
        setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
          <h2 className = "error">{error}</h2>
        </form>
        
      </div>
    </div>

  );
};

export default Modal;