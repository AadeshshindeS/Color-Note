import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
const Card = (prop) => {
  const box = prop.box;
  const boxdelete = prop.boxdelete;
  const editChange = prop.editChange;
  return (
    <>
      {box.map((singlebox) => {
        const color = singlebox.color;
        const id = singlebox.id;
        return (
          <div key={singlebox.id} className="roll-in-top">
            <div className={`card`} style={{ backgroundColor: color }}>
              <div className="textarea">
                <textarea
                  cols="20"
                  rows="7"
                  style={{ backgroundColor: color }}
                ></textarea>
              </div>
              <div className="info">
                <p>{singlebox.time}</p>
                <FaTrash
                  size={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => boxdelete(id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
