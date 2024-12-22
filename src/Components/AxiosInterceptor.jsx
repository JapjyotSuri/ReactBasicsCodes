import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosInterceptor = () => {
    const [data,setData]=useState(null);
    const [isLoading,setIsloading]=useState(false)

    useEffect(() => {
        const requestInterceptor=axios.interceptors.request.use((config) => {//adding a request receptor
            console.log('Request was sent:', config);  // Log the request config and this gets logged before our request is sent
            return config;  // returning the config so that the  request can proceed
        },
    (error) => {
        console.error('Error in request:', error);  // handling request error
        return Promise.reject(error);  // returning a rejected promise with the error
    })
    
    const responseInterceptor=axios.interceptors.response.use(
      (response) => {
        console.log('Response received:', response); //this line will run whenever an axios request successfully receives a response from the server
        return response;
      },
      (error) => {
        console.error('Error in response:', error);
        return Promise.reject(error);
      }
    )
    return () => {
      axios.interceptors.request.eject(requestInterceptor)//this removes the interceptor that was previously registered.
      axios.interceptors.response.eject(responseInterceptor)
    }
    },[])
    async function fetchData(){
      setIsloading(true)
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');  
            setData(res.data);  
            console.log(res)
          } catch (error) {
            console.error('Error fetching data:', error);  // Handle errors
          }
          finally{
            setIsloading(false)
          }
        };
    
  return (
    <div>
      <button onClick={fetchData}>Fetching Data</button>
      <div>
        {
            data && !isLoading && <div>
            <h3>Post Title: {data.title}</h3> 
            <p>{data.body}</p>
          </div>
        }
        {
          isLoading && <p>Loading.....</p>
        }
      </div>
    </div>
  )
}

export default AxiosInterceptor
