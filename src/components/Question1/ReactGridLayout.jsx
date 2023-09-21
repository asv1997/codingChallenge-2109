import React from "react";
import styled from "styled-components";
import BoxElement from "./BoxElement";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  padding: 2px 5px;
  row-gap: 10px;
  column-gap: 10px;
  overflow-y: scroll;
  align-items: stretch;
`

const ReactGridLayout = ({columns, boxesNum}) => {

    return (
        <GridContainer>
            {Array.from({length: boxesNum}, (_,i) => i+1).map(i => <BoxElement key={i} index={i} width={100/columns}/>)}
        </GridContainer>
    )
}

export default ReactGridLayout;