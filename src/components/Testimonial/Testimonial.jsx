import Bannerpng from '../../assets/food/food3.png'
import {motion} from 'framer-motion'
import { SlideUp } from '../Hero/Hero'
import MyLogo from '../../assets/food/mylogo.png'

const Testimonial = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">

            {/* Text Content Section */}
            <div className='space-y-5 lg:max-w-[400px]'>
                <motion.p
                variants={SlideUp(0.4)}
                initial='hidden'
                whileInView='show'
                className='text-xl font-serif relative z-10'>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Mollitia, aspernatur earum! 
                    Quae soluta unde doloribus expedita repudiandae 
                    possimus deleniti dicta?
                </motion.p>
                
                <div className='flex items-center gap-3'>
                    <motion.img
                    variants= {SlideUp(0.8)}
                    initial= 'hidden'
                    animate= 'show'
                    src={MyLogo}
                    alt='logo'
                    className='w-13 h-13 rounded-full object-cover'
                    />

                    <motion.div
                    variants={SlideUp(1.2)}
                    initial='hidden'
                    whileInView='show'
                    >
                        <h2 className='text-xl font-bold'>Rudranil Mallick</h2>
                        <p className='text-sm'>Developer</p>
                    </motion.div>
                </div>
            </div>

            {/* Image Section */}
            <div className='relative'>
                <motion.img
                initial={{
                    opacity: 0,
                    x: -100,
                    y: 100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                }}
                whileHover={{
                    scale: 1.2,
                    rotate: 15,
                    x: 50,
                    y: -50
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    scale: {duration: 0.5},
                }}
                src={Bannerpng} alt="" className='relative z-10 w-full lg:max-w-[280px] img-shadow' />
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className='absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px] bg-lightYellow rounded-full'> </motion.div>
                


            </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial
