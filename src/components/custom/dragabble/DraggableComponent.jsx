import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const DraggableComponent = ({
  children,
  onPositionChange,
  initialPosition,
  isDisabled = true,
}) => {
  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleStop = (e, data) => {
    setIsDragging(false); // Set dragging state to false on stop
    if (onPositionChange) {
      onPositionChange({ x: data.x, y: data.y });
    }
  };

  return (
    <Draggable
      bounds="parent"
      disabled={isDisabled}
      position={initialPosition}
      onStart={() => setIsDragging(true)}
      onStop={handleStop}
    >
      <div
        ref={draggableRef}
        style={{
          cursor: isDisabled ? "normal" : "pointer",
          border: isDragging ? "2px dashed blue" : "none",
          backgroundColor: isDragging ? "lightgray" : "transparent",
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Draggable>
  );
};

export default DraggableComponent;
