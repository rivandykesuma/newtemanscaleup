import React from "react";

function withDataSlideShow(OriginalComponent: any) {
  return (props: any) => {
    return <OriginalComponent {...props} />;
  };
}

export default withDataSlideShow;
