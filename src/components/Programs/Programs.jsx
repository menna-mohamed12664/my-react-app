import React from "react";
import "./Programs.css";

function Programs() {
  return (
    <div className="programs"  name={"Programs"}>
      <div className="program">
        <img src="src/assets/WhatsApp Image 2025-10-06 at 18.08.38_ef124727.jpg" alt="" />
        <div className="caption">
          <img src="src/assets/icon 1.svg" alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="src/assets/IMG-20251006-WA0005.jpg" alt="" />
        <div className="caption">
          <img src="src/assets/icon 2.svg" alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="src/assets/WhatsApp Image 2025-10-06 at 18.08.38_5e35a1d6.jpg" alt="" />
        <div className="caption">
          <img src="src/assets/icon 3.svg" alt="" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
