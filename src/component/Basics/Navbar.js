import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div className="card">
        <h1 className=" heading">Food Menu</h1>
      </div>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
