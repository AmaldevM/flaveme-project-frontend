import { Link } from "react-router-dom";

export const CourseCard = ({ course }) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={course?.image} alt="course" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{course?.title} </h2>
                <p>{course?.price} </p>
                <div className="card-actions justify-end">
                    <Link to={`/courseDetails/${course?._id}`}>
                        <button className="btn btn-primary">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
