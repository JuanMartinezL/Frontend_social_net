import { NavPriv } from "./NavPriv"

export const HeaderPriv = () => {
  return (
    <header className="layout__navbar">
        <div className="navbar-__header">
            <a href="#" className="navbar__title">Red Social</a>
        </div> 
        <NavPriv />
    </header>
  )
}
