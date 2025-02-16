import React from 'react'

function Copyright() {
  return (
    <div className=''>
       <footer className="bg-primary text-white py-3">
        <div className="container text-center">
          
             <div className="col-md-6 text-md-start text-center"> 
              <p className="mb-0 text-center">&copy; {new Date().getFullYear()} Vishudh Vigya Sangh. | All Rights Reserved.</p>
            
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Copyright

// const Footer = () => {
//     return (
//       <footer className="bg-dark text-white py-3">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 text-md-start text-center">
//               <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name</p>
//             </div>
//             <div className="col-md-6 text-md-end text-center">
//               <p className="mb-0">Designed by Your Name</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  