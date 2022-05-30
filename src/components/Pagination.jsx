import React from "react";

const Pagination = ({page,setPage, setLimit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  const handleChanges=(e)=>{
    setLimit(e.target.value);
    console.log(e.target.value)
  }
  return (
    <ButtonGroup>
      <Button disabled ={page<=1} onClick = {()=> setPage(1)} data-cy="pagination-first-button">First</Button>
      <Button disabled = {page<=1} onClick={()=> setPage(page-1)} data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={handleChanges}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button onClick={()=> setPage(page+1)} data-cy="pagination-next-button">Next</Button>
      <Button onClick={()=> setPage(1)} data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
