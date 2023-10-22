import React,{useState} from 'react'

const Pagination = ({total, page, setPage}) => {
   
  return (
    <div className='pagination'>
        <span onClick={()=>setPage(page-1)} className={page>1?"":"pagination__disable"}>◀️</span>
       {[...Array(Math.ceil(total/12))].map((_, i)=>(
       <span onClick={()=>setPage(i+1)}>{i+1}</span>
       ))}
       <span onClick={()=>setPage(page+1)} className={page<Math.ceil(total/12)?"":"pagination__disable"}>▶️</span>
    </div>
  )
}

export default Pagination