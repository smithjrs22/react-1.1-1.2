import Part from "./part";

//1.5
let Total = ({exercises123}) => {
    console.log(exercises123)
    return (
        <>
           <p>{exercises123[0].exercises + exercises123[1].exercises + exercises123[2].exercises}</p> 
        </>
    );
};

// 1.4
// let Total = ({exercises123}) => {
//     console.log(exercises123)
//     return (
//         <>
//            <p>{exercises123[0].exercises + exercises123[1].exercises + exercises123[2].exercises}</p> 
//         </>
//     );
// };



// 1.3
// let Total = ({exercises123}) => {
//     return (
//         <>
//            <p>{exercises123}</p> 
//         </>
//     );
// };

// let Total = (prop) => {
//     return (
//         <>
//             <p>{prop.exercise1 + prop.exercise2 + prop.exercise3}</p>
//         </>
//     );
// };

export default Total 