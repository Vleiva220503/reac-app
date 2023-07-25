import { NavLink, Routes } from "react-router-dom";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout page</h1>

      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default LazyLayout;