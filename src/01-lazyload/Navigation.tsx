import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { routes } from '../01-lazyload/routes/routes'
import logo from '../logo.svg'
export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            {
                                routes.map(({ top, name }) => (
                                    <li key={top}>
                                        <NavLink
                                            to={top}
                                            className={({ isActive }) => isActive ? 'nav-activate' : ''}>
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ path, Component }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component />} />
                            ))
                        }
                        <Route path='/*' element={<Navigate to={routes[0].top} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
