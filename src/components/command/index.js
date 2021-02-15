import React, { useState } from "react";
import styles from "./styles.module.css";

const Command = ({ command, setCommand }) => {
  const [value, setValue] = useState('')

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setCommand(e.target.value);
      setValue('')
    }
  }

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <input
        onKeyDown={handleEnter}
        onChange={handleOnChange}
        value={value}
        placeholder="Type command here..."
        className={styles.input}
        type="tex"
      />
    </div>
  );
};

export default Command;
