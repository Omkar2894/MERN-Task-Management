import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'


const Pagination = (props) => {
    const {showPerPage, onClickPagenation, total} =props;

    const [counter, setCounter] = useState(1);

    useEffect(()=> {
        let value= showPerPage * counter;
        onClickPagenation( value- showPerPage, value);
    },[counter]);


    const onNavigationClick = (type) =>{
        // console.log(type);
        if(type === "prev" ){
            if(counter === 1){
                setCounter(counter);
            }
            else{
                setCounter(counter-1);
            }
        }
        else if(type === "next"){
            if(Math.ceil(total/showPerPage) === counter){
                    setCounter(counter);
                }
                else{
                    setCounter(counter+1);
                }
            }
        }
    



    return (
        <div className="d-flex">
            <Button pill bg="primary" className="m-1" onClick= { () => onNavigationClick("prev") } >
                    <i class="fas fa-arrow-circle-left"></i>
            </Button>
            <Button pill bg="primary" className="m-1" onClick= { () => onNavigationClick("next") }>
                <i class="fas fa-arrow-circle-right"></i>
            </Button>
        </div>
    )
}

export default Pagination
