import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import AdminLogin from './AdminLogin'
import LoginPage from './LoginPage'

function LoginP() {
    return (
        <div>
            <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
                <Tab classname= "bg-dark text-white" eventKey="users" title="Users">
                    <LoginPage/>
                </Tab>
                <Tab classname="bg-dark text-white" eventKey="admin" title="Admin">
                    <AdminLogin/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default LoginP
