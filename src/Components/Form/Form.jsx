import React, { useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import ArrowRight from "../Icons/ArrowRight";
import ArrowLeft from "../Icons/ArrowLeft";
import Input from "./Input";
import Alert from "../Alert/Alert";
import Select from "./Select";
import Option from "./Option";
import { db } from "../../db/firebase";
import { collection, addDoc } from "firebase/firestore";
import "../../App.css";
import validator from "validator";
import homepageGif from "../../Assets/homepage_gif.gif";

const Form = () => {
  const errorRef = useRef(null);
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
  const [drive, setDrive] = useState("");
  const values = [1, 2, 3, 4];

  const [isValidname, setIsValidname] = useState(true);
  const [isValidroll, setIsValidroll] = useState(true);
  const [isValidbranch, setIsValidbranch] = useState(true);
  const [isValidpmail, setIsValidpmail] = useState(true);
  const [isValidimail, setIsValidimail] = useState(true);
  const [isValidphone, setIsValidphone] = useState(true);
  const [isValidcc, setIsValidcc] = useState(true);
  const [isValidcf, setIsValidcf] = useState(true);
  const [isValidgit, setIsValidgit] = useState(true);
  const [isValidcheck, setIsValidcheck] = useState(true);
  const [isValidrank, setIsValidrank] = useState(true);
  const [isValiddrive, setIsValiddrive] = useState(true);

  const scrollToError = () => {
    if (errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
    if (check[2]) {
      setIsValidgit(true);
    }
    if (check[3]) {
      setIsValiddrive(true);
    }
    setIsValidrank(true);
    const totalc = updatedCheckedState.reduce((c, currentState) => {
      if (currentState === true) {
        return c + 1;
      }
      return c;
    }, 0);
    setTotal(totalc);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      setIsValidname(false);
      setMessage("Please fill the form correctly");
      setShowAlert(true);
      setTimeout(()=>{
        scrollToError();
      },0);
      return;
    }
    setIsValidname(true);

    if (roll === "") {
      setIsValidroll(false);
      setMessage("Please fill the form correctly");
      setShowAlert(true);
      setTimeout(()=>{
        scrollToError();
      },0);
      return;
    }
    setIsValidroll(true);

    if (branch === "") {
      setIsValidbranch(false);
      setMessage("Please fill the form correctly");
      setShowAlert(true);
      setTimeout(()=>{
        scrollToError();
      },0);
      return;
    }
    setIsValidbranch(true);

    if (!validator.isEmail(pmail)) {
      setIsValidpmail(false);
      setMessage("Please fill the form correctly");
      setShowAlert(true);
      setTimeout(()=>{
        scrollToError();
      },0);
      return;
    }
    setIsValidpmail(true);

    const [, domain] = imail.split("@");
    const isValidDomain = domain === "btech.nitdgp.ac.in";
    const isValidEmail = validator.isEmail(imail);
    if (!isValidDomain || !isValidEmail) {
      setIsValidimail(false);
      setMessage("Please fill the form correctly");
      setShowAlert(true);
      setTimeout(()=>{
        scrollToError();
      },0);
      return;
    }
    setIsValidimail(true);

    if (!validator.isMobilePhone(phone)) {
      setIsValidphone(false);
      setMessage("Please fill the form correctly");
      setShowAlert(true);
      setTimeout(()=>{
        scrollToError();
      },0);
      return;
    }
    setIsValidphone(true);

    if (!validator.isURL(cc)) {
      setIsValidcc(false);
      setMessage("Please fill the form correctly");
      setShowAlert(true);
      setTimeout(()=>{
        scrollToError();
      },0);
      return;
    }
    setIsValidcc(true);

    if (!validator.isURL(cf)) {
      setIsValidcf(false);
      setMessage("Please fill the form correctly");
      setShowAlert(true);
      setTimeout(()=>{
        scrollToError();
      },0);
      return;
    }
    setIsValidcf(true);

    if (total === 0) {
      setIsValidcheck(false);
      setMessage("Please fill the form correctly");
      setShowAlert(true);
      setTimeout(()=>{
        scrollToError();
      },0);
      return;
    }
    setIsValidcheck(true);
    const totalc = check.reduce((c, currentState) => {
      if (currentState === true) {
        return c + 1;
      }
      return c;
    }, 0);
    setTotal(totalc);

    if (check[2]) {
      if (git === "" || !validator.isURL(git)) {
        setIsValidgit(false);
        setMessage("Please fill the form correctly");
        setShowAlert(true);
        setTimeout(()=>{
          scrollToError();
        },0);
        return;
      }
      setIsValidgit(true);
    }
    if (check[3]) {
      if (drive === "" || !validator.isURL(drive)) {
        setIsValiddrive(false);
        setMessage("Please fill the form correctly");
        setShowAlert(true);
        setTimeout(()=>{
          scrollToError();
        },0);
        return;
      }
      setIsValiddrive(true);
    }
    if (total > 1) {
      const uniqueValues = [...new Set(rangeof)];
      if (uniqueValues.length !== total) {
        setIsValidrank(false);
        setMessage("Please fill the form correctly");
        setShowAlert(true);
        setTimeout(()=>{
          scrollToError();
        },0);
        return;
      }
    }
    setIsValidrank(true);

    try {
      setShowAlert(false);
      await addDoc(collection(db, "candidates"), {
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
        drive: drive,
        rangeof: rangeof,
        total: total,
      });
      console.log("Data added to Firestore.");
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="flex pt-48 justify-center w-full h-full items-center bg-cover bg-opacity-40"
        style={{ backgroundImage: `url(${homepageGif})` }}
      >
        <div className="flex w-4/12 flex-col justify-center border-2 border-outline rounded-xl px-10 backdrop-filter backdrop-blur-lg">
          <div className="flex text-white justify-center items-center text-4xl font-bold mb-12 font-head mt-10">
            <ArrowRight />
            Form /
            <ArrowLeft />
          </div>
          <div>
            <Input type="text" placeholder="Name" setState={setName} />
            {!isValidname && (
              <p ref={errorRef} className="text-red-500 pl-6 mb-6">
                Field cannot be empty
              </p>
            )}
            <Input type="text" placeholder="Roll Number" setState={setRoll} />
            {!isValidroll && (
              <p ref={errorRef} className="text-red-500 pl-6 mb-6">Field cannot be empty</p>
            )}
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
            {!isValidbranch && (
              <p ref={errorRef} className="text-red-500 pl-6 mb-6">Please select a branch</p>
            )}
            <Input
              type="text"
              placeholder="Personal Email"
              setState={setPmail}
            />
            {!isValidpmail && (
              <p ref={errorRef} className="text-red-500 pl-6 mb-6">
                Please enter a valid email address
              </p>
            )}
            <Input
              type="text"
              placeholder="Institute Email"
              setState={setImail}
            />
            {!isValidimail && (
              <p ref={errorRef} className="text-red-500 pl-6 mb-6">
                Please enter your instititute email id
              </p>
            )}
            <Input type="text" placeholder="Phone Number" setState={setPhone} />
            {!isValidphone && (
              <p ref={errorRef} className="text-red-500 pl-6 mb-6">
                Please enter a valid phone number
              </p>
            )}
            <div className="flex w-6/6 h-[30vh] flex-col bg-black justify-center items-center border-teal-200 border-2 border-outline rounded-xl">
              <h4 className="text-teal-200 mb-4">
                To set up your Codechef Account log on to{" "}
                <a href="https://www.codechef.com/">
                  https://www.codechef.com/
                </a>
                :
              </h4>
              <Input
                type="text"
                placeholder="Codechef Handle"
                setState={setCC}
              />
            </div>
            {!isValidcc && (
              <p ref={errorRef} className="text-red-500 pl-6 mt-2">Please enter a valid URL</p>
            )}
            <br></br>
            <div className="flex w-6/6 h-[30vh] flex-col bg-black justify-center items-center border-teal-200 border-2 border-outline rounded-xl">
              <h4 className="text-teal-200 mb-4">
                To set up your Codeforces Account log on to{" "}
                <a href="https://codeforces.com/register">
                  https://codeforces.com/register
                </a>
                :
              </h4>
              <Input
                type="text"
                placeholder="Codeforces Handle"
                setState={setCF}
              />
            </div>
            {!isValidcf && (
              <p ref={errorRef} className="text-red-500 pl-6 mt-2">Please enter a valid URL</p>
            )}
            <br></br>
            <div className="flex w-6/6 h-[35vh] bg-black flex-col justify-center items-center border-teal-200 border-2 border-outline rounded-xl">
              <h4 className="text-teal-200 ">
                Select the domains you are applying for:
              </h4>
              <ul className="flex-col">
                {roles.map((name, index) => {
                  return (
                    <li key={index}>
                      <div className="flex text-white font-head mt-2">
                        <div className="custom-checkbox pr-3">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            checked={check[index]}
                            onChange={() => handleOnChange(index)}
                          />
                        </div>
                        <label htmlFor={`custom-checkbox-${index}`}>
                          {name}
                        </label>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            {!isValidcheck && (
              <p ref={errorRef} className="text-red-500 pl-6 mt-2">
                Please choose atleast 1 option
              </p>
            )}
            <br></br>
            {check[2] && (
              <div>
                <div className="flex w-6/6 h-[25vh] bg-black flex-col justify-center items-center border-teal-200 border-2 border-outline rounded-xl">
                  <h4 className="text-teal-200 mt-4 mb-2">
                    Provide the link to your Github profile:
                  </h4>
                  <Input
                    type="text"
                    placeholder="Github Handle"
                    setState={setgit}
                  />
                </div>
                {!isValidgit && (
                  <p ref={errorRef} className="text-red-500 pl-6 mt-2">
                    Please enter a valid URL
                  </p>
                )}
                <br></br>
              </div>
            )}
            {check[3] && (
              <div>
                <div className="flex w-6/6 h-[25vh] bg-black flex-col justify-center items-center border-teal-200 border-2 border-outline rounded-xl">
                  <h4 className="text-teal-200 mt-4 mb-2">
                    Provide the drive link to your artworks:
                  </h4>
                  <Input
                    type="text"
                    placeholder="Drive Link"
                    setState={setDrive}
                  />
                </div>
                {!isValiddrive && (
                  <p ref={errorRef} className="text-red-500 pl-6 mt-2">
                    Please enter a valid URL
                  </p>
                )}
                <br></br>
              </div>
            )}
            {total > 1 && (
              <div>
                <div className="flex w-6/6 h-[48vh] bg-black flex-col justify-center border-teal-200 border-2 border-outline rounded-xl ">
                  <h4 className="text-teal-200 mt-3">
                    Rank these domains <strong>distinctively</strong>, according
                    to your priority :
                  </h4>
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
                                className="slider custom-slider"
                              />
                              <datalist id={`values-${index}`}>
                                {values.slice(0, total).map((value, i) => (
                                  <option key={i} value={value} label={value} />
                                ))}
                              </datalist>
                            </div>
                          </div>
                        </li>
                      ) : null;
                    })}
                  </ul>
                  <br></br>
                </div>
                {!isValidrank && (
                  <p ref={errorRef} className="text-red-500 pl-6 mb-6">
                    Please rank your domains distinctively
                  </p>
                )}
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
