import React from "react";
import { useNavigate } from "react-router-dom";

function CustomForm() {
  let navigate = useNavigate();

  function onFormSubmitHandler() {
    navigate("/");
  };

  return (
    <>
    <main>
      <form onSubmit={onFormSubmitHandler}>
        <button type="submit">Submit Formulir</button>
      </form>
    </main>
    </>
  )
}

export default CustomForm;
