"use client";
import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageMap = ({ imageUrl, points }) => {
  const realScale = 950 / 10000;
  const handlePointClick = (point) => {
    console.log("Clicked point:", point);
  };

  return (
    <div style={{ width: 950, height: 950 }}>
      <TransformWrapper
      >
        <TransformComponent>
          <div style={{ position: "relative" }}>
            <img
              src={imageUrl}
              alt="Map"
              style={{ width: "100%", height: "100%" }}
            />
            {points.map((point) => (
              <div
                key={point.sta_id}
                title={point.title}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: (point.y * realScale)  ,
                  left: (point.x * realScale) ,
                  width: (point.r * realScale) ,
                  height: (point.r * realScale) ,
                  background: "red",
                  borderRadius: "50%",
                }}
                onClick={() => handlePointClick(point)}
              ></div>
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ImageMap;
