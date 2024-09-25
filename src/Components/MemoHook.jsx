import React, { useMemo, useState } from "react";
import { initialItems } from "../utils/MemoData";

const MemoHook = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // const selectedItem=items.find((item) => item.isSelected === true)
  //when we write like in the above code this the website lags when the button is clicked continously and the count gets updated as this is executed everytime the site gets re-rendered

  //By using useMemo hook we can get rid of this issueby only running the above code if there is change in items
  const selectedItem = useMemo(//after using useMemo hook even if we click the button countiously the site will not lag and the count will increase smoothly
    () => items.find((item) => item.isSelected === true),
    [items]
  );
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem ? selectedItem.id : "No item selected"} </h1>
      <button onClick={() => setCount((prev) => prev+1)}>Increment</button>
    </div>
  );
};

export default MemoHook;
