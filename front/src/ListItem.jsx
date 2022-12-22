function ListItem(props) {

    return (
        <div>
            <p> {props.id} </p>
            <p> {props.name} </p>
            <p> {props.lastName} </p>
        </div>
    )
}

export default ListItem;

//https://stackoverflow.com/questions/63806962/react-props-for-passing-color


// function ListItem(props) {

//     return (
//         <div style={{color: props.color}}>
//             {">> " + props.id + ": " + props.text}
//         </div>
//     )
// }

// export default ListItem;



// function ListItem(props) {

//     return (
//         <div>
//             {">> " + props.id + ": " + props.name + " " + props.lastName}
//         </div>
//     )
// }