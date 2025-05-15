
import React from "react";
import Button from "react-bootstrap/Button";

const MidThree = () => {
  return (
    <div className="midthree">


      <div className="img-massage-three">
        <img
          src="https://jospa-sa.com/wp-content/uploads/2020/12/woman-relaxing-spa.webp"
          alt="ms"
        />
      </div>

      <div className="packets">


        <div className="root-type">
          <h2>  فوائد خدمات المساج </h2>
        </div>
        <div className="type">
          <img
            src="https://img.icons8.com/?size=100&id=Dt3vlon2kc44&format=png&color=000000"
            className="trueimg"
            alt="as"
          />
          <p>
            <span>تخفيف التوتر والإجهاد</span>
             : توفير الراحة النفسية والجسدية.
          </p>
        </div>
        <div className="type">
          <img
            src="https://img.icons8.com/?size=100&id=Dt3vlon2kc44&format=png&color=000000"
            className="trueimg"
            alt="as"
          />
          <p>
    <span>تحسين الدورة الدموية</span>: دعم صحة القلب وتجديد الطاقة.
          </p>{" "}
        </div>
        <div className="type">
          <img
            src="https://img.icons8.com/?size=100&id=Dt3vlon2kc44&format=png&color=000000"
            className="trueimg"
            alt="as"
          />
          <p>
 <span>تعزيز الصحة الجسدية</span>: تخفيف الآلام وتحسين المرونة.
          </p>{" "}
        </div>
              <div className="type">
          <img
            src="https://img.icons8.com/?size=100&id=Dt3vlon2kc44&format=png&color=000000"
            className="trueimg"
            alt="as"
          />
          <p>
      تجربة استجمام فريدة: وقت خاص للعناية بالنفس والراحة.
          </p>
        </div>

 
        <div className="typebtn">
          <Button>احجزي موعدك</Button>
        </div>
      </div>
    </div>
  );
};

export default MidThree;
