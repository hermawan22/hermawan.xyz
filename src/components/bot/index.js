import React from "react";
import ThumbnailBot from "../thumbnail";
import CommentBox from "../commentBox";
import styles from "./styles.module.css";

const LandingView = ({ content }) => {
  return (
    <div className={styles.wrapper}>
      <div style={{ width: "5%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ThumbnailBot />
      </div>
      <div style={{ width: "90%", display: 'flex', alignItems: 'center' }}>
        <CommentBox>
          <div>{content}</div>
        </CommentBox>
      </div>
    </div>
  );
};

export default LandingView;
