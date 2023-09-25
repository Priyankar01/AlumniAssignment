import "./landing.css";

export default function Landing() {
  return (
    <>
      <section id="home">
        <div className="main-section">
          <div className="left-section">
            <p className="supporting-lines">Data Collection Bank For,</p>
            <h1 className="heading">Christ Alumni Association.</h1>
            <p className="supporting-lines">
              Fill out the from to stay connected with us.
            </p>
            <p className="alumni-btn-landing">
              <a href="#form">Alumni Form</a>
            </p>
          </div>
          <div className="right-section">
            {" "}
            <img src="https://placehold.co/400x400" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
