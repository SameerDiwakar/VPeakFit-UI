import React, { useState } from "react";
import "./UserInput.css";

const UserInput = () => {
  const [user, setUser] = useState({
    gender: " ",
    age_type: "",
    age: " ",
    weight: " ",
    height: " ",
    physical_activity: " ",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <section className="main-container">
        <div className="calculate-content">
          <h2 className="calculate-title">Calculate your diet here</h2>
          <form className="calculate-diet" id="calculate-diet">
            <div className="calculate-group">
              <h3 className="sub-title">Gender</h3>
              <select
                className="input-box"
                name="gender"
                value={user.name}
                onChange={handleInputs}
                id="gender"
              >
                <option value="select">-Select-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>
            </div>

            <div className="calculate-group">
              <h3 className="sub-title">Age type</h3>
              <select
                className="input-box"
                name="age_type"
                value={user.name}
                onChange={handleInputs}
                id="age_type"
              >
                <option value="select">-Select-</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </div>

            <div className="calculate-group">
              <h3 className="sub-title">Age</h3>
              <input
                name="age"
                value={user.name}
                onChange={handleInputs}
                className="input-box"
                type="number"
                min="1"
                max="120"
                id="age"
                placeholder="Age in years"
              />
            </div>

            <div className="calculate-group">
              <h3 className="sub-title">Weight</h3>
              <input
                name="weight"
                value={user.name}
                onChange={handleInputs}
                className="input-box"
                type="number"
                min="1"
                max="200"
                id="weight"
                placeholder="Weight in KG"
              />
            </div>

            <div className="calculate-group">
              <h3 className="sub-title">Height</h3>
              <input
                name="height"
                value={user.name}
                onChange={handleInputs}
                className="input-box"
                type="number"
                min="1"
                max="220"
                id="height"
                placeholder="Height in cm"
              />
            </div>

            <div className="calculate-group">
              <h3 className="sub-title">Physical activity level</h3>
              <select
                className="input-box"
                name="physical_activity"
                id="physical_activity"
                value={user.name}
                onChange={handleInputs}
              >
                <option value="select">-Select-</option>
                <option value="none">None</option>
                <option value="normal">Norml workout</option>
                <option value="moderate">Moderate workout</option>
                <option value="heavy">Heavy workout</option>
              </select>
            </div>

            <div></div>

            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserInput;
