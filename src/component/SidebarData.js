import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

// import Leavedropdown  from './Leavedropdown'

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'My Profile',
    path: '/profile',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Leave',
    path: '/leave',
    icon: <IoIcons.IoMdPeople/>,
    cName: 'nav-text'
  },
  {
    title: 'Attendance',
    path: '/attendence',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Calender',
    path: '/calender',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
