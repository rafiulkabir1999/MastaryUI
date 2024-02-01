"use client";
import Profile from "@public/image/profile.jpg";
import Image from "next/image";
import React, { useRef } from "react";
function page() {
  const ImgContainer = useRef(null);
  const [fromdata , setFromdata] = React.useState({
    name:'',
    phone:'',
    email:'',
    dob:"",
    password:"",
    gender:"",
    profile:"",
    bloodgroup:"",
}
)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handlesubmit");
  };

  const changeImage = () => {
    ImgContainer.current.click();
  };
  const [image, setImage] = React.useState();fdgdgfdgdf  hghgkfgfsdfsfafa  one three
  const handleImageChange = () => {
    const IMG = event.target.files[0];
    setImage(IMG);
  };
  return (
    <div className="cont sdfafasfafsfasfsf safsfla
      <div className="rounded justifyter w-full">
        <div className="flex text-base p-3 text-white font-bold bg-sky-300 gap-2">
          <p>Edit</p>
          <p>&gt;</p>
          <p>Profile</p>
        </div>
        <form onSubmit={handleSubmit} className="">
          <div className=" flex flex-col items-center p-6 gap-5 shadow rounded  lg:flex-row">
            <div className="flex flex-col   w-full ">
              <div className="w-40 h-40  mb-4 flex mx-auto md:mx-0">
                <div
                  onClick={changeImage}
                  className="w-full h-full overflow-hidden "
                >
                  {image ? (
                    <Image
                      src={URL.createObjectURL(image)}
                      className="rounded-full p-2"
                      width={150}
                      height={150}
                    />
                  ) : (
                    <Image src={Profile} className="rounded-full p-2" />
                  )}
                  <input
                    onChange={handleImageChange}
                    type="file"
                    name=""
                    className="hidden"
                    id=""
                    ref={ImgContainer}
                  />
                </div>
              </div>
              <div className="grid w-full gap-5 sm:grid-cols-1  md:grid-cols-2 lg:gap-x-10 ">
                <label htmlFor="name" className="flex flex-col text-xs gap-2">
                  Name
                  <input
                    type="text"
                    className="p-2 outline-none border border-gray-400 bg-gray-50"
                    placeholder="ex: Nahid Ul Kabir"
onChange={handleChange}/>
                </label>
                <label htmlFor="name" className="flex flex-col text-xs gap-2">
                  Name
                  <input
                    type="text"
                    className="p-2 focus:outline-green-300 focus:outline-1 border border-gray-400  outline-none "
                    placeholder="ex: Nahid Ul Kabir"
                  />
                </label>
                <label htmlFor="name" className="flex flex-col text-xs gap-2">
                  Name
                  <input
                    type="text"
                    className="p-2 focus:outline-green-300 focus:outline-1 border border-gray-400  outline-none "
                    placeholder="ex: Nahid Ul Kabir"
                  />
                </label>
                <label htmlFor="Phone" className="flex flex-col text-xs gap-2">
                  Phone
                  <input
                    type="text"
                    className="p-2 focus:outline-green-300 focus:outline-1 border border-gray-400  outline-none "
                    placeholder="ex: +88017329337319"
                  />
                </label>
                <label htmlFor="name" className="flex flex-col text-xs gap-2">
                  Name
                  <input
                    type="text"
                    className="p-2 focus:outline-green-300 focus:outline-1 border border-gray-400  outline-none "
                    placeholder="ex: Nahid Ul Kabir"
                  />
                </label>
                <label htmlFor="Phone" className="flex flex-col text-xs gap-2">
                  Phone
                  <input
                    type="text"
                    className="p-2 focus:outline-green-300 focus:outline-1 border border-gray-400  outline-none "
                    placeholder="ex: +88017329337319"
                  />
                </label>
                <label
                  htmlFor="name"
                  className="flex flex-col text-xs gap-2 w-full md:col-span-2 "
                >
                  Name
                  <textarea
                    name=""
                    id=""
                    className="border p-2"
                    rows="1"
                  ></textarea>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold m-4 rounded p-1.5 w-32"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
