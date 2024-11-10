import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/24/solid';

type Project_Card = {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string,
    previewUrl: string
};

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: Project_Card) => {
    return (
      <div className="group">
        <div
          className="h-52 md:h-72 rounded-t-xl relative"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",


          }}> 
          <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-80 transition-all duration-500">
            <Link href="/" className='h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white group/link'>
              <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] m-1 cursor-pointer group-hover/link:text-white ' />
            </Link>



            <Link href="/" className='h-12 w-12 border-2 rounded-full border-[#ADB7BE] hover:border-white group/link'>
              <EyeIcon className='h-10 w-10 text-[#ADB7BE] m-0.5 cursor-pointer group-hover/link:text-white ' />
            </Link>



          </div>
        </div>
        
        <div className="text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4">
          <h5 className="text-xl font-semibold mb-4">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    );
};

export default ProjectCard;
