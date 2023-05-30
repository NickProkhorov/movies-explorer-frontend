import { Routes, Route, Link } from "react-router-dom";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderUnauth from "../HeaderUnauth/HeaderUnauth";

function Header() { 
    
    return (
     
        <Routes>
          <Route path="/" element={
            <>
              <header className="header">
                <Link to="/">
                  <div className="header__logo"></div>
                </Link>
                <HeaderUnauth />
              </header>
            </>
          }
          />
          <Route path="/movies" element={
            <>
              <header className="header">
                <Link to="/">
                  <div className="header__logo"></div>
                </Link>
                <HeaderMenu />
              </header>
            </>
          }
          />
          <Route path="/saved-movies" element={
            <>
              <header className="header">
                <Link to="/">
                  <div className="header__logo"></div>
                </Link>
                <HeaderMenu />
              </header>
            </>
          }
          />
          <Route path="/profile" element={
            <>
              <header className="header">
                <Link to="/">
                  <div className="header__logo"></div>
                </Link>
                <HeaderMenu />
              </header>
            </>
          }
          />
          <Route path="/profile-edit" element={
            <>
              <header className="header">
                <Link to="/">
                  <div className="header__logo"></div>
                </Link>
                <HeaderMenu />
              </header>
            </>
          }
          />
    </Routes>            
     
    )
}

export default Header;