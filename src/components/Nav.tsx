import styled from "styled-components"
import { Link, NavLink } from "react-router-dom";
import Icon from './Icon';




const NavWrapper = styled.nav`
background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul {
    display: flex;
    >li{
        width: 33.3%;
        text-align: center;
        >a{
            display: flex;
            flex-direction: column;
            padding:4px 0;
            justify-content: center;
            align-items: center;
            .icon{
                width: 24px;
                height: 24px;
      }
      &.active{
        color:red;
        background-color: gray;
        .icon{
            fill:red
        }
      }

        }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" >
                        <Icon name="label" />
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money">
                        <Icon name="money" />
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics">
                        <Icon name="statistics" />
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav