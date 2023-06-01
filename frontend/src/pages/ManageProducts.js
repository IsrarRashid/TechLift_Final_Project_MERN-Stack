import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Button from "../components/common/Button";

const ManageProducts = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const notifyCreate = () => toast.success("Task Created");
  const notifyDelete = () => toast.error("Task Deleted");

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get("/api/product/show-all");
      setData(data);
      console.log(data);
    };
    loadProducts();
  }, [name]);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/product/delete/${productId}`);
      // remove the deleted product from the data array
      setData((prevData) =>
        prevData.filter((product) => product._id !== productId)
      );
      notifyDelete();
      console.log("product deleted successfully");
    } catch (error) {
      console.error("failed to delete product", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // send a POST request to the server to add the product
      const response = await axios.post("/api/product/add", {
        name,
      });

      // handle the response and perform any necessary actions
      console.log(response.data);
      notifyCreate();
      // reset the form
      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-3 mb-5  col-lg-6">
      <div className="row">
        <div className="card">
          <h3 className="card-title m-4 mb-0">To do: </h3>
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <ul className="list-group todos-list">
                {data.map((d) => (
                  <li
                    key={d._id}
                    className="list-group-item d-flex justify-content-between"
                  >
                    {d.name}
                    <div className="d-flex">
                      <Link
                        to={`/update-product/${d._id}`}
                        className="btn btn-success me-2"
                      >
                        update
                      </Link>
                      <Button
                        onClick={() => handleDelete(d._id)}
                        className="btn btn-danger"
                        name="delete"
                      />
                    </div>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between mb-3 position-absolute top-100 end-0 start-0">
                  <label
                    htmlFor="floatingInputTask"
                    className="fw-bold ms-2 me-3 mt-2 fs-3 "
                  >
                    Task
                  </label>
                  <div className="form-floating mb-3 col">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputTask"
                      placeholder="task"
                      value={name}
                      onChange={handleNameChange}
                    />
                    <label htmlFor="floatingInputTask">
                      What do you need to do?
                    </label>
                  </div>
                </li>
              </ul>
              <Button
                name="Save Item"
                type="submit"
                className="btn btn-primary float-end my-3"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageProducts;
