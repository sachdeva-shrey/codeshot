import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import CodeEditor from "./CodeEditor";

export default function QueryParamsRouter() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const QueryParamsDemo = () => {
  let query = useQuery();
  return (
    <div>
      <CodeEditor
        theme={query.get("theme")}
        fontSize={query.get("fontSize")}
        snippet={query.get("snippet")}
        font={query.get("font")}
        lang={query.get("lang")}
      />
    </div>
  );
};
