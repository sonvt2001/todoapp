import React from 'react'
import './Modal.css';
import imgPersonal from './img/logo.jpg'

function Modal({closeModal}){
  return <div className="modalBackground">
    <div className="modalContainer">
      <button className="closebtn" onClick={() => closeModal(false)}>X</button>
      <div className="title">
        <h3>MY PROFILE</h3>
      </div>
      <div className="headerbody">
        <p className="titleNameSchool">Đại học Sư phạm Thành phố Hồ Chí Minh</p>
      </div>
        <div className="logo">
          <img src={imgPersonal} width="200px" height="200px" alt='img-me'/>
        </div>
      <div className="bodytitle">
        <p className="titleProfile">Võ Thị Phương Thắm</p>
        <p className="titleProfile">MSSV: 45.01.104.218</p>
        <p className="titleProfile">Khoa: Công Nghệ Thông Tin</p>
      </div>
      <div class="iconsocial">
        <ul>
          <a href="#" class="fa fa-facebook"></a> 
          
          <a href="#" class="fa fa-google"></a>
        </ul>
      </div>
    </div>
  </div>
}
export default Modal;