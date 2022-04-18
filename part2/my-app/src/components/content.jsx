/* part 2*/

import Part from './part'

//1.5
let Content = (prop) => {
    return (
        <div>
            <Part part = {prop.course.parts[0]}/>
            <Part part = {prop.course.parts[1]}/>
            <Part part = {prop.course.parts[2]}/>
        </div>
        );
    };

//1.4
// let Content = (prop) => {
//     return (
//         <div>
//             <Part part = {prop.parts[0]}/>
//             <Part part = {prop.parts[1]}/>
//             <Part part = {prop.parts[2]}/>
//         </div>
//         );
//     };


// 1.3//
//let Content = (prop) => {
//     return (
//         <div>
//             <Part part = {prop.part1} exercise = {prop.exercises1}/>
//             <Part part = {prop.part2} exercise = {prop.exercises2}/>
//             <Part part = {prop.part3} exercise = {prop.exercises3}/>
//         </div>
//         );
//     };


export default Content

