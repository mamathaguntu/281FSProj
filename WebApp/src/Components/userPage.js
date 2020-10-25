import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import DisplayMyFiles from './DisplayMyFiles'
import UserUploadFile from './UserUploadFile'

function userPage() {
    return (
        <div classname = 'bg-dark text-white'>
            <Tabs>
            <Tab classname="bg-dark text-white" eventKey="files" title="Files">
                <DisplayMyFiles/>
            </Tab>
            <Tab classname= "bg-dark text-white" eventKey="uploadFile" title="Upload">
                <UserUploadFile/>
            </Tab>
            </Tabs>
        </div>
    )
}

export default userPage
