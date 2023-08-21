//components
import Circles from '/components/Circles';

//icons
import { BsArrowRight } from 'react-icons/bs';

//framer
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../variants';

import emailjs from 'emailjs-com';
import React, { useState } from 'react';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        'service_qvyd0j7', // Replace with your service ID
        'template_lek6mly', // Replace with your template ID
        templateParams,
        'RU7SjXaqjxtcjcMgS' // Replace with your user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          // Reset form fields if needed
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&rsquo;s <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit} // Attach handleSubmit to form submission
          >
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                placeholder='Name'
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)} // Connect input to state
                style={{ textTransform: 'none', letterSpacing: 'normal' }}
              />
              <input
                type='text'
                placeholder='E-mail'
                className='input'
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Connect input to state
                style={{ textTransform: 'none', letterSpacing: 'normal' }}
              />
            </div>
            <input
              type='text'
              placeholder='Subject'
              className='input'
              value={subject}
              onChange={(e) => setSubject(e.target.value)} // Connect input to state
              style={{ textTransform: 'none', letterSpacing: 'normal' }}
            />
            <textarea
              placeholder='Message'
              className='textarea'
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Connect input to state
              style={{ textTransform: 'none', letterSpacing: 'normal' }}
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&rsquo;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
