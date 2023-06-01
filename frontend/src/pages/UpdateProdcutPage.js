import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const UpdateProductPage = ({ productId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const { id } = useParams();
  const notifyUpdate = () => toast.success("Task Updated");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
  };
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // let fData = fetchProduct.find((x) => x._id == id);
        const response = await axios.get(
          `/api/product/get-single-product/${id}`
        );
        const productData = response.data;

        console.log(productData);
        setName(productData.name);
        setDescription(productData.description);
        setActivityType(productData.activityType);
        setDuration(productData.duration);
        setDate(productData.date.substring(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // send a post request to the server to udpate the product
      const response = await axios.post(`/api/product/update/${id}`, {
        name,
        description,
        activityType,
        duration,
        date,
      });
      notifyUpdate();
      // reset the form
      setName("");
      setDescription("");
      setActivityType("");
      setDuration("");
      setDate("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-3 col-lg-6 border p-3 bg-light">
      <div className="row">
        <h1 className="text-center mb-3">Exercise Activity Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="form-control"
              id="floatingInputName"
              placeholder="name"
            />
            <label htmlFor="floatingInputName">Name</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingDescription2"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="floatingDescription2">description</label>
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="floatingSelectActivityType"
              aria-label="Floating label select example"
              value={activityType}
              onChange={handleActivityTypeChange}
            >
              <option defaultValue>Select an Activity Type</option>
              <option value="run">Run</option>
              <option value="bike">Bicycle Ride</option>
              <option value="swim">Swim</option>
              <option value="walk">Walk</option>
              <option value="hike">Hike</option>
            </select>
            <label htmlFor="floatingSelectActivityType">Activity Type</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingInputDuration"
              placeholder="name"
              value={duration}
              onChange={handleDurationChange}
            />
            <label htmlFor="floatingInputDuration">Duration (in minutes)</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="floatingInputDate"
              placeholder="name"
              value={date}
              onChange={handleDateChange}
            />
            <label htmlFor="floatingInputDate">Date</label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary ">
              Update
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProductPage;
