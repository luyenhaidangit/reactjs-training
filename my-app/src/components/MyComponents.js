import React, { useState, useEffect } from "react";
import DisplayInfo from "./DisplayInfo.js";
import AddUserInfo from "./AddUserInfo.js";

// class MyComponents extends React.Component{
//     state = {
//         users : [
//             {id:1,name:"Luyen Hai Dang",age:21},
//             {id:2,name:"luyenhaidangit",age:22},
//             {id:3,name:"luyenhaidang",age:23},
//         ]
//     }

//     // Add User
//     HandleAddUSer = (newUser) =>{
//         console.log(newUser);
//         this.setState({
//             users : [newUser,...this.state.users],
//         })
//     };

//     // Delete User
//     HandleDeleteUser = (idUser) =>{
//         let usersClone = [...this.state.users];
//         usersClone  = usersClone.filter(user => user.id !== idUser);
//         this.setState({
//             users: usersClone,
//         });
//     }

//     //DidMount
//     // componentDidMount(){
//     //     setTimeout(()=>{
//     //         document.title = "Hello Dang";
//     //     },2000);
//     // }

//     // componentDidUpdate(prevProps, prevState, snapshot){
//     //     console.log("check",prevState,this.state);
//     //     if(this.state.users!==prevState.user){
//     //         if(this.state.users.length===5){
//     //             alert("5 user");
//     //         }
//     //     }
//     // }

//     render(){
//         console.log(this.state.users);
//         return(
//             <>

//                 <AddUserInfo HandleAddUSer={this.HandleAddUSer}></AddUserInfo>
//                 <DisplayInfo name="Luyen Hai Dang" users={this.state.users} HandleDeleteUser={this.HandleDeleteUser}></DisplayInfo>
//             </>
//         );
//     }
// }

const MyComponents = () => {
  //State
  const [users, setUsers] = useState([
    { id: 1, name: "Luyen Hai Dang", age: 21 },
    { id: 2, name: "luyenhaidangit", age: 22 },
    { id: 3, name: "luyenhaidang", age: 23 },
  ]);

  //useEffect didMount
  useEffect(() => {
    console.log("effect")
    // Update the document title using the browser API
    setTimeout(()=>{
        document.title = "DAGStore";
    },3000);
  },[]);

  //updateDidMount
  useEffect(() => {
    console.log("effect user")
  },[users]);

  //Function
  //Add User
  const HandleAddUSer = (newUser) => {
    setUsers([newUser, ...users]);
  };

  //Delete User
  const HandleDeleteUser = (idUser) => {
    let usersClone = [...users];
    usersClone = usersClone.filter((user) => user.id !== idUser);
    setUsers(usersClone);
  };

  return(
    <>
        <AddUserInfo HandleAddUSer={HandleAddUSer}></AddUserInfo>
        <DisplayInfo name="Luyen Hai Dang" users={users} HandleDeleteUser={HandleDeleteUser}></DisplayInfo>
    </>
  );
};

export default MyComponents;
