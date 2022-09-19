import React from "react";
import reactDom from "react-dom";
import Alou from "./components/App";
import "./components/Arquivos-css/reset.css"



const html=document.querySelector('.root')
reactDom.render(<Alou/>,html)