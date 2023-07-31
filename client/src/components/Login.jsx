import React from 'react'
import {GoogleLogin} from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc"
import shareVideo from "../assets/share.mp4"
import logo from "../assets/logowhite.png"
import jwtDecode from "jwt-decode"
import { client } from "../client"


const Login = () => {
  const navigate = useNavigate()

  function credentialResponse(response) {
    console.log(response.credential)
    
      const userInfo = jwtDecode(response.credential);
      sessionStorage.setItem('user', JSON.stringify(userInfo) )
      const { picture, name, sub } = userInfo
      
      const doc = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture
      }
      
      client.createIfNotExists(doc)
        .then(() => {
          navigate('/', {replace: true})
        })
      
    
}
  
  return (
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_API_TOKEN}`}>
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video 
          src={shareVideo}
          type="video/mp4"
          loop
          muted
          autoPlay
          className='w-full h-full object-cover'
      />
      <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
        <div className='p-5'>
          <img src={logo} width="130px" alt="logo" />
        </div>

        {/* <div className='shadow-2xl'>
          <GoogleLogin 
            onSuccess={credentialResponse}
            onFailure={credentialResponse}
            cookiePolicy='single_host_origin'
            render={(renderProps) => (
            <button
              type="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
            >
              <FcGoogle className='mr-4 '/> Sign In With Google
            </button>
          )}
          />

        </div> */}

     <div className="g-signin2" data-onsuccess="onSignIn">
        <GoogleLogin
          cookiePolicy='single_host_origin'
          onSuccess={(response) => {
            const userInfo = jwtDecode(response.credential);
            sessionStorage.setItem('user', JSON.stringify(userInfo) )
            const { picture, name, sub } = userInfo
            
            const doc = {
              _id: sub,
              _type: 'user',
              userName: name,
              image: picture
            }
            
            client.createIfNotExists(doc)
              .then(() => {
                navigate('/', {replace: true})
              })
          }} 
          onError={() => console.log('Error')}
        />

     </div>

      </div>
      </div>
    </div>
    </GoogleOAuthProvider>
  )
}
  
export default Login
