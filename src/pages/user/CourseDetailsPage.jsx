import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";

export const CourseDetailsPage = () => {
    const [courseDetails,setCourseDetails]=useState({})
    const { id } = useParams();

    const fetchCourseDetails = async () => {
        try {
            const response = await axiosInstance({
                url: `/course/get-courseDetails/${id}`,
            });
            setCourseDetails(response?.data?.data)
        } catch (error) {
            console.log(error);
        }
    };

    console.log('courseDetails===',courseDetails);
    

    useEffect(()=>{
        fetchCourseDetails()
    },[])

    return <div>CourseDetailsPage</div>;
};
