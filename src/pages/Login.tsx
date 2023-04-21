import React from 'react'

const Login = () => {
  return (
    <div className="d-flex justify-content-center">
    <div className='form'>
    <h1>Login</h1>
    <form>
        <div className='form-element'>
            <label htmlFor="email">Email</label>
            <input type="text" className='form-control' name='email' id='email'/>
        </div>
        <div className='form-element'>
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" id="email" />
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