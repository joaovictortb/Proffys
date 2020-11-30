import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logocalmo1.svg';
import backIcon from '../../assets/images/icons/back2.svg';


import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: string;

}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
    <div className="top-bar-container">
       <Link to="/">
       <img src={backIcon} alt="voltar para home"/>
       </Link>
       <img src={logoImg} alt="Proffy"/>
    </div>

    <div className="header-content">
    <strong>{props.title}</strong>
    
    { props.description && <p>{props.description}</p>}

    {props.children}
    </div>
  </header>
  );
}

export default PageHeader;