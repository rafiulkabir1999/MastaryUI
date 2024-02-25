import React, { useRef } from "react";
import profile from "@public/image/profile.jpg";
import Image from "next/image";

function Form1() {
  const ImgContainer = useRef(null);
  const [fromdata, setFromdata] = React.useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    password: "",
    gender: "",
    profile: "",
    bloodgroup: "",
  });
  const handleChange = () => {};
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handlesubmit");
  };

  const changeImage = () => {
    ImgContainer.current.click();
  };
  const [image, setImage] = React.useState(null);

  const handleImageChange = (event) => {
    const IMG = event.target.files[0];
    setImage(IMG);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="shadow m-4">
        <div className=" flex flex-col items-center p-6 gap-5 rounded  lg:flex-row">
          <div className="flex flex-col   w-full ">
            <label htmlFor="">
              <p className="text-sm py-2 text-gray-800">Please select photo</p>
              <div className="w-40 h-40  mb-4 flex mx-auto md:mx-0">
                <div
                  onClick={changeImage}
                  className="w-full h-full overflow-hidden  "
                >
                  {image ? (
                    <div className="relative size-36 P-2 border">
                      <Image
                        src={URL.createObjectURL(image)}
                        className=""
                        fill
                      />
                    </div>
                  ) : (
                    <div className="size-36 relative">
                      <Image src={profile} className="size-10" fill />
                    </div>
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
            </label>
            <div className="grid w-full gap-5 sm:grid-cols-1  md:grid-cols-2 lg:gap-x-10 ">
              <label htmlFor="name" className="flex flex-col text-xs gap-2">
                Name
                <input
                  name="name"
                  type="text"
                  className="p-2 outline-none border border-gray-400 bg-gray-50"
                  placeholder="ex: Nahid Ul Kabir"
                  onChange={handleChange}
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
                  className="border border-gray-400 p-2"
                  rows="4"
                ></textarea>
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold my-4 rounded py-1.5 w-32"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form1;
