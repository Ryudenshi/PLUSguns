import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap';
import { Context } from '../index';
import './NavBar.css';

const Pages = observer (() =>{
    const {weapons} = useContext(Context)
    //const pageCount = Math.ceil(weapons.totalCount / weapons.limit)
    const pages = [1,2]

    /*for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }*/

    for (let i = 1; i <= Math.ceil(weapons.totalCount / weapons.limit); i++) {
        pages.push(i);
      }

    return (
        <Pagination className="mt-2">
            {pages.map(page => 
                <Pagination.Item
                    key={page}
                    active={weapons.page === page}
                    onClick={() => weapons.setPage(page)}
                >
                    {page}
                </Pagination.Item>    
            )}
        </Pagination>
    );
});

export default Pages;