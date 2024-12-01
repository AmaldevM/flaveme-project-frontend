import React from "react";

export const Cart = () => {
  const getTheCart = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/cart/getCart",
      });
      console.log(response);
    } catch (error) {}
  };
  useEffect(() => {
    getTheCart();
  }, []);
  return (
    <section>
      <div className="conatiner"></div>
    </section>
  );
};