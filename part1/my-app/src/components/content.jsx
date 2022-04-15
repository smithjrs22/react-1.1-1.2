/* part 2*/

import Part from './part'


let Content = (prop) => {
    return (
        <div>
            <Part part = {prop.part1} exercise = {prop.exercises1}/>
            <Part part = {prop.part2} exercise = {prop.exercises2}/>
            <Part part = {prop.part3} exercise = {prop.exercises3}/>
        </div>
        );
    };


export default Content

/* A JSX comment

/* part 1

// let Content = (prop) => {
//     return (
//         <div>
//             <p>{prop.part1}{prop.exercise1}</p>
//             <p>{prop.part2}{prop.exercise2}</p>
//             <p>{prop.part3}{prop.exercise3}</p>
//         </div>
//     );
// };

// export default Content */