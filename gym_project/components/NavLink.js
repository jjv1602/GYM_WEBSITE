import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import st from './navbar.module.css';
export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += 'active-nav';
    }
    return (
        <Link href={href} {...props}>
                {children}
        </Link>
    );
}