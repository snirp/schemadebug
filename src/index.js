import React from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";

import schemaA from './schemaA'
import schemaB from './schemaB'

const log = (type) => console.log.bind(console, type);

const formData = {
  select1: "option1A",
  option1A: {
    select2: "option2A"
  }
}

render((
  <div>
    <h1>Form A</h1>
    <Form 
      key="a"
      schema={schemaA}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")}
    />
    <h2>Form B</h2>
    <Form 
      key="b"
      schema={schemaB}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")} 
    />
    <h2>Form C</h2>
    <Form 
      key="c"
      formData={formData}
      schema={schemaB}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")} 
    />
  </div>
), document.getElementById("root"));
