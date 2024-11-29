import { axiosInstance } from "@/config/axiosInstance"
import { useEffect } from "react"


export const RestaurantPage = () => {

  const getAllRest = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url:"/rest/restaurants"
      })
      console.log(response)
    } catch (error) {
      
    }
  }
 useEffect(()=> { getAllRest() },[])
  
  return (
    <div>Restaurant page</div>
  )
}
