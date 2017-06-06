// 主页页面
import React from "react";
import {hashHistory} from "react-router";

class Home extends React.Component {
    goAbout=()=>{
        hashHistory.push("/about");
    }

    render (){
        return <div>
        home
        <button onClick={this.goAbout}>进入关于页面</button>
        </div>
    }
}

export default Home;