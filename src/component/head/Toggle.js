import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function Toggle() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="toggle">
      <div>
        {isMobile && (
          <>
            <Button variant="light" onClick={handleShow} className="toggleBtn">
              ☰
            </Button>

            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              className="offcanv"
            >
         <Offcanvas.Header className="position-relative" dir="rtl">
  {/* Custom content */}
  <div className="NavSide">
    <h5 className="m-0">مساج قطن</h5>
    <img src="https://i.imgur.com/mA5eaLZ.jpeg" className="imgNavLogo" alt="Logo" />
  </div>

  {/* Manually add the close button */}
  <button
    type="button"
    className="btn-close position-absolute top-0 start-0 m-3"
    aria-label="Close"
    onClick={handleClose}
  ></button>
  
</Offcanvas.Header>


              <Offcanvas.Body dir="rtl">
                <ul>

                  <li><Link to="/">الرئيسية</Link></li>
                  <li><Link to="/about">من نحن</Link></li>
                  <li><Link to="/contact">اتصل بنا</Link></li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        )}
      </div>

      <div className="secondTow">
        <div className="icon">
          <img
            src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000"
            alt="ca"
          />
        </div>

        <div className="icon">
          <img
            src="https://img.icons8.com/?size=100&id=11727&format=png&color=000000"
            alt="ac"
          />
        </div>
      </div>
    </div>
  );
}

export default Toggle;
