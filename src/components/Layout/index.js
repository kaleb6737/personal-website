

import { App } from 'react-bootstrap-icons'; // Check if you're actually using 'App' from 'react-bootstrap-icons'
import Sidebar from '../Sidebar';
import './index.scss';
import { Outlet } from 'react-router-dom'; // Ensure you import Outlet if using React Router v6

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                
                <Outlet /> {/* Correct component for rendering nested routes */}

                <span className='tags bottom-tags'>
                    &lt;/body&gt; {/* Correctly use HTML entities for '<' */}
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span> {/* Correct className typo and use the right entity */}
                </span>
            </div>
        </div>
    )
}

export default Layout;
