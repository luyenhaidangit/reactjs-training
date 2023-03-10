import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaGithub, FaRegLaughWink } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { Link } from 'react-router-dom';
// import sidebarBg from '../../assets/bg2.jpg';



const Sidebar = (props) => {
    const { collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                // image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                        className='d-flex align-items-center'
                    >
                        <GrReactjs size={'2rem'} className='text-primary me-2'></GrReactjs>
                        DAGStore
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            Trang điều khiển
                            <Link to="/admin"></Link>
                        </MenuItem>
                        <MenuItem icon={<FaGem />}>
                            Trang chủ
                            <Link to="/"></Link>
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            suffix={<span className="badge yellow">3</span>}
                            icon={<FaRegLaughWink />} title='Quản lý'
                        >
                            <MenuItem>
                                Quản lý user
                                <Link to="/admin/manage-user"></Link>
                            </MenuItem>
                            <MenuItem>Quản lý bài thi
                                <Link to="/admin/manage-quizz"></Link>
                            </MenuItem>
                            <MenuItem>Quản lý câu hỏi</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                viewSource
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
}

export default Sidebar;