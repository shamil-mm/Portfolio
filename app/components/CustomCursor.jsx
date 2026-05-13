// 'use client';
// import { useEffect, useState } from 'react';

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', move);
//     return () => window.removeEventListener('mousemove', move);
//   }, []);

//   return (
//     <div
//       className="pointer-events-none fixed z-[9999] h-8 w-8 rounded-full border border-black mix-blend-difference transition-transform duration-100 ease-out"
//       style={{
//         transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
//       }}
//     ></div>
//   );
// };

// export default CustomCursor;
