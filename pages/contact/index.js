//components
import Circles from '../../components/Circles';

//icons
import {BsArrowRight} from 'react-icons/bs'

//framer 
import {motion} from 'framer-motion'

//variants
import { fadeIn } from '../../variants';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const cleanUp = (e) => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the data to the server or perform any desired action
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })   
    
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/*text */}
          <motion.h2 
            variants={fadeIn('up', .2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
            variants={fadeIn('up', .4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='name' placeholder='name' className='input' onChange={handleInputChange} value={formData.name}></input>
              <input type='text' name='email' placeholder='email' className='input' onChange={handleInputChange} value={formData.email}></input>
            </div>
            <input type='text' name='subject' placeholder='subject' className='input' onChange={handleInputChange} value={formData.subject}></input>
            <textarea name='message' placeholder='message' className='textarea' onChange={handleInputChange} value={formData.message}></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' onClick={cleanUp}>
              <span className='group-hover:-tranlsate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Get in touch</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'></BsArrowRight>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
