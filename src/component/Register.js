import React, { useState } from "react";
import SideNav from "./SideNav";

const Register = () => {
    const [searchString, setSearchString] = useState("")
  const registerData = [
    {
      parent_name: "test",
      child_name: "dinesh",
      parent_mobile: "898989898",
      enquired_class: "1",
      parent_email: "test@gmail.com",
    },
    {
      parent_name: "test",
      child_name: "raja",
      parent_mobile: "898989898",
      enquired_class: "1",
      parent_email: "test@gmail.com",
    },
    {
      parent_name: "test",
      child_name: "manoj",
      parent_mobile: "898989898",
      enquired_class: "1",
      parent_email: "test@gmail.com",
    },
    {
        parent_name: "test",
        child_name: "deepak",
        parent_mobile: "898989898",
        enquired_class: "1",
        parent_email: "test@gmail.com",
    },
    {
        parent_name: "test",
        child_name: "gulshan",
        parent_mobile: "898989898",
        enquired_class: "1",
        parent_email: "test@gmail.com",
      },
      {
        parent_name: "test",
        child_name: "nishant",
        parent_mobile: "898989898",
        enquired_class: "1",
        parent_email: "test@gmail.com",
      },
      {
        parent_name: "test",
        child_name: "shivam",
        parent_mobile: "898989898",
        enquired_class: "1",
        parent_email: "test@gmail.com",
      },
      {
        parent_name: "test",
        child_name: "tarun",
        parent_mobile: "898989898",
        enquired_class: "1",
        parent_email: "test@gmail.com",
      },
      {
        parent_name: "test",
        child_name: "chandan",
        parent_mobile: "898989898",
        enquired_class: "1",
        parent_email: "test@gmail.com",
      },
  ];
  const handleSearch = (e) =>{
    setSearchString(e.target.value)
  }

  let filterData = [];
  if(searchString.length>=1){

    filterData = registerData.filter(d =>{
        if(d.child_name.includes(searchString)){
            return d;
        }
    })
  }
  else{
    filterData = registerData;
  }


  return (
    <div className="container-fluid">
      <div className="d-flex">
        <SideNav />
        <div className="w-100 p-3">
            <div className="mb-3">
                <input className="form-control w-25" placeholder="search by name" onChange={(e)=>handleSearch(e)} />
            </div>
          {filterData.map((data, index) => {
            return (
              <div className="list d-flex w-100" key={index}>
                <div className="img-container">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWC-gNXo5Wd22oY8_BGdHdlMLHcMXvWPWVA&usqp=CAU"
                    className="list-img"
                  />
                </div>
                <div>{data.child_name}</div>
                <div>{data.parent_name}</div>
                <div>{data.parent_mobile}</div>
                <div>{data.parent_email}</div>
                <div>
                  <img
                    className="edit-icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRWHj5I3m_KJdm05iic2uYU2NtNdTssHZKQ&usqp=CAU"
                  />
                  <img
                    className="delete-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Register;