import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ArrowRight from "../Icons/ArrowRight";
import ArrowLeft from "../Icons/ArrowLeft";
import Input from "./Input";
import Alert from "../Alert/Alert";
import Select from "./Select";
import Option from "./Option";
// import { db } from "../../db/firebase";
// import { collection, addDoc } from "firebase/firestore";
import "../../App.css";
import { db } from "../../db/firebase";
import { addDoc, collection } from "firebase/firestore";

const Form = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const [pmail, setPmail] = useState("");
  const [imail, setImail] = useState("");
  const [phone, setPhone] = useState("");
  const [cc, setCC] = useState("");
  const [cf, setCF] = useState("");
  const [check, setCheck] = useState(new Array(4).fill(false));
  const [git, setgit] = useState("");
  const roles = [
    "Teaching",
    "Problem Setting",
    "WebD/AppD",
    "Graphic Designing",
  ];
  const [rangeof, setRangeof] = useState(new Array(4).fill(1));
  const [total, setTotal] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleSliderChange = (index, value) => {
    const newSliderValues = [...rangeof];
    newSliderValues[index] = parseInt(value);
    setRangeof(newSliderValues);
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = check.map((item, index) =>
      index === position ? !item : item
    );
    setCheck(updatedCheckedState);
    const totalc = updatedCheckedState.reduce((c, currentState) => {
      if (currentState === true) {
        return c + 1;
      }
      return c;
    }, 0);

    setTotal(totalc);
  };

  const onSubmit = async (e) => {
    console.log("ok");
    // e.preventDefault();
    if (
      name === "" ||
      roll === "" ||
      branch === "" ||
      pmail === "" ||
      imail === "" ||
      phone === "" ||
      cc === "" ||
      cf === ""
    ) {
      setMessage("All the fields are mandatory");
      setShowAlert(true);
    } else if (check[2] && git === "") {
      setMessage("Github Handle cannot be empty");
      setShowAlert(true);
    }
    else {
      const data = {
        name: name,
        roll: roll,
        branch: branch,
        pmail: pmail,
        imail: imail,
        phone: phone,
        cc: cc,
        cf: cf,
        check: check,
        git: git,
        rangeof: rangeof,
        total: total,
      };
      try {
        await addDoc(collection(db,"candidates"),{
          name: name,
          roll: roll,
          branch: branch,
          pmail: pmail,
          imail: imail,
          phone: phone,
          cc: cc,
          cf: cf,
          check: check,
          git: git,
          rangeof: rangeof,
          total: total,
        });
        console.log("Data added to Firestore.");
      } catch (error) {
        console.error("Error adding data to Firestore:", error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <br></br>
      <div className="flex justify-center w-full h-full items-center">
        <div className="flex w-4/12 flex-col justify-center border-2 border-outline rounded-xl px-10">
          <div className="flex text-white justify-center items-center text-4xl font-bold mb-12 font-head mt-10">
            <ArrowRight />
            Form /
            <ArrowLeft />
          </div>
          <div>
            <Input type="text" placeholder="Name" setState={setName} />
            <Input type="text" placeholder="Roll Number" setState={setRoll} />
            <Select value={branch} setState={setBranch}>
              <Option value="Select Branch">Select Branch</Option>
              <Option value="Biotechnology">Biotechnology</Option>
              <Option value="Chemical">Chemical Engineeirng</Option>
              <Option value="Chemistry">Chemistry</Option>
              <Option value="Civil">Civil Engineering</Option>
              <Option value="Computer Science">
                Computer Science & Engineering
              </Option>
              <Option value="Electrical">Electrical Engineering</Option>
              <Option value="Electronics">
                Electronics & Communication Engineering
              </Option>
              <Option value="Mechanical">Mechanical Engineering</Option>
              <Option value="Metallurgy">
                Metallurgical & Materials Engineering
              </Option>
            </Select>
            <Input
              type="text"
              placeholder="Personal Email"
              setState={setPmail}
            />
            <Input
              type="text"
              placeholder="Institute Email"
              setState={setImail}
            />
            <Input type="text" placeholder="Phone Number" setState={setPhone} />
            <Input type="text" placeholder="Codechef Handle" setState={setCC} />
            <Input
              type="text"
              placeholder="Codeforces Handle"
              setState={setCF}
            />
            <div className="flex w-6/6 h-[35vh] flex-col justify-center items-center border-teal-200 border-2 border-outline rounded-xl">
              <h4 className="text-white">
                Select the domains you are applying for:
              </h4>
              <ul className="flex-col">
                {roles.map((name, index) => {
                  return (
                    <li key={index}>
                      <div className="flex text-white font-head mt-2">
                        <div className="pr-3">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            checked={check[index]}
                            onChange={() => handleOnChange(index)}
                          />
                        </div>
                        <label
                          htmlFor={`custom-checkbox-${index}`}
                          className="text-white"
                        >
                          {name}
                        </label>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <br></br>
            {check[2] && (
              <Input
                type="text"
                placeholder="Github Handle"
                setState={setgit}
              />
            )}
            {total > 1 && (
              <div className="flex w-6/6 h-[45vh] flex-col justify-center border-teal-200 border-2 border-outline rounded-xl ">
                <h4 className="text-teal-200">
                  Rank the domains <strong>distinctively</strong> you are
                  applying for, according to your priority :
                </h4>
                <br></br>
                <ul className="flex-col pl-6">
                  {roles.map((name, index) => {
                    return check[index] ? (
                      <li key={index}>
                        <div className="flex text-white font-head mt-2">
                          <div className="pr-3">
                            <label
                              htmlFor={`custom-checkbox-${index}`}
                              className="text-white"
                            >
                              {name}
                            </label>
                          </div>
                          <div key={index}>
                            <input
                              type="range"
                              min={1}
                              max={total}
                              step={1}
                              value={rangeof[index]}
                              onChange={(event) =>
                                handleSliderChange(index, event.target.value)
                              }
                              list={`values-${index}`}
                              className="slider custom-slider cursor-pointer bg-teal-200 hover:bg-blue-700"
                            />
                            <datalist id={`values-${index}`}>
                              <option value="1" label="1"></option>
                              <option value="2" label="2"></option>
                              <option value="3" label="3"></option>
                              <option value="4" label="4"></option>
                            </datalist>
                          </div>
                        </div>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            )}
            <br></br>
            <div className="w-full pb-12">
              <button
                className="w-5/6 bg-black h-[10vh] font-head text-teal-200 border-teal-200 font-semibold text-lg mb-3 border-2 border-outline rounded-xl"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {showAlert && <Alert message={message} setShowAlert={setShowAlert} />}
    </div>
  );
};

export default Form;
