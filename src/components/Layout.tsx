import React, {memo} from 'react'
import Nav from './Nav'
import Header from "./Header";
import styled from "styled-components";

export interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = memo(function Layout({ children }) {
    return (
        <StyledMain>
            {/*<Header />*/}
            <div>
                {children}
            </div>
        </StyledMain>
    )
})

export default Layout;

const StyledMain = styled.div`
  max-width: 960px;
  margin: 10px auto;
  padding: 20px 35px;
  /* background: var(--bg-color);
  border: 2px solid var(--border-color);
  border-radius: 4px;
  box-shadow: 10px 5px 50px hsl(0deg 0% 9%); */
`