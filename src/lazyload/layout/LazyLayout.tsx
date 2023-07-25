import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPages, LazyPages2, LazyPages3 } from "../pages";

export const LazyLayout = () => {
  return (
    <>
    <div>
    <div>LazyLayout Pages</div>
      <ul>
        <li>
          <NavLink to="lazy1"> Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2"> Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3"> Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPages/>}></Route>
        <Route path="lazy2" element={<LazyPages2/>}></Route>
        <Route path="lazy3" element={<LazyPages3/>}></Route>

        <Route path="*" element={<Navigate replace to="lazy1"/>}/>
      </Routes>
    </div>
     
    </>
  );
}

export default LazyLayout;