import React from 'react';
import ReactDom from 'react-dom';

// provides DOM-specific method that can be used at the top level of your app and as an escape hatch to get outside the React model. 
// arrow function helps to reduces lots of code and makes the mode more readable. Its syntax automatically binds "this" to the surrounding code's context.

import './index.css'

import {data} from './books'
import SpecificBook from './Book'
import {greeting} from './testing/testing'


//JSX Rules
// return single element
// div/section/article or Fragment
// use camelCase for html attribute
// className instead of class
// close every elements
// formatting


function BookList(){
  console.log(greeting);
  return(
    <section className='booklist'>
      {data.map((book,index) =>{
        return <SpecificBook key={book.id} {...book}></SpecificBook>
      })}
    </section>

  );
}


ReactDom.render(<BookList/>,document.getElementById('root'))