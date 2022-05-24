import React from "react";

const Google = () => {
  const styles = {
    first: "#4280ef",
    second: "#34a353",
    third: "#f6b704",
    fourth: "#e54335",
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.48 68.85" className="w-6">
      <path
        d="M67.48,35.25a43.61,43.61,0,0,0-.6-7H34.41V41.55H53A15.67,15.67,0,0,1,46.11,52l11.1,8.63C63.73,54.53,67.48,45.68,67.48,35.25Z"
        style={{ fill: styles.first }}
      />
      <path
        d="M34.41,68.85c9.3,0,17.1-3.07,22.8-8.32L46.11,52A20.89,20.89,0,0,1,15.05,41.1L3.66,49.88A34.4,34.4,0,0,0,34.41,68.85Z"
        style={{ fill: styles.second }}
      />
      <path
        d="M15.05,41a21,21,0,0,1,0-13.2L3.66,19a34.44,34.44,0,0,0,0,30.9L15.05,41Z"
        style={{ fill: styles.third }}
      />
      <path
        d="M34.41,13.65a18.8,18.8,0,0,1,13.2,5.18l9.82-9.9A33.17,33.17,0,0,0,34.41,0,34.39,34.39,0,0,0,3.66,19l11.39,8.85A20.61,20.61,0,0,1,34.41,13.65Z"
        style={{ fill: styles.fourth }}
      />
    </svg>
  );
};

export default Google;
