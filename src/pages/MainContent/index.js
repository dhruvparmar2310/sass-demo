import React from 'react'
import Hero from '../../shared/components/Hero'
import Intro from '../../shared/components/Intro'
import Navbar from '../../shared/components/Navbar'
import { FiCast, FiUsers } from 'react-icons/fi'
import { ImStack } from 'react-icons/im'
import './style.scss'
import ServiceCard from '../../shared/components/ServiceCard'
import serviceOne from '../../assets/images/service-1.jpeg'
import serviceTwo from '../../assets/images/service-2.jpeg'
import serviceThree from '../../assets/images/service-3.jpeg'

export default function MainContent () {
  return (
    <>
        {/* navbar */}
        <Navbar />

        {/* hero section */}
        <Hero />

        {/* intro section */}
        <section id='intro' className='intro'>
            <Intro logo={<FiCast />} title='Business Stratagy' desc='I throw myself down among the tall grass by the stream as  I lie close to the earth' />
            <Intro logo={<ImStack />} title='Website Development' desc='I throw myself down among the tall grass by the stream as  I lie close to the earth' />
            <Intro logo={<FiUsers />} title='Marketing & Reporting' desc='I throw myself down among the tall grass by the stream as  I lie close to the earth' />
        </section>

        {/* service section */}
        <section id='services' className='service'>
            <div className='service-intro'>
                <h1 className='service-title'>Services</h1>
                <p className='service-desc'>There are many variations of passages of Lorem Ipsum available, but.</p>
                <button>Read Custom Service</button>
            </div>
            <div className='service-category'>
                <ServiceCard src={serviceOne} title='Thinking Development' desc='I throw myself down among the tail grass by the stream' />
                <ServiceCard src={serviceTwo} title='Business Consulting' desc='I throw myself down among the tail grass by the stream' />
                <ServiceCard src={serviceThree} title='Business Development' desc='I throw myself down among the tail grass by the stream' />
            </div>
        </section>
    </>
  )
}
