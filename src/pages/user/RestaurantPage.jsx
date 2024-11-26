import React, { useState } from 'react'

export const RestaurantPage = () => {
  const [Restaurants, setRestaurants] = useState([])

  const FetchRestaurants = async  () =>{

  }

  useState(()=> {
    FetchRestaurants()
  },[])

  return (

    

    <div>RestaurantPage</div>
  )
}
