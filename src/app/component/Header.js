import CategoryNav from './common/CategoryNav';
import Navigation from './common/Navigation';
import Top from './common/Top';

function Header() {
    return (
        <div>
            <Top />
            <Navigation />
            <CategoryNav />
        </div>
    );
}

export default Header;
