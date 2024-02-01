import Profile from  '@public/image/profile.jpg'
function page() {
  return <section>
    <div className={`flex flex-col  md:flex-row`}>
      <div className={`flex-1`}></div>
      <div className={`flex-1`}>
        <div className="w-full h-full">
          <Image src={profile} alt='profile'/>
        </div>
      </div>
    </div>
  </section>;
}

export default page;
