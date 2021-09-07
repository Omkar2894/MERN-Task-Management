import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import ShowTasks from '../Services/ShowTasks';
import SearchTask from '../Services/SearchTask';


// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

const Search = (props) => {

    const { getSearchKey } = props;

    const [options, setOptions] = useState();
    const [searchStr, setSearchStr] = useState('')
    const [searchLength, setSearchLength] = useState()
    // const [labelValue, setLabelValue] = useState();
    const [isClearable, setIsClearable] = useState(true)

    // useEffect(() => {
    //     // let searchTerm = labelValue;
    //     console.log(labelValue);
    //     getSearchKey(labelValue);
    // }, [labelValue]);
        
    //  getSearchKey(labelValue);

    const searchResult = (searchKey) => {
        // console.log(searchKey.length)
        if (searchKey.length > 0) {
            // console.log(searchLength)
            SearchTask.searchTask(searchKey)
                .then(response => {
                    //   console.log(response.data);
                    setOptions(response.data);
                   
                }
                )
        }
        else if (searchKey.length === 0) {
            // console.log(searchLength)
            ShowTasks.showTasks()
                .then(response => setOptions(response.data))
        }
    }

    const searchKeyValue = searchKey => {
        // console.log(searchKey.length);
        setSearchLength(searchKey.length);
        setSearchStr(searchResult(searchKey));

    }

    //this function will give us the value of selected label   
    const selectedLabel = e => {
        let labelValue = e;
        // console.log(labelValue);
        // setLabelValue(e.label);
        if(labelValue !== null ){
            getSearchKey(labelValue.label);
        }
        else{
            getSearchKey('');
        }
    }

   

    return (
        <div>
            <Select options={options} onInputChange={searchKeyValue} placeholder="Enter Task Name" onChange={selectedLabel} isClearable={isClearable}/>
        </div>
    )
}

export default Search

