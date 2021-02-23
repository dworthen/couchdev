import React, {memo} from 'react'
import Nav from './Nav'
import Header from "./Header";
import styled from "styled-components";

export interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = memo(function Layout({ children }) {
    return (
        <StyledMain>
            <Header />
            <div>
                {children}
            </div>
        </StyledMain>
    )
})

export default Layout;

const StyledMain = styled.div`
  width: 960px;
  margin: 0 auto;
`