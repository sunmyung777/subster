import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";

import React, { useState, useEffect } from 'react';

function Notion(props) {
  const [response, setResponse] = useState({});
  
  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${props.id}`)
      .then(res => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, [props.id])
  
  return (
    <div className="App">
        <NotionRenderer
          blockMap={response}
          fullPage={true}
        />
    </div>
  );
}

export default Notion;