import React from "react";
import "./MagicShimmer.css";

const MagicShimmer = (props) => {
  const {
    shape = "rectangle",
    width = "100%",
    height = "20px",
    animate = true,
    speed = 2,
    theme = "dark",
    layout = [],
  } = props;

  const layoutStructure = layout.map((item, index) => (
    <div
      key={index}
      className={`hole  ${animate ? "animate" : ""}`}
      style={{
        width: item.width || "100%",
        height: item.height || "20px",
        margin: item.margin || "10px",
      }}
    />
  ));
  return (
    <div className="back flex justify-center items-center min-w-max">
      <div className="base">
        {layoutStructure.length > 0 && layoutStructure}
      </div>
    </div>
  );
};

export default MagicShimmer;
