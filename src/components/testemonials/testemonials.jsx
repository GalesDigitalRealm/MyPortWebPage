// import React from 'react'
// import './testemonials.css'
// import AVTR1 from '../../assests/avatar1.jpg'
// import AVTR2 from '../../assests/avatar2.jpg'
// import AVTR3 from '../../assests/avatar3.jpg'
// import AVTR4 from '../../assests/avatar4.jpg'





// const data = [
//   {
//     avatar: AVTR1,
//     name: "Tina",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis quaerat nesciunt natus dolorum vitae quae laudantium magnam fugiat sequi culpa delectus accusamus dignissimos, consequuntur nam aperiam quos eaque? Molestias?",
//   },
//   {
//     avatar: AVTR2,
//     name: "Glorilyn",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis quaerat nesciunt natus dolorum vitae quae laudantium magnam fugiat sequi culpa delectus accusamus dignissimos, consequuntur nam aperiam quos eaque? Molestias?",
//   },
//   {
//     avatar: AVTR3,
//     name: "De Asis",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis quaerat nesciunt natus dolorum vitae quae laudantium magnam fugiat sequi culpa delectus accusamus dignissimos, consequuntur nam aperiam quos eaque? Molestias?",
//   },
//   {
//     avatar: AVTR4,
//     name: "De Asis",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis quaerat nesciunt natus dolorum vitae quae laudantium magnam fugiat sequi culpa delectus accusamus dignissimos, consequuntur nam aperiam quos eaque? Molestias?",
//   }
// ];
// const testemonials = () => {
//   return (
//     <section id="testemonials">
//       <h5>Review from Client</h5>
//       <h2>Testemonials</h2>

//       <div className="container testemonials__container">
//         {
//           data.map(({avatar, name,review}, index) =>{
//             return (
//               <div key={index} className="testimonial">
//                 <div className="client__avatar">
//                   <img src={avatar} alt="Avatar One" />
//                 </div>
//                 <h5 className="client__name">{name}</h5>
//                 <small className="client__review">
//                  {review}
//                 </small>
//               </div>
//             );
//           })
//         }
//       </div>
//     </section>
//   );
// }

// export default testemonials