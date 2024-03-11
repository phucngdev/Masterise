import React from "react";
import Nav from "../../layout/user/Nav";
import ListRent from "../../layout/user/ListRent";

const Rent = () => {
  return (
    <>
      <div className="pt-[60px] h-full bg-slate-200">
        <Nav></Nav>
        <ListRent></ListRent>
      </div>
    </>
  );
};

export default Rent;
