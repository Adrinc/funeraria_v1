import { BrowserRouter } from 'react-router-dom'

import NavBar from './NavBar';

function RoterLinks() {
  return (
    <BrowserRouter>
{/*       <TopMenu /> */}
     <NavBar />

  {/*     <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="Navbar"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        /> */}
        
    </BrowserRouter>
  );
}

export default RoterLinks;