import React, { Component } from 'react'
import LeftSideBar from './LeftSideBar';

import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
class PublicStorage extends Component {

    render() {
        const file = 'http://www.bavtailor.com/wp-content/uploads/2018/10/Lorem-Ipsum.pdf'
        const type = 'pdf'
        return (

            <div className="wrapper">
                <LeftSideBar />
                <div id="content">
                    <h1>Public storage</h1>
                    <FileViewer
                        fileType={type}
                        filePath={file}
                        errorComponent={CustomErrorComponent}
                         />
                </div>
            </div>
        )
    }
}
export default PublicStorage