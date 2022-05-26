import TableComponent from "./components/TableComponent";
import FormComponent from "./components/FormComponent";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState();
  const handleCreate = () => {
    setVisible(!visible);
  };
  const show = (tableshow) => {
    setVisible(!tableshow);
  };
  console.log(show);
  return (
    <>
      <div className="w-full h-screen p-5">
        <h1 className="text-2xl font-bold">Skill Test</h1>
        <div className="bg-white text-center">
          {/* <FormComponent /> */}
          {visible ? (
            <FormComponent show={show} />
          ) : (
            <button
              type="button"
              className="my-4 w-1/4 font-bold text-white btn btn-info"
              onClick={() => handleCreate()}
            >
              Create Post
            </button>
          )}
          {/* <button
            type="button"
            className="w-full btn btn-info"
            onClick={() => handleCreate()}
          >
            Create Post
          </button> */}
          <hr />
          <TableComponent show={show} />
        </div>
      </div>
    </>
  );
}
