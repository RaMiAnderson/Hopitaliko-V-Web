import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import logout from "../../services/logout"

// Icons
import DashBoardIco from "@mui/icons-material/InsertChartOutlinedOutlined"
import ArticleIco from "@mui/icons-material/DescriptionOutlined"
import FournisseurIco from "@mui/icons-material/AssignmentIndOutlined"
import ClientIco from "@mui/icons-material/ContactPageOutlined"
import InventoryIcon from "@mui/icons-material/Inventory2Outlined"
import ApprovIco from "@mui/icons-material/ArchiveOutlined"
import DepenseIco from "@mui/icons-material/PriceChangeOutlined"
import UserIco from "@mui/icons-material/BadgeOutlined"
import DecoIco from "@mui/icons-material/LogoutOutlined"
import Toggle from "@mui/icons-material/CompareArrowsOutlined"

import bonHomm from "../../assets/img/Principale/userPers.png"


//Style
import "./navBarStyle.css"

export default function AdminNavbar({numPg}) {
  const navigate = useNavigate();

  const [indexActivList, setIndexActivList] = useState(numPg);
  const [isToggleActive, setInverseToggle] = useState(false);


  let ifClick = (index) => {
    setIndexActivList(index);
    switch(index){
      case 1 : 
        navigate("/admin/dashboard");
        break;
      case 2 :
        navigate("/admin/articles");
        break;
      case 3 :
        navigate("/admin/fournisseurs");
        break;
      case 4 :
        navigate("/admin/clients");
        break;
      case 5 :
        navigate("/admin/inventaires");
        break;
      case 6 :
        navigate("/admin/ravitaillements");
        break;
      case 7 :
        navigate("/admin/depenses");
        break;
      case 8 :
        navigate("/admin/utilisateurs");
        break;
      case 9 : {
        let resultLogout = logout();
        location.reload();
      }
    }
  }

  const activeToggle = () => {
    setInverseToggle(!isToggleActive);
  }
  
  return (
    <>
        <div className = {`parentNavbar ${isToggleActive ? "Active-Toggle" : ""}`} >
          {/* LOGO */}
          <div className="logoSection">
            <div className='logoFile'>sary</div>
            <p>Mylane H</p>
          </div>

          <div className="toggleSection">
            <button onClick={() => activeToggle()} className='btnToggle'><Toggle sx={{width:35, height:35}}/></button>
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
              
                <li className={`${indexActivList === 1 ? "selected" : ""}`} onClick={() => ifClick(1)} >
                  <div className="iconList"><DashBoardIco sx={{width: 27, height:27}} /></div>
                  <div className="nameList">Statistique</div>
                </li>
      
                <li className={`${indexActivList === 2 ? "selected" : ""}`} onClick={() => ifClick(2)}>
                  <div className="iconList"><ArticleIco sx={{width: 27, height:27}}/></div>
                  <div className="nameList">Articles</div>
                </li>
         
        
                <li className={`${indexActivList === 3 ? "selected" : ""}`} onClick={() => ifClick(3)}>
                  <div className="iconList"><FournisseurIco sx={{width: 27, height:27}}/></div>
                  <div className="nameList">Fournisseurs</div>
                </li>
           
                <li className={`${indexActivList === 4 ? "selected" : ""}`} onClick={() => ifClick(4)}>
                  <div className="iconList"><ClientIco sx={{width: 27, height:27}}/></div>
                  <div className="nameList">Clients</div>
                </li>
            
                <li className={`${indexActivList === 5 ? "selected" : ""}`} onClick={() => ifClick(5)}>
                  {/* liste des stock, date dernier reaprovisionemt, qt */}
                  <div className="iconList"><InventoryIcon sx={{width: 27, height:27}}/></div>
                  <div className="nameList">Iventaires</div>
                </li>
         
                <li className={`${indexActivList === 6 ? "selected" : ""}`} onClick={() => ifClick(6)}>
                  {/* mampiditr qt article */}
                  <div className="iconList"><ApprovIco sx={{width: 27, height:27}}/></div>
                  <div className="nameList">Ravitaillements</div>
                </li>
           
                <li className={`${indexActivList === 7 ? "selected" : ""}`} onClick={() => ifClick(7)}>
                  <div className="iconList"><DepenseIco sx={{width: 27, height:27}}/></div>
                  <div className="nameList">Dépenses</div>
                </li>
            
                <li className={`${indexActivList === 8 ? "selected" : ""}`} onClick={() => ifClick(8)}>
                  <div className="iconList"><UserIco sx={{width: 27, height:27}}/></div>
                  <div className="nameList">Utilisateurs</div>
                </li>
          
            </ul>

          </div>

          {/* section deco */}
            <hr className='separateLogout'/>
            <div className={`logoutSection ${indexActivList === 9 ? "selected" : ""}`} onClick={() => ifClick(9)}>
              <div ><DecoIco sx={{width: 27, height:27}}/></div>
              <div className='nameList'>Déconnexion</div>
            </div>

        </div>
    </>
  )
}
