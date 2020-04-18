import styled from 'styled-components'
// import { getFont } from '../components/GetParams'

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100px;
`

export const Pre = styled.pre`
  text-align: left;
  padding: 1em;
  width: 400px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${props => props.size}px;
  border-radius: 4px;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`
