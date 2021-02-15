import React from "react";
import styles from "./styles.module.css";

const CommentBox = ({ children }) => {
  return (
    <div className={styles.arrowBox}>
      <div className={styles.tip}>{children}</div>
    </div>
  );
};

export default CommentBox;
