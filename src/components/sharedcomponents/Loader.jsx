import React from "react";
import LoaderImage from "@assets/logo/sodaclick-logo.png";

export default function Loader() {
  return (
    <>
      <div className="loading-style">
        <img src={LoaderImage} alt="Loading..." />
      </div>
    </>
  );
}
