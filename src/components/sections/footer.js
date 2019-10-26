import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Something here</li>
          <li>Something here</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Something here</li>
          <li>Something here</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Something here</li>
          <li>Something here</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Something here</li>
          <li>Something here</li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo>logo</Logo>
      {/* <Copyright>Copyright © 2019 Gatsbee, Inc. All rights reserved.</Copyright> */}
    </BrandContainer>
  </FooterWrapper>
)

// const SocialIcons = styled.div`
//   display: flex;

//   img {
//     margin: 0 8px;
//     width: 24px;
//     height: 24px;
//   }

//   @media (max-width: ${props => props.theme.screen.sm}) {
//     margin-top: 40px;
//   }
// `

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  margin: 80px 0 0 0;
  padding: 64px 0 96px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.large};
  color: ${props => props.theme.color.white.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: "HK Grotesk Bold";
    color: white;
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.white.regular};
    li {
      margin-bottom: 12px;
      font-family: "HK Grotesk Light";
    }
  }
`

export default Footer
