import React, { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Input from "../components/common/Input";
import Select from "../components/common/Select";
import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";

const AddProductPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const notifyCreate = () => toast.success("Task Created");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // send a POST request to the server to add the product
      const response = await axios.post("/api/product/add", {
        name,
        description,
        activityType,
        duration,
        date,
      });

      // handle the response and perform any necessary actions
      console.log(response.data);
      notifyCreate();
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
    <div className="container col-lg-6 border p-2 bg-light">
      <div className="row">
        <h1 className="text-center mb-3">Exercise Activity Form</h1>
        <form onSubmit={handleSubmit}>
          <Input
            value={name}
            onChange={handleNameChange}
            id="floatingInputName"
            placeholder="Name"
            label="Name"
          />
          <TextArea
            name="Description"
            value={description}
            onChange={handleDescriptionChange}
            id="floatingDescription2"
            boxHeight="7rem"
          />
          <Select
            id="floatingSelectActivityType"
            value={activityType}
            onChange={handleActivityTypeChange}
            options={["Run", "Bicycle Ride", "Swim", "Walk", "Hike"]}
            name="Activity Type"
          />
          <Input
            type="number"
            id="floatingInputDuration"
            placeholder="Duration (in minutes)"
            value={duration}
            onChange={handleDurationChange}
            label="Duration (in minutes)"
          />
          <Input
            type="date"
            id="floatingInputDate"
            placeholder="Date"
            value={date}
            onChange={handleDateChange}
            label="Date"
          />
          <div className="text-center">
            <Button name="Submit" type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProductPage;
