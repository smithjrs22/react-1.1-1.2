import React from "react";
import Header from "./header";
import Content from "./content";
import Total from "./total";
import part from "./part";


//1.5
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      {/* <Header course = {course} /> */}
      <Content parts = {course.parts}/>
      {/* <Total exercises123={course.parts}/> */}
    </div>
  )
}


// 1.4
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course = {course} />
//       <Content parts = {parts}/>
//       <Total exercises123={parts}/>
//     </div>
//   )
// }




// 1.3
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Content part1= {part1} part2={part2} part3={part3}/>
//       <Header course = {course}/>
//       <Total exercises123={part1.exercises + part2.exercises + part3.exercises}/>
//     </div>
//   )
// }


// This is from 1.2-1.2
//const App = () => {
//   const course = "Half Stack application development";
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   const part3 = "State of a component";
//   const exercises3 = 14;

//   return (
//     <div>
//       <Header course={course} />
//       <Content
//         part1={part1}
//         part2={part2}
//         part3={part3}
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />
//       <Total
//         exercise1={exercises1}
//         exercise2={exercises2}
//         exercise3={exercises3}
//       />
//     </div>
//   );
// };

export default App;


/* here i am connecting course with whats in the header js, i used course as one of my parameters, im also establishing that course variable in header is equal to the course i have defined uptop*/

