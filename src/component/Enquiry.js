import React, { useState } from "react";
import SideNav from "./SideNav";

const Enquiry = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedList, setSelectedList] = useState({});

  let UserData = [
    {
      name: "test1",
      email: "testone@gmail.com",
      number: 987654321,
    },
    {
      name: "test2",
      email: "testtwo@gmail.com",
      number: 887654321,
    },
    {
      name: "test3",
      email: "testthree@gmail.com",
      number: 787654321,
    },
  ];
  const handleModalOpen = (data) => {
    setSelectedList(data);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-3">
          <SideNav />
        </div>

        <div className="col-sm-9">
          <h3 className="text-center ">Enquiry</h3>

          {UserData.map((data, index) => {
            return (
              <div className="list-container bg-warning" key={index}>
                <div>{data.name}</div>
                <div>{data.email}</div>
                <div>{data.number}</div>
                <div onClick={() => handleModalOpen(data)}></div>
                <img
                  className="edit-image"
                  src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"
                />
                <img
                  classname="move-image"
                  src="https://cdn-icons.flaticon.com/png/128/3405/premium/3405255.png?token=exp=1647158173~hmac=a6bbad1f00415affc574b41bf275e0f6"
                />
                <img
                  className="delete-image"
                  src="https://cdn-icons.flaticon.com/png/128/2874/premium/2874821.png?token=exp=1647158304~hmac=8529ef356730b32fe4768af95e1e62da
                          "
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Enquiry;
