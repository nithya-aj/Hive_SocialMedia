import React from 'react';
import { motion } from 'framer-motion';

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      onClick={toggleDarkMode}
      style={{
        cursor: 'pointer',
        width: '37px',
        height: '20px',
        borderRadius: '50px',
        backgroundColor: isDarkMode ? '#1A202C' : '#76A5FF',
        display: 'flex',
        justifyContent: isDarkMode ? 'flex-end' : 'flex-start',
        padding: '2px',
        boxSizing: 'content-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          backgroundColor: 'white',
          right: '15%',
          top: '20%',
          transform: isDarkMode ? 'translateY(100px)' : 'translateY(0)',
          transition: 'transform 0.3s linear',
        }}
      ></motion.div>
      <motion.div
        style={{
          position: 'absolute',
          width: '2px',
          height: '2px',
          borderRadius: '50%',
          backgroundColor: 'white',
          right: '30%',
          top: '45%',
          transform: isDarkMode ? 'translateY(100px)' : 'translateY(0)',
          transition: 'transform 0.3s linear 0.1s',
        }}
      ></motion.div>
      <motion.div
        style={{
          position: 'absolute',
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          backgroundColor: 'white',
          right: '35%',
          top: '40%',
          transition: 'transform 0.3s linear',
          transform: isDarkMode ? 'translateY(100px)' : 'translateY(0)',
        }}
      ></motion.div>
      <motion.div
        style={{
          position: 'absolute',
          width: '4px',
          height: '2px',
          borderRadius: '50%',
          backgroundColor: 'white',
          right: '25%',
          top: '70%',
          transition: 'transform 0.3s linear',
          transform: isDarkMode ? 'translateY(100px)' : 'translateY(0)',
        }}
      ></motion.div>
      <motion.div
        style={{
          position: 'absolute',
          width: '5px',
          height: '5px',
          backgroundColor: 'white',
          left: '15%',
          top: '25%',
          clipPath:
            'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)',
          transition: 'transform 0.3s linear',
          transform: isDarkMode ? 'translateY(100px)' : 'translateY(0)',
        }}
      ></motion.div>
      <motion.div
        style={{
          position: 'absolute',
          width: '7px',
          height: '7px',
          backgroundColor: 'white',
          left: '45%',
          top: '60%',
          borderRadius: '58%',
          clipPath:
            'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)',
          transition: 'transform 0.3s linear',
          transform: isDarkMode ? 'translateY(100px)' : 'translateY(0)',
        }}
      ></motion.div>
      <motion.div
        style={{
          position: 'absolute',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: 'white',
          left: '55%',
          top: '25%',
          transition: 'transform 0.3s linear',
          transform: isDarkMode ? 'translateY(100px)' : 'translateY(0)',
        }}
      ></motion.div>
      <motion.div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          borderRadius: '50px',
          backgroundColor: isDarkMode ? 'transparent' : '#fff',
          boxShadow: isDarkMode
            ? 'inset 0px 13px white, inset 0px 13px 1px 1px white'
            : 'inset 0px 0px white, inset 0px 0px 0px 0px white',
          rotate: 90,
          transition: 'box-shadow 0.3s linear, background 0.3s linear',
        }}
      ></motion.div>
    </div>
  );
};

export default DarkModeSwitch;
