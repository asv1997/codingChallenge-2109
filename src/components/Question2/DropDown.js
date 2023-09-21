import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
  width: 200px;
  &:hover{
    .options-container{
      display: block;
    }
  }
  .options-container{
    display: none;
    padding: 5px 5px;
    box-sizing: border-box;
    border: 0.5px solid lightblue;
    width: 100%;
    max-height: 500px;
    overflow-y: scroll;
    margin-top: 5px;
  }
`

const SortMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  .sort-type{
    margin-left: 10px;
    margin-right: 2px;
  }
  span{
    font-size: small;
  }
`

const SearchInput = styled.input`
  width: 95%;
  margin-bottom: 2px;
`

const SelectedOption = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 10px 5px;
  border: 0.5px solid lightblue;
  white-space: nowrap;
  overflow-x: scroll;
  cursor: pointer;
`

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  gap: 60px;
  margin-top: 5px;
  padding: 4px 4px;
  &:hover{
    color: white;
    background-color: lightblue;
  }
`

const SORTMAPPER = {
    ASC : 1,
    DESC : -1
}



const DropDown = ({options, defaultValues = null, multiSelect = false, defaultPlaceholder = "None selected", onChange = null}) => {

    const [values, setValues] = useState(defaultValues ? defaultValues.reduce( (acc,value) => ({...acc,[value]: true}) ,{})  : {});
    const [sortType, setSortType] = useState(null); // it can take values of null, "ASC" , "DESC"
    const [searchText, setSearchText] = useState("");


    const onChangeValue = useCallback((value) => {
        setValues((prevValues) => {
            const currValue = {...(multiSelect ? prevValues : {}), [value] : !prevValues[value]};
            if(onChange) onChange(Object.keys(currValue).filter(value => !!currValue));
            return currValue
        })
    },[multiSelect, onChange])

    // Employing simple debouncing logic for the search text change
    const onSearchTextChange = (text) => {
        let timer ;
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {setSearchText(text)} , 1500);
    }

    useEffect(() => {
        console.log("Sort type has changed");
    },[sortType])


    return (
        <DropDownContainer>
            <SelectedOption>
                {(options).filter((option) => !!values[option.value]).map((filteredOption) => filteredOption.label).join(',') || defaultPlaceholder}
            </SelectedOption>
            <div className="options-container">
                <SearchInput placeholder="Search option" onChange = {(e) => onSearchTextChange(e.target.value)} />
                <SortMenu>
                    <span  className="sort-type">Asc</span><input checked={ sortType === "ASC" } onClick={() => setSortType((prevState) => prevState === "ASC" ? null : "ASC")} type="checkbox" />
                    <span className="sort-type">Desc</span><input checked={ sortType === "DESC" } onClick={() => setSortType((prevState) => prevState === "DESC" ? null : "DESC")} type="checkbox" />
                </SortMenu>
                {(sortType ? [...options].sort((a,b) => ( a.label > b.label ? 1 * (SORTMAPPER[sortType]) : -1 * (SORTMAPPER[sortType]) )) : options).filter((option) => (searchText.length ? option.label.toLowerCase().includes(searchText.trim()) : true)).map((option, index) => {
                    return (
                        <Option key={index}>
                            <span> {option.label} </span>
                            <input onChange={() => {}} type="checkbox" checked={!!values[option.value]} onClick={() => onChangeValue(option.value)}/>
                        </Option>
                    )
                })}
            </div>
        </DropDownContainer>
    )


}

export default DropDown;