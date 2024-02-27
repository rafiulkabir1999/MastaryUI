import SideNav from "@/app/layouts/SideNav";
import card from "@public/image/DisplayPhoto.jpg";
import Image from "next/image";

function page({}) {
  return (
    <section className="container">
      <SideNav>
        <Box />
        <Box />
      </SideNav>
    </section>
  );
}

const Box = () => {
  return (
    <div className="max-h-36 xl:max-h-52 relative flex flex-col gap-3 bg-orange-500 rounded">
      <Image src={card} fill />
      <p className="text-sm">Nahid Ul Kabir</p>
      <span className="text-xs text-gray-300">Web Dev</span>
    </div>
  );
};

export default page;
