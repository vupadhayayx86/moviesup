import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../usercontext"


interface Inputs{
    email:String,
    password:String,
}


const Login = () => {
    const {register,handleSubmit,formState:{errors},reset}=useForm<Inputs>()
    const navigate=useNavigate()
    const [useremail,setUseremail]=useContext<any>(UserContext)
    
    const onSubmit=async (data:Inputs)=>{
        const {email,password}=data
        try{
            const res=await fetch("http://localhost:5000/login",{
                method: 'POST',
                body: JSON.stringify({email,password}),
                headers: {'Content-type' : 'application/json'},
                credentials:'include'
            })
            const {useremail}=await res.json()
            setUseremail(useremail)
        }
        catch(error){
            console.log(error)
        }
        reset()
        navigate("/home")
    
    }
    
  return (
    <div className="d-flex justify-content-center">
    <div className='form'>
    <h1>Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-element'>
                <label htmlFor="email">Email</label>
                <input type="text" {...register("email",{required:true,minLength:5,maxLength:30, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: "invalid email address"}})} className='form-control' name='email' id='email'  />
                {errors.email?.type === 'required' && <p className="text-danger" role="alert">Email is required</p>}
                {errors.email?.type === 'minLength' && <p className="text-danger" role="alert">Email must be atleast 5 characters</p>}
                {errors.email?.type === 'maxLength' && <p className="text-danger" role="alert">Email cannot exceed more than 30 characters</p>}
                {errors.email?.type === 'pattern' && <p  className="text-danger" role="alert">Invalid Email Address</p>}
            
            </div>
            <div className='form-element'>
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password",{required:true,minLength:8,maxLength:30})} name="password" className="form-control" id="password" />
                {errors.password?.type === 'required' && <p className="text-danger" role="alert">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-danger" role="alert">Password must be atleast 8 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-danger" role="alert">Password cannot exceed more than 30 characters</p>}
                
            </div>
            <div className='form-element'>
                <button className="btn btn-primary">Submit</button>
                <button className="btn btn-danger">Clear</button>
            </div>
        </form>
</div>
</div>
  )
}

export default Login