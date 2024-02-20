// import React, { useState } from 'react';
// import { Header } from './header'; 
// import { dishes } from './data';

// const ShowAll = ({ dishes }) => {
//     return (
//         <div  className='card-container'>
//             {dishes.map((item) => (
//                 <div className='card' key={item.id}>
//                     <img src={item.imageSrc} alt={item.title} />
//                     <p>{item.name} </p>
//                     <p>{item.rating}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const Breakfast = ({ dishes }) => {
//     const breakfastItems = dishes.filter(item => item.type.toLowerCase() === 'non-veg');

//     return (
//         <div className='card-container'>
//             {breakfastItems.map(item => (
//                 <div className='card' key={item.id}>
//                     <img src={item.imageSrc} alt={item.name} />
//                     <p>{item.name} </p>
//                     <p>{item.rating}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const Lunch = ({ dishes }) => {
//     const lunchItems = dishes.filter(item => item.type.toLowerCase() === 'non-veg');

//     return (
//         <div className='card-container'>
//             {lunchItems.map(item => (
//                 <div className='card' key={item.id}>
//                     <img src={item.imageSrc} alt={item.title} />
//                     <p>{item.type} </p>
//                     <p>{item.rating}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const Shakes = ({ dishes }) => {
//     const shakesItems = dishes.filter(item => item.type.toLowerCase() === 'veg');

//     return (
//         <div className='card-container'>
//             {shakesItems.map(item => (
//                 <div className='card' key={item.id}>
//                     <img src={item.imageSrc} alt={item.title} />
//                     <p>{item.type} </p>
//                     <p>{item.rating}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const DishContainer = () => {
//     const [currentSelection, setCurrentSelection] = useState('all');

//     const handleCategoryChange = (category) => {
//         setCurrentSelection(category);
//     };
   
//     return (
//         <div className='container'>
//              <Header onSelect={handleCategoryChange} />
//              <div className='display-result'>
//             {currentSelection === 'all' && <ShowAll dishes={dishes} />}
//             {currentSelection === 'breakfast' && <Breakfast dishes={dishes} />}
//             {currentSelection === 'lunch' && <Lunch dishes={dishes} />}
//             {currentSelection === 'shakes' && <Shakes dishes={dishes} />}
//             </div>
//         </div>
//     );
// };

// export { DishContainer };
