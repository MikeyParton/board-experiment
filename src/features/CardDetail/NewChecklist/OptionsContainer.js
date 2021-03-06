import styled from 'styled-components'

export const OptionsContainer = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius}px;
  width: 300px;
  padding: ${props => props.theme.grid}px;
`

export const Header = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  font-size: 14px;
  color: #838c91;
  border-bottom: 1px solid #d6dadc;
  margin-bottom: 10px;
  position: relative;
`

export const Title = styled.div`
  flex-grow: 1;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`

export const RightAligned = styled.div`
  position: absolute;
  right: 0;
`
