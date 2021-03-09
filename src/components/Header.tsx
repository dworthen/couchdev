import React, {memo} from 'react'
import styled from 'styled-components'
import Nav from "./Nav";
import Link from 'next/link'

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = memo(function Header(props) {
    return (
        <StyledHeader>
            <div>
                <h2><Link href="/">Couch Dev</Link> <small>Prerecorded from my couch, it's a dev making sense of dev things!</small></h2>
            </div>
            {/*<div className="nav">*/}
            {/*    <Nav />*/}
            {/*</div>*/}
        </StyledHeader>
    )
})

export default Header;

const StyledHeader = styled.header`
  height: auto;
  display: flex;
  align-items: flex-end;
  background: transparent;
  border: none; 
  small {
    font-size: .5em;
  }
  .nav {
    flex: 1 1 auto;
  }
`