
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

interface Props{
  jwtToken:String,
  setJwtToken(cookies:string):void
}

const Home = ({jwtToken,setJwtToken}:Props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwtcookie']);
  useEffect(()=>{
    setJwtToken(cookies.jwtcookie)
  },[cookies])
  return (
    <div>
    <p>Cookie {jwtToken}</p>
    </div>
  )
}

export default Home