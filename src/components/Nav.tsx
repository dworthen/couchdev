import React, {memo} from 'react'
import Link from 'next/link'
import styled from "styled-components";

export interface NavProps {

}

const Nav: React.FC<NavProps> = memo(function Nav(props) {
    return (
        <StyledNav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </StyledNav>
    )
})

export default Nav;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
`