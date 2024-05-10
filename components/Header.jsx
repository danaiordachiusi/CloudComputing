import Link from 'next/link';
import React from 'react';

const Header = () => {

  return (
    <header className="bg-pink-500">
      <nav>
        <ul>
          <li><Link legacyBehavior href="/trips/create">Create a new trip</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const Header = () => {
//   const history = useHistory;

//   const redirectToPage = () => {
//     history.push('/trips/create');
//   };

//   return (
//     <header className="bg-pink-500">
//       <nav>
//         <ul>
//           <li><button onClick={redirectToPage} className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded">Create trip</button></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

