import { Link } from 'react-router-dom';
import { LogoIcon } from '~/components/Icons';
import { routesConfig } from '~/routes/routesConfig';

function OnlyBodyLayout({ children }) {
    return (
        <div className="h-screen w-screen">
            {/* Icon Home */}
            <Link
                className="m-8 inline-flex items-center self-start p-2 text-2xl text-[color:var(--active-color)] shadow-md hover:shadow-2xl"
                to={routesConfig.homeRoute}
            >
                <LogoIcon />
                <p className="ml-4">Tourmaline</p>
            </Link>
            {/* Page */}
            {children}
        </div>
    );
}

export default OnlyBodyLayout;
