import React from 'react';
import Sidebar from '../Sidebar/components/Sidebar'
import Content from '../Content'

const Main = (props) => {
    const {sidebar, mainContent} = props;
    console.log(sidebar)
    return (
        <main className="main">
            <div className="container">
                <div className="main-row">
                    <Sidebar {...sidebar}/>
                    <Content {...mainContent}/>
                </div>
            </div>
        </main>
    )
}

export default Main;