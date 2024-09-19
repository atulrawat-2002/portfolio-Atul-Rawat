import React from "react";
import Button from "../node_modules/@material-ui/core/IconButton";

const Footer = () => {
  return (
    <>
      <footer className=" bg-light text-center mt-2">
        <p>
          &copy; 2023 AtulRawat. All Rights Reserved | Terms and Conditions
          applied.
        </p>
        <p>
          <span>
            <Button />
          </span>
          G-mail : dr6217811@gmail.com
        </p>
        <p>Phone : 8750238576</p>
      </footer>
    </>
  );
};

export default Footer;
