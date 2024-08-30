import React from 'react'
import profile_pic from '../../assets/images/banner.png'

const Home = () => {
  return (
    <>
       <div className='border-b mt-32 border-neutral-900 pb-4 lg:mb-36'>
        <div className='container mx-auto  inset-0 -z-10 h-full w-full items-center px-5'>

      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 '>
            <div className='flex flex-col items-center lg:items-start'>
              <h1 className='text-white pb-10 text-6xl font-thin tracking-tight mt-16 lg:text-8xl'>Tamim Hasan</h1>
              <span className='mb-20 ml-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent'>
                Mern Stack Developer
              </span>
              <p className='my-2 max-w-xl py-6 font-light tracking-tighter text-white text-2xl'>I am a passionate Mern stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Mongodb, Firebase, and Express.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</p>
            </div>
      </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
            <img className='bg-transparent' src={profile_pic} alt="" />
        </div>
        </div>

        </div>
        </div>
    </div>
    </>
  )
}

export default Home