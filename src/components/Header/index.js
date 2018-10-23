import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { $auth } from '../../firebase';

import './header.css';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const state = {
  drawerOpen: false,
};

const Header = props => (
  <header className="app-header">
    <div className="inner inner--default">
      <div className="app-header--logo">
        <div className="svg-wrapper">
          <div className="svg-wrapper--content">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m0 256c0-141.39 114.61-256 256-256s256 114.61 256 256-114.61 256-256 256-256-114.61-256-256z" fill="#fc6930"/>
              <path d="m0.011719 257c0-0.33594-0.011719-0.66406-0.011719-1 0-141.39 114.61-256 256-256s256 114.61 256 256c0 0.33594-0.011719 0.66406-0.011719 1z" fill="#ee4424"/>
              <path d="m407.99 50c4.0859 3.0195 8.082 6.1602 11.977 9.4141 0.011719 0.19531 0.03125 0.38672 0.03125 0.58594v210c0 5.5234-4.4766 10-10 10h-230c-5.5234 0-10-4.4766-10-10v-210c0-5.5234 4.4766-10 10-10z" fill="#fdcb6b"/>
              <path d="m431 316h-272c-5.5234 0-10-4.4766-10-10v-210c0-5.5234 4.4766-10 10-10h272c5.5234 0 10 4.4766 10 10v210c0 5.5234-4.4766 10-10 10z" fill="#fddfa6"/>
              <path d="m450 136c5.5234 0 10 4.4766 10 10v210c0 5.5234-4.4766 10-10 10h-310c-5.5234 0-10-4.4766-10-10v-240c0-5.5234 4.4766-10 10-10h105.59c8.6094 0 16.25 5.5078 18.973 13.676l5.4414 16.324z" fill="#fcb30b"/>
              <path d="m170 366h-30c-5.5234 0-10-4.4766-10-10v-240c0-5.5234 4.4766-10 10-10h30c-5.5234 0-10 4.4766-10 10v240c0 5.5234 4.4766 10 10 10z" fill="#fda800"/>
              <path d="m322 416h-272c-5.5234 0-10-4.4766-10-10v-210c0-5.5234 4.4766-10 10-10h272c5.5234 0 10 4.4766 10 10v210c0 5.5234-4.4766 10-10 10z" fill="#ddf4ba"/>
              <path d="m322 416h-252c-5.5234 0-10-4.4766-10-10v-210c0-5.5234 4.4766-10 10-10h252c5.5234 0 10 4.4766 10 10v210c0 5.5234-4.4766 10-10 10z" fill="#ecf8d9"/>
              <path d="m200 215v120c0 2.7617-2.2383 5-5 5h-130c-2.7617 0-5-2.2383-5-5v-120c0-2.7617 2.2383-5 5-5h130c2.7617 0 5 2.2383 5 5zm-5 145h-130c-2.7617 0-5 2.2383-5 5v30c0 2.7617 2.2383 5 5 5h130c2.7617 0 5-2.2383 5-5v-30c0-2.7617-2.2383-5-5-5z" fill="#cff09a"/>
              <path d="m310 217v11c0 1.1055-0.89453 2-2 2h-86c-1.1055 0-2-0.89453-2-2v-11c0-1.1055 0.89453-2 2-2h86c1.1055 0 2 0.89453 2 2zm-136.78 19.465-7.7812-7.7812c-0.78125-0.78125-2.0469-0.78125-2.8281 0l-35.707 35.711-35.711-35.711c-0.78125-0.78125-2.0469-0.78125-2.8281 0l-7.7773 7.7812c-0.78125 0.77734-0.78125 2.0469 0 2.8242l35.711 35.711-35.711 35.711c-0.78125 0.77734-0.78125 2.0469 0 2.8242l7.7773 7.7812c0.78125 0.78125 2.0469 0.78125 2.8281 0l35.711-35.711 35.707 35.711c0.78125 0.78125 2.0469 0.78125 2.8281 0l7.7773-7.7812c0.78125-0.77734 0.78125-2.0469 0-2.8242l-35.707-35.711 35.711-35.711c0.77734-0.77734 0.77734-2.0469 0-2.8242zm48.781 23.535h66c1.1055 0 2-0.89453 2-2v-11c0-1.1055-0.89453-2-2-2h-66c-1.1055 0-2 0.89453-2 2v11c0 1.1055 0.89453 2 2 2zm86 15h-86c-1.1055 0-2 0.89453-2 2v11c0 1.1055 0.89453 2 2 2h86c1.1055 0 2-0.89453 2-2v-11c0-1.1055-0.89453-2-2-2zm-20 30h-66c-1.1055 0-2 0.89453-2 2v11c0 1.1055 0.89453 2 2 2h66c1.1055 0 2-0.89453 2-2v-11c0-1.1055-0.89453-2-2-2z" fill="#a1e52e"/>
              <path d="m378.34 360.12c9.7578 0 19.293 2.8906 27.41 8.3008l31.824 21.215c2.4453 1.6289 2.4453 5.2227 0 6.8516l-31.824 21.215c-8.1172 5.4141-17.652 8.3008-27.41 8.3008h-46.344v-65.883z" fill="#fbc56d"/>
              <path d="m134.71 360.12c13.645 0 24.703 11.062 24.703 24.707v16.473c0 13.645-11.059 24.703-24.703 24.703s-24.707-11.062-24.707-24.707v-16.469c0-13.645 11.062-24.707 24.707-24.707z" fill="#e659a9"/>
              <path d="m157.98 376.56c-3.3984 9.5781-12.535 16.441-23.277 16.441-10.746 0-19.879-6.8633-23.277-16.441 3.3984-9.5781 12.531-16.441 23.277-16.441 10.742 0 19.879 6.8633 23.277 16.441z" fill="#f18bc3"/>
              <path d="m393.3 376.59c0 9.0938-7.3711 16.469-16.469 16.469 9.0938 0 16.469 7.375 16.469 16.473 0 9.0938-7.3711 16.469-16.469 16.469h-242.13v-65.883h242.13c9.0938 0 16.469 7.375 16.469 16.473z" fill="#017296"/>
              <path d="m376.84 393.06c9.0938 0 16.469 7.375 16.469 16.473 0 9.0938-7.3711 16.469-16.469 16.469h-242.13v-32.941z" fill="#025f80"/>
              <path d="m426.25 382.08 11.332 7.5547c2.4453 1.6289 2.4453 5.2227 0 6.8516l-11.332 7.5547z" fill="#024c67"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="app-header--actions-toggle" onClick={ () => props._toggleNavDrawer() }>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <div className={`app-header--actions ${ props._navDrawerIsOpen ? 'drawer-open' : '' }`}>
        <ul>
          <li>
            <Link to={`/dashboard/${ props.user.uid }`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`/profile/${ props.user.uid }`}>Profile</Link>
          </li>
          { 
            props.user.uid &&
            <li>
              <button onClick={ () => $auth.signOut() }>Sign Out</button>
            </li>
          }
        </ul>
      </div>
    </div>
  </header>
);

export default withRouter(connect(mapStateToProps, null)(Header));
