import React from "react";
import ReactDOM from "react-dom";
import SignUp from "./components/SignUp";




const App = () => {
  return (
    <div className="home contaner">
      <SignUp />
    </div>
  )
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));