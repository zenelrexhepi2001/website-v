import React, { useEffect } from "react";

const AddFace = () => {
  useEffect(() => {
    document.title = `Voltox Add Face`;
  });
  return (
    <>
      <iframe
        src="https://v-instance-1-m.herokuapp.com/login/oauth/authorize?clientId=cli_a9ef1bc967494f7d8daf8da932c890f1"
        title="Voltox Add Face"
        width="100%"
        style={{ minHeight: "100vh", border: "none",maxWidth: '100%' }}
      />
    </>
  );
};

export default AddFace;
