// import styled from 'styled-components';
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
  border: 1px solid red;
  height:100vh ;
  display: flex;
  flex-direction: column;
  
`

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`

const Nav = styled.nav`
  border: 1px solid blue;
  >ul {
    display: flex;
    >li{
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
`


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>

      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}
function NoMatch() {
  return <h2>NoMatch 404</h2>
}

export default App;
