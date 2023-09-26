import { colors } from "@mui/material";
import "./form.css";
import { useState } from "react";

import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Form() {

  const [data, setData] = useState({
    name: "", 
    email: "",
    number: "", 
    dob: "", 
    gender: "", 
    regNo: "", 
    address: "",
    course: "", 
    batch: ""
  })
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 

  const submit = (e) => {
    e.preventDefault(); 

    if(data.name === "" || data.email === "" || data.number === "") {
      setError("Fill all the fields"); 
      return; 
    }

    try {
      addDoc(collection(db, "alumni"), data); 
      setError(""); 
      setSuccess("Data added successfully"); 
    } catch (e) { 
      console.log(e);
      setSuccess(""); 
      setError(e);
    }
  }



  return (
    <>
      <section id="form">
        <div className="form-section">
          <form action="" className="main-form">
            <div className="form-item">
              {/* NAME */}
              <label for="name">Name</label>
              <input
                className="items"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name.."
                onChange={e => setData({...data, name:e.target.value})}
              />

              {/* EMAIL */}
              <label for="email">Personal Email</label>
              <input
                className="items"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email.."
                onChange={e => setData({...data, email:e.target.value})}
              />

              {/* NUMBER */}
              <label for="contact">Contact Number</label>
              <input
                className="items"
                type="number"
                id="number"
                name="number"
                placeholder="Your Contact.."
                onChange={e => setData({...data, number:e.target.value})}
              />

              {/* DOB */}
              <label for="DOB">
                Date Of Birth:
                <input
                  className="items"
                  type="date"
                  id="DOB"
                  name="DOB"
                  placeholder="Your Name.."
                  onChange={e => setData({...data, dob:e.target.value})}
                />
              </label>

              {/* GENDER */}
              <select className="items" name="gender" id="gender" onChange={e => setData({...data, gender:e.target.value})}>
                <option value="select">Gender</option>
                <option value="male">Male</option>
                <option value="femal">Female</option>
              </select>

              {/* REG NO */}
              <label for="reg-no">Registration Number</label>
              <input
                className="items"
                type="number"
                id="reg-no"
                name="reg-no"
                placeholder="Your Registration Number.."
                onChange={e => setData({...data, regNo:e.target.value})}
              />

              {/* ADDRESS */}
              <label for="address">Corresponding Address</label>
              <input
                className="items"
                type="text"
                id="address"
                name="address"
                placeholder="Your Address.."
                onChange={e => setData({...data, address:e.target.value})}
              />

              {/* COURSE */}
              <label htmlFor="course">Course</label>
              <select className="items" name="course" id="course" onChange={e => setData({...data, course:e.target.value})}>
                <option value="course">Course</option>
                <option value="bca">BCA</option>
                <option value="mca">MCA</option>
                <option value="bba">BBA</option>
                <option value="mba">MBA</option>
              </select>

              {/* PASSING YEAR */}
              <label htmlFor="passing">Passing Out Batch</label>
              <input
                className="items"
                type="number"
                id="passing"
                name="passing"
                placeholder="Your Passing Year.."
                onChange={e => setData({...data, batch:e.target.value})}
              />

              {/* PHOTO */}
              <label htmlFor="photo">Your Photograph</label>
              <input className="uploads" type="file" id="photo" name="photo" />

              {/* MARKSHEET */}
              <label htmlFor="marksheet">Your Marksheet</label>
              <input
                className="uploads"
                type="file"
                id="marksheet"
                name="marksheet"
              />

              {/* NOTE */}
              {/* <p className="items notes">
                <span className="note">Note : </span>
                The above fields are compulsory to fill. Please check once again
                before moving forward.
              </p> */}

              {/* SUBMIT */}
              {success && <>
                <p style={{ color: "green", textAlign: "center" }}>{success}</p>
              </>}
              {error && <>
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              </>}
              <p className="submit-btn" onClick={submit} type='submit'>Submit</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
