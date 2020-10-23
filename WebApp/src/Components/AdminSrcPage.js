import React from 'react'
import {Tab, Nav, Col, Row} from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import DisplayUserDetails from './DisplayUserDetails'
import DisplayMyFiles from './DisplayMyFiles'
import moduleName from './LoginPage'
import LogoutPage from './LogoutPage'

function AdminSrcPage() {
    return (
        <div>
            <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Users</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Files</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                    <Nav.Link eventKey="third">Logout</Nav.Link>
                    </Nav.Item> */}
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <DisplayUserDetails />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <DisplayMyFiles/>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
    )
}

export default AdminSrcPage
