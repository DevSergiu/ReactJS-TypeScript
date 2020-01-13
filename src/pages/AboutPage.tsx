import React from "react";
import { useHistory } from "react-router-dom";
export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam
        doloremque vel quidem voluptatibus dolorem consequatur, error odit, in
        molestias optio nihil, eos fugiat veritatis cupiditate at officiis
        officia. Sunt!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        back to Todo list
      </button>
    </>
  );
};
