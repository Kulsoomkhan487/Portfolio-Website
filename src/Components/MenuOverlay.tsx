import React from 'react';
import NavLink from './NavLink';

type MenuOverlayProps = {
    path: string;
    title: string;
};

const MenuOverlay = ({ links }: { links: MenuOverlayProps[] }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index}>
        <NavLink key={index} href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay