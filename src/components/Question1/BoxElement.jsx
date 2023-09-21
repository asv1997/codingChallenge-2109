import React, {useEffect} from "react"
import styled from "styled-components"

const BoxElementContainer = styled.div`
  width: calc(${({width}) => width}% - 20px);
  background-color: blue;
  color: white;
  padding: 5px 5px;
`

const BoxElement = ({index,width}) => {

    useEffect(() => {

        console.log(`${index} was called`)

    }, [index])

    return <BoxElementContainer width={width}>{index}</BoxElementContainer>
}

export default BoxElement;