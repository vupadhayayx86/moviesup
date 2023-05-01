import { UserContext } from "../usercontext"
import { useContext } from "react"
import {useForm} from 'react-hook-form'

interface InputProps{
  username:String,
  subject:String,
  feedback:String
}
const Feedback = () => {
  const [useremail]=useContext<any>(UserContext)
  const {register,handleSubmit,formState:{errors},reset}=useForm<InputProps>()
  
  const onSubmit=async (data:InputProps)=>{
    const {username,subject,feedback}=data
    try{
     const res=fetch('https://feedbackapp-5ehr.onrender.com/feedback',{
      method:'POST',
      body:JSON.stringify({username,subject,feedback}),
      headers: {'Content-type' : 'application/json'},
      credentials:'include'
     })
     console.log((await res).json())
      
    } catch(error){
      console.log(error)
    }
    reset()
  }

  return (
    <div className='d-flex justify-content-center m-5 p-2'>
      <div className='w-75'>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='m-2 p-2'>
        <label htmlFor="username">Username</label>
        <input {...register('username')} type="text" value={useremail} name="username" className="form-control" />
      </div>

      <div className='m-2 p-2'>
        <label htmlFor="subject">Subject</label>
        <input {...register('subject',{required:true,minLength:10,maxLength:50})} type="text" name="subject" className="form-control" />
      </div>
      
      <div className='m-2 p-2'>
        <label htmlFor="feedback">Feedback</label>
        <textarea  {...register('feedback',{required:true,minLength:15,maxLength:400})} name="feedback" id="feedback" cols={30} rows={10} className="form-control" placeholder="Enter your feedback"></textarea>
        {errors.feedback?.type === 'required' && <p className="text-danger" role="alert">Feedback is required</p>}
        {errors.feedback?.type === 'minLength' && <p className="text-danger" role="alert">Feedback must be atleast 5 characters</p>}
        {errors.feedback?.type === 'maxLength' && <p className="text-danger" role="alert">Feedback cannot exceed more than 400 characters</p>}
      
      </div>
      <div className='m-2 p-2'>
        <button className="btn btn-primary">Submit</button>
        <button className="btn btn-danger">Clear</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Feedback