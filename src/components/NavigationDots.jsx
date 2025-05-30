import React from 'react'

const NavigationDots = ({active}) => {
  const handleClick = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className ="app__navigation">
        {['home', 'about', 'work', 'skills','testimonials','contact'].map((item, index) => (
        <button
           onClick={() => handleClick(item)}
           key= {item+index}
           className = "app__navigation-dot"
           style={active === item ? { backgroundColor : '#313BAC' } : { }}
           aria-label={`Navigate to ${item} section`}
           type="button"
        />
              ))}
     </div>
  )
};

export default NavigationDots;