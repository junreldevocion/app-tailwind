import { useLocation } from 'react-router'
import { Link  } from 'react-router-dom'
import { 
    PresentationChartLineIcon, 
    CogIcon,
} 
from '@heroicons/react/outline'

function NavLink({to, className, activeClassName, inactiveClassname, ...rest}) {

    let location = useLocation();
    let isActive = location.pathname === to;

    let allClassNames = className + (isActive ? `${activeClassName}` : `: ${inactiveClassname}` );

    return <Link className={allClassNames} to={to} {...rest} />
}

export default function Sidebar({toggle}) {

    
    return (
        <>
            <nav className={`h-full w-64 flex-shrink-0 ${toggle ? '-ml-64' : ''} transition-all duration-300`}>
                <h1 className="h-16 flex justify-start items-center pl-8 uppercase text-xl font-semibold">
                    <Link to="/" className="text-primary">Brand</Link>
                </h1> 
                <div className="mt-6">
                    <h3 className="pl-8 font-semibold py-2 text-sm text-primary">Pages</h3>
                    <NavLink to="/" className="pl-10 py-4 flex items-center border-l-4 font-medium text-sm text-primary" activeClassName="border-l-4 border-secondary-800 py-4 bg-gradient-to-r from-secondary-light text-secondary-800" inactiveClassname="border-light"> 
                        <PresentationChartLineIcon  className="h-5 w-8"  /> <span>Dashboard</span> 
                    </NavLink>
                    <NavLink to="/setting" className="pl-10 py-4 flex items-center border-l-4 font-medium text-sm text-primary" activeClassName="border-l-4 border-secondary-800 py-4 bg-gradient-to-r from-secondary-light text-secondary-800" inactiveClassname="border-light"> 
                        <CogIcon  className="h-5 w-8"  /> <span>Setting</span> 
                    </NavLink>
                </div>
            </nav>
        </>
    )
}