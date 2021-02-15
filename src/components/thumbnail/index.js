import React from "react";
import Image from "next/image";
import styles from './styles.module.css';

const ThumbnailBot = () => {
  return (
    <Image
      className={styles.image}
      src="/nino.jpeg"
      width={50}
      height={50}
    />
  );
};

export default ThumbnailBot;
