import React from 'react'


const Profile = (props)=> {

    return (<center><div  style={{border:"5px solid black", backgroundColor:"white", color:"black", width:"400px"}}>
        <img style={{height:"75px"}} src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg" alt="..." />
        <h1>Name:feres {props.name} </h1>
    <h1>bio : students{props.age}</h1>
        <h1> profession :  {props.description} </h1>
    </div></center>)
}
export default Profile