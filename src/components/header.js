import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/logo.png'

const HeaderWrapper = styled.div`
  background: #920303;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  height: 70vh
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Dar.ren Logo" />
        </Link>
      </h1>
      <nav>
        <u>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </u>
      </nav>
    </HeaderContainer>
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
      sizes={data.background.sizes}
    />
  </HeaderWrapper>
)

export default Header
