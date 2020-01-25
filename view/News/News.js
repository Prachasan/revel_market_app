import React from 'react';
import {
    Text, 
} from 'react-native';
import {
    Header,
    Content,
} from "native-base"

export default class News extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Content style={{ backgroundColor: '#ff0000', }}>
                <Header >
                    <Text style={{ fontSize: 18, color: '#ff0000' }}>ข่าวสารและกิจกรรม</Text>
                </Header>
            </Content>
        )
    }
}