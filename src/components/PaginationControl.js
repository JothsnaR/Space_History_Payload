import React from 'react';

const PaginatonControls = (props) => {
    const { perPage, datalength, handleClick } = props;

    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(datalength / perPage); i++) {
        pageNumbers.push(i)
    }

 return (
    <div className="pagination-controls">
      {pageNumbers.map(item => (
          <button
            className="button"
            key={item}
            onClick={() => handleClick(item)}
            >
             {item}
            </button>
      ))}
    </div>
 )
}

export default PaginatonControls;