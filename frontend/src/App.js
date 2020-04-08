import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div className="home contaner">
      <h2>Home</h2>
      <SignUp />
    </div>
  )
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));