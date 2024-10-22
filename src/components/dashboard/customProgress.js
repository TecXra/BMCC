import React from 'react';
import styles from '../../styles/dashboard.module.css'
function CustomProgress({ value }) {
  // Calculate the angle for the pointer (in degrees)
  // Convert value percentage to angle (0 to 180 degrees for top half of circle)
  const pointerPosition = (value / 100) * 180;

  return (
    <div className={styles.multigraph}>
      <div className={styles.tooltip_container}>
        <span className={styles.tooltip}>
        YTD Used<br /><p>{value}<span>%</span></p>
       </span>
      </div>
      
      <span className={styles.pointer_container}>
        <span className={styles.graph}></span>
        <span
          className={styles.pointer}
          style={{ transform: `rotate(${pointerPosition}deg) translateY(-135px)` }} // Adjust translateY to align with the top
        ></span>
      </span>
    </div>
  );
}

export default CustomProgress;