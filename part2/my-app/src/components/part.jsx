import content from './content'


//1.5
let Part = ({ course }) => {
  console.log(course.parts);
  return (
    <div>
      <h1>{course.parts.name}</h1>
      <p>{course.parts.exercises}</p>
    </div>
  );
// };

//1.4
// let Part = ({part}) => {
//     return (
//         <div>
//             <h1>{part.name}</h1>
//             <p>{part.exercises}</p>
//         </div>
//     );
// };

// 1.3
// let Part = ({name, exercises}) => {
//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>{exercises}</p>
//         </div>
//     );
// };

export default Part;
