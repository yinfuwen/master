import React from "react";

let Login = React.createClass({
        getDefaultProps(){
            return {
                html:"默认参数"
            }
        },
        getInitialState(){
            return {
                uName:"",
                uPswd:""
            };
        },
        handleChange(e){
            let obj = {};
            obj[e.target.id]=e.target.value;
            this.setState(obj);
        },
        handleClk(){
            this.props.handLogin(this.state.uName,this.state.uPswd);
        },
        onBtnClk(){
            this.refs.ipt.focus();
            console.log(this.refs);
        },
        render() {
                return (
                    <div>
                        <div>{this.props.html+this.props.test}</div>
                        <div>
                            <label htmlFor="usename">姓名:</label>
                            <input type="text" id="uName" onChange={this.handleChange} value={this.state.uName}/>
                        </div>
                        <div>
                            <label htmlFor="pw">密码:</label>
                            <input type="password" id="uPswd" onChange={this.handleChange} value={this.state.uPswd}/>
                        </div>
                        <div>
                           <button onClick={this.handleClk}>提交</button>
                        </div>

                        <input ref="ipt" />
                        <button onClick={this.onBtnClk}>点我使输入框获得焦点</button>
                    </div>
                )
            }
    });

export default Login;