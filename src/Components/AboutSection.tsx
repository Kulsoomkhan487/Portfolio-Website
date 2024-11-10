"use client";
import React, { useTransition, useState } from 'react';
import TabButton from './TabButton';
import { title } from 'process';


const TAB_DATA = [{
    title: "Skills",
    id: "skills",
    content: (
        <ul className='list-disc pl-2'>
            <li>HTML</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Tailwind Css</li>
            <li>Wordpress</li>
            <li>Shopify</li>
            <li>Amazon</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
        </ul>
    )
},
{
    title: "Education",
    id: "education",
    content: (
        <ul className='list-disc pl-2'>
            <li>High School from Karachi</li>
            <li>10 + 2 from Karachi</li>
            <li>Graduation from Karachi University</li>
            <li>Diploma of A.D.I.T (1 year)</li>
        </ul>
    )
},
{
    title: "Certifications",
    id: "certifications",
    content: (
        <ul className=' list-disc pl-2'>
            <li>Web Developer</li>
            <li>Graphic Designer</li>
            <li>Amazon Virtual Assistant</li>
        </ul>
    )
}


]
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
           setTab(id);
        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <img src='123.jpg' width={500} height={500} alt="About me image" />
                <div className='mt-4 md:mt-0 text-left flrx flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I consider myself to be a hardworking, reliable, and result-oriented person with a clear vision towards completing any task in a timely and effective manner. I am recognized for my capability to work hard, regardless of time and hours.
                    </p>
                </div>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        Education
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                    Certifications
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
            </div>
        </section>
    );
}

export default AboutSection;
