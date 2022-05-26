import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostSlice } from "../redux/slice/post";

import { CREATE_POST, UPDATE_POST_BY_ID } from "../redux/types";

export default function FormComponent({ show }) {
  const dispatch = useDispatch();
  const visible = false;
  const post = useSelector((state) => state.post);
  const handleChange = (prop) => (event) => {
    dispatch(setPostSlice({ ...post, [prop]: event.target.value }));
  };
  //   const handleSubmit = () => {
  //     post.id === 0
  //       ? dispatch({ type: CREATE_POST, post: { ...post, id: nanoid(8) } })
  //       : dispatch({ type: UPDATE_POST_BY_ID, post });
  //     dispatch(
  //       setPostSlice({
  //         id: 0,
  //         title: "",
  //         body: "",
  //       })
  //     );
  //   };
  return (
    <>
      {show ? (
        <form>
          <div className="p-8">
            <h1 className="text-xl text-center font-bold">Create Post Form</h1>
            <div className="py-4 px-24">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">ID</span>
                </label>
                <input
                  className="input input-bordered w-full"
                  value={post.id}
                  disabled
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Title"
                  className="input input-bordered w-full"
                  onChange={handleChange("title")}
                  value={post.title}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Body</span>
                </label>
                <textarea
                  required
                  className="textarea textarea-bordered w-full overflow-auto"
                  placeholder="Body"
                  onChange={handleChange("body")}
                  value={post.body}
                ></textarea>
              </div>
              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="w-1/6 btn btn-success text-white"
                  onClick={() =>
                    show(
                      !visible,
                      post.id === 0
                        ? dispatch({
                            type: CREATE_POST,
                            post: { ...post, id: nanoid(8) },
                          })
                        : dispatch({ type: UPDATE_POST_BY_ID, post }),
                      dispatch(
                        setPostSlice({
                          id: 0,
                          title: "",
                          body: "",
                        })
                      )
                    )
                  }
                >
                  Submit
                </button>
                <button
                  type="submit"
                  className="ml-3 w-1/6 btn btn-outline btn-error"
                  onClick={() =>
                    show(
                      !visible,
                      dispatch(
                        setPostSlice({
                          id: 0,
                          title: "",
                          body: "",
                        })
                      )
                    )
                  }
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
}
