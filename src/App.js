/* eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {

  let post = '강아지 대통령';
  let [title, setTitle] = useState(['강아지사료1', '강아지사료2', '강아지사료3']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

function orderTitle() {
  let newOrder = [...title].sort();
  setTitle(newOrder);
}

  return (
    <div className="App">
      <div className="black-nav">
        <h4>강아지 프로젝트</h4>
      </div>
      <button onClick={()=>{
          
        let copy = [...title];
        copy[0] = '고양이사료1';
        setTitle(copy);
          
      }}>버튼</button>

      <button onClick={ orderTitle }>가나다순 버튼</button>

      <div className="list">
        <h4>{title[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(true) }}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        title.map(function(a, i){
          return (
            <div className="list">
              <h4 onClick={()=>{ setModal(true)}}>{ title[i] } <span onClick={()=>{ 
                let likeCnt = [...like];
                likeCnt[i]++;
                setLike(likeCnt);
                }}>👍</span> {like[i]}</h4>
              <p>2월 17일 발행</p>
            </div>)
        })

      }

      {
        modal == true ? <Modal title={title} setTitle={setTitle}/> : null 
      }

      <button onClick={() => { setModal(!modal)}}> 열고닫기 </button>
      

    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
        <h4>{props.title[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{ props.setTitle(['고양이사료1', '강아지사료2', '강아지사료3']) 
        }}>수정</button>
      </div>
  )
}

export default App;
