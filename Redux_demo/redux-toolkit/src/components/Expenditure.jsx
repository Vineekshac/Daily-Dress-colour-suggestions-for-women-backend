import React, { useRef } from "react";
import { addExp } from "../redux/expSlice";
import { useDispatch } from "react-redux";

function Expenditure() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const addNewExp = () => {
    const newExp = inputRef.current.value;
    console.log("newExp", newExp);
    if (newExp !== "") {
      dispatch(addExp(newExp));
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input type="text" placeholder="Add your expenditure..." ref={inputRef} />
      <button onClick={addNewExp}>Add Expenditure</button>
    </div>
  );
}

export default Expenditure;
