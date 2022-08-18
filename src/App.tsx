// import styled from 'styled-components';
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Tags from "views/tags";
import Money from "views/money";
import Statistics from "views/statistics";
import NoMatch from "views/NoMatch";
import styled from "styled-components";
const AppWrapper = styled.div`
  color: #333;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/tags" element={<Tags />}>

          </Route>
          <Route path="/money" element={<Money />}>

          </Route>
          <Route path="/statistics" element={<Statistics />}>

          </Route>
          <Route path="/" element={<Money />}>

          </Route>
          <Route path="*" element={<NoMatch />}>

          </Route>

        </Routes>
      </Router>
    </AppWrapper>
  );
}




export default App;
