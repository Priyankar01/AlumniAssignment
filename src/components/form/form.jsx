import { colors } from "@mui/material";
import "./form.css";

export default function Form() {
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
              />

              {/* EMAIL */}
              <label for="email">Personal Email</label>
              <input
                className="items"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email.."
              />

              {/* NUMBER */}
              <label for="contact">Contact Number</label>
              <input
                className="items"
                type="number"
                id="number"
                name="number"
                placeholder="Your Contact.."
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
                />
              </label>

              {/* GENDER */}
              <select className="items" name="gender" id="gender">
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
              />

              {/* ADDRESS */}
              <label for="address">Corresponding Address</label>
              <input
                className="items"
                type="text"
                id="address"
                name="address"
                placeholder="Your Address.."
              />

              {/* COURSE */}
              <label htmlFor="course">Course</label>
              <select className="items" name="course" id="course">
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
              <p className="items notes">
                <span className="note">Note : </span>
                The above fields are compulsory to fill. Please check once again
                before moving forward.
              </p>

              {/* SUBMIT */}
              <p className="submit-btn">Submit</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
