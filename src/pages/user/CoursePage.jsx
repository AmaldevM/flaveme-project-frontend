import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { CourseCard } from "../../components/user/Card";
import { ProductSkelton } from "../../components/user/Skelton";
import { useFetch } from "../../hooks/useFetch";

export const CoursePage = () => {
    const [courses, isLoading, error] = useFetch("/course/get-all-courses");
    console.log('courses===',courses);
    

    return (
        <div>
            { isLoading ? (
                <ProductSkelton />
            ) : (
                <>
                    {courses?.map((value) => (
                        <CourseCard key={value._id} course={value} />
                    ))}
                </>
            )}
        </div>
    );
};
