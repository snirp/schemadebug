import React from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";

import schemaA from './schemaA'
import schemaB from './schemaB'

const log = (type) => console.log.bind(console, type);

render((
  <div>
    <Form 
      key="a"
      schema={schemaA}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")}
    />
    <div style={{margin: '100px'}}/>
    <Form 
      key="b"
      schema={schemaB}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")} 
    />
  </div>
), document.getElementById("root"));
