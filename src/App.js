/* eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {

  let post = '강아지 대통령';
  let [title, setTitle] = useState(['강아지사료1', '강아지사료2', '강아지사료3']);
  let [like, setLike] = useState(0);

  function likeButton(){

  }
 

  return (
    <div className="App">
      <div className="black-nav">
        <h4>강아지 프로젝트</h4>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={()=>{ setLike(like+1) }}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
