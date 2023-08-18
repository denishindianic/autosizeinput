import { useRef, useState } from "react";

import useAutosizeTextArea from "./useAutosizeTextArea";

import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };

  return (
    <div className="App">
      <label htmlFor="review-text">Review:</label>
      <textarea
        id="review-text"
        onChange={handleChange}
        placeholder="What did you like or dislike?"
        ref={textAreaRef}
        rows={1}
        value={value}
      />
    </div>
  );
}
