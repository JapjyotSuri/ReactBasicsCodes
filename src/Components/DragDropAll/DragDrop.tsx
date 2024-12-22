import React, { useState } from "react";

const DragDrop = () => {
  const [draggedImage, setDraggedImage] = useState<string>(
    "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image1"
  );
  const [isDropped, setIsDropped] = useState(false);
  //event.dataTransfer is an interface that is part of the drag-and-drop API. It represents the transfer of data during a drag-and-drop operation.
  //.effectAllowed specifies the type of drag-and-drop operation that is allowed
  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    setDraggedImage(
      "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image1"
    );
    e.dataTransfer.effectAllowed = "move"; //move here indicates that the image being dragged is intended to be moved from its original position to new position
    e.dataTransfer.dropEffect='copy'//this means that a copy of the data will be made at the drop location and orignal data will remain intact
    e.dataTransfer.setData('text/plain','This is a draggable text')//here we are storing the  data insite e.dataTransfer
  }
  //In the below code React.dragEvent defines the type of event as drag event specific to react
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const data=e.dataTransfer.getData('text/plain');//here we are getting the value that has been stored while the image had started dragging
    alert(data)
    setIsDropped(true);
  }
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault(); //By default, if we drag an image over a drop zone, the browser may attempt to open the image in a new tab or window instead of allowing it to be dropped into the specified area.
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={draggedImage}
        alt="dropped"
        onDragStart={(e) => handleDragStart(e)}
      ></img>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {!isDropped && <h1>Drop here</h1>}
        {isDropped && <img src={draggedImage} alt="dropped"></img>}
      </div>
    </div>
  );
};

export default DragDrop;
