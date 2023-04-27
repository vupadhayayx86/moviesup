import axios from 'axios'
const Feedback = () => {
  const handleClick=()=>{
    axios.post("http://localhost:5000/feedback",{withCredentials: true})
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
  }

  const handleClickGet=()=>{
    axios.get("http://localhost:5000/feedback",{withCredentials: true})
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
  }

  return (
    <div>
      <h1>Feedback</h1>
      <button onClick={handleClick}>Post Cookie</button>
      <button onClick={handleClickGet}>Get Cookie</button>
      
    </div>
  )
}

export default Feedback