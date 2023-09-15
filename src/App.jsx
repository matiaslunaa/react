import './App.css'
import CartConteiner from './components/CartConteiner'
import CategoryItem from './components/CategoryItem'
import MenuButton from './components/MenuButton'
import Brand from './components/brand'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Brand/>
          <MenuButton/>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <CategoryItem isActive={true} name="REBAJAS"/>
              </li>
              <li className="nav-item">
              <CategoryItem isActive={false} name="Hombres"/>
              </li> 
              <li className="nav-item">
              <CategoryItem isActive={false} name="Mujeres"/>
              </li>
              <li className="nav-item">
              <CategoryItem isActive={false} name="Niños"/>
              </li>
            </ul>
          </div>
          <CartConteiner/>
        </div>
      </nav>
    </div>
  )
}

export default App
