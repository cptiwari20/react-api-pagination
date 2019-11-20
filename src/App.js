import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function(props){
  // Setting States
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  
  // console.log("currentPage", currentPage)
  const fetchData = async (curPage = 1) => {
    try{
      const res = await axios.get(`${props.url}/${curPage}`);
      if(res.data){
        // console.log('response from page => ', curPage, res.data)
        setPageCount(res.data.count)
        setCurrentPage(curPage)
        return props.getData(res.data);
      }
    }catch(e){
      // console.log('Something went wrong => ', e)
    }
  }

  // component did Mount
  useEffect(() => {fetchData(currentPage)}, []);

  // Get how many Pages would be there
  const getTotalPage = (valueOnOnePage = 10) => {
    if(pageCount){
      return Math.ceil(pageCount / valueOnOnePage);
    }
    return 0;
  }
  
  const renderButton = () => {
    return Array.from(Array(getTotalPage()), (e, i) => {
      let index = i === 0 ? 1 : i + 1;
      return(
        <li key={i} className={`page-item  ${index === currentPage ? 'active' : ""}`}>
            <a role='button' className="page-link" tabIndex={i} onClick={() => fetchData(index)}>{index}</a>
        </li>
      )}
    )
  }
  return(
      <ul className="pagination">
        <li className={`page-item  ${currentPage === 1 || 0 ? 'disabled' : ""}`}>
          <a role='button' className="page-link" onClick={() => fetchData(currentPage - 1)}>{props.previousLabel}</a>
        </li>
          {renderButton()}
        <li className={`page-item  ${currentPage === getTotalPage() ? 'disabled' : ""}  ${getTotalPage() === 0 ? 'disabled' : ""}`}>
          <a role='button' className="page-link" onClick={() => fetchData(currentPage + 1)}>{props.nextLabel}</a>
        </li>
      </ul>
  )
}