import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const Body = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    let breadcrumb = [
        "Home",
        "List",
        "App"
    ]

    const items = breadcrumb.map((item) => ({
        title: item
    }))


    
    return (
        <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} items={items}/>

            <div
                style={{
                    background: colorBgContainer,
                    minHeight: '100vh',
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet/>
            </div>
        </Content>
    )
}

export default Body;