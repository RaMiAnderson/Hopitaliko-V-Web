import React from 'react'

import bonHomm from "../../assets/img/Principale/userPers.png"

//Style
import "./navBarStyle.css"

export default function AdminNavbar() {
  return (
    <>
        <div className='parentNavbar'>
          {/* LOGO */}
          <div className="logoSection">
            <div className='logoFile'>Icon</div>
            <p>Mylane H</p>
          </div>

          {/* InfoUser */}
          <div className="userInfoSection">
            <div className='userIcon'>
              <img src={bonHomm} alt="" />
            </div>
            <div className='nameContainer'>
              <p>Jeremie Dian</p>
              <p className='fonction'>Administrateur</p>
            </div>
          </div>

          {/* Link section  */}
          <div className="linkSection">
            <ul>
              <a href="#">
                <li className='selected'>
                  <div className="iconList"></div>
                  <div className="nameList">Dashboard</div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconList"></div>
                  <div className="nameList">Articles</div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconList"></div>
                  <div className="nameList">Fournisseurs</div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconList"></div>
                  <div className="nameList">Clients</div>
                </li>
              </a>
              <a href="#">
                <li>
                  {/* liste des stock, date dernier reaprovisionemt, qt */}
                  <div className="iconList"></div>
                  <div className="nameList">Iventaires</div>
                </li>
              </a>
              <a href="#">
                <li>
                  {/* mampiditr qt article */}
                  <div className="iconList"></div>
                  <div className="nameList">Approvisionmt</div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconList"></div>
                  <div className="nameList">Dépenses</div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconList"></div>
                  <div className="nameList">Utilisateurs</div>
                </li>
              </a>
            </ul>

          </div>

          {/* section deco */}
          <a href="#">
            <div className='logoutSection'>
              Déconnexion
            </div>
          </a>
        </div>
    </>
  )
}
