import React, { useState, useEffect } from "react";
import { All } from "./Extra/All";

import { Loading } from "./Extra/Loading";

function App() {
  const [loading, setLoading] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);
  return (
    <div className="scroll-smooth">{!loading ? <Loading /> : <All />}</div>
  );
}

export default App;
