import React from "react";
const WithClass = (WrapperdComponent, className) => {
  return props => (
    <div className={className}>
      <WrapperdComponent {...props} />
    </div>
  );

  return;
};

export default WithClass;
