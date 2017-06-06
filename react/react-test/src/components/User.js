// 用户管理页面
import React,{Component} from "react";

import { Table } from 'antd';

const columns = [{
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    }, {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },{
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile',
    }, {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    }, {
        title: '兴趣爱好',
        dataIndex: 'hobbies',
        key: 'hobbies',
    }];

class User extends Component {
    componentDidMount(){
        const url="http://rapapi.org/mockjsdata/19309/rap/text.json";
        fetch(url).then(function(response){
            return response.json();
        }).then((json)=>{
            this.setState({
                list:json.data.list
            })
        });
    }

    constructor(props){
        super(props);
        this.state={
            list:[]
        };
    }

    /*setKey(data){
        return data.id;
    }*/

    render(){
        return <Table dataSource={this.state.list} rowKey="id" columns={columns} pagination={{pageSize:2}}/>
    }
}

export default User;