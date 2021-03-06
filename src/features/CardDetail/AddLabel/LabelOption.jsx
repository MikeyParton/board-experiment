import React from 'react'
import styled from 'styled-components'
import withLabel from 'features/Labels/withLabel'
import { Flex, Box } from 'grid-styled'
import { Icon, Button } from 'common/components'
import Check from 'react-icons/lib/md/check'

const OptionWrapper = styled.div`
  height: 34px;
  cursor: pointer;
  color: white;
  background-color: ${props => props.code};
  padding: ${props => props.theme.grid}px;
  border-radius: ${props => props.theme.borderRadius}px;
`

const Tick = styled(Check)`
  font-size: 20px;
`


const LabelOption = props => {
  const { label, handleSelect, selected, handleEdit } = props
  const { id, code, name } = label

  return (
    <Flex
      align="center"
      mb={1}
    >
      <Box
        mr={2}
        width={1}
      >
        <OptionWrapper
          code={code}
          onClick={() => handleSelect(id)}
        >
          <Flex>
            <Box width={1}>{name}</Box>
            <Box>{selected && <Tick />}</Box>
          </Flex>
        </OptionWrapper>
      </Box>
      <Button onClick={handleEdit}>
        <Icon icon="edit" />
      </Button>
    </Flex>
  )
}

export default withLabel(LabelOption)
