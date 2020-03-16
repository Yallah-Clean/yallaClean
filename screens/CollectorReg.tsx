import React, { Component } from 'react';
import { Container, Grid, View, Content, Thumbnail, Row, Button , Text , Header , Form , Item , Input , Icon } from "native-base";

import { Api } from '../api/api'
class CollectorRegScreen extends Component {
    imageUrl = require('../assets/logo2.jpg');

    constructor(props){
        super(props);
    }

    state = {

    }

    submit(){
        console.log(this.state);
        Api.registerRes(this.state)
    }

    handleKeyPress(event){
        
        const { value } = event.target;
        const { placeholder } = event.srcElement;
        
        let name = placeholder.toString().toLowerCase().replace(' ', '_')
        this.setState({
            [name]:value
        })
    }
    
    render(){
        return(
            <Container>
            <Header />
            <Grid>
                <View style={{  justifyContent:'center' , width:414 , height:250 }}>
                    <Content contentContainerStyle={{ alignItems:'center' , borderColor:'#f00'}} >
                        <Thumbnail style={{width:240 , height:180  , position:'relative' , top:30 }} source={{uri:this.imageUrl}}></Thumbnail>
                        <Text style={{fontSize:24 , fontWeight:'bold', position:'relative' , top: 40}}>Collector</Text>
                        
                    </Content>
                </View>
                <Row style={{ justifyContent:'center'}}>
                        <Form style={{ }}>
                            <Item floatingLabel rounded>
                                <Input placeholder="name" onChange={() => this.handleKeyPress(event)} style={{ width:300}} />
                            </Item>
                            <Item floatingLabel rounded>
                                <Input placeholder="phone" onChange={() => this.handleKeyPress(event)}  style={{ width:300}} />
                            </Item>
                            <Item floatingLabel rounded>
                                <Input placeholder="National ID" onChange={() => this.handleKeyPress(event)}  style={{ width:300}} />
                            </Item>
                            <Item floatingLabel rounded>
                                <Input placeholder="Address" onChange={() => this.handleKeyPress(event)}  style={{ width:300}} />
                            </Item>
                            <Item floatingLabel rounded>
                                <Input placeholder="Image Card"  style={{ width:300}} />
                                <Icon  name="camera" ></Icon>
                            </Item>
                        </Form>
                </Row>
                <Row style={{  justifyContent:'center' , flexDirection:'column' , alignItems:'center' , position:'relative' , top:10}}>  
                        <Button onPressIn={() => this.submit()} style={{ justifyContent:'center',  backgroundColor:'#A2BEAA' , width:250 , borderRadius:12}}>
                            <Text style={{color:'#000'}}>Create Account</Text>
                        </Button>
                </Row>
            </Grid>   
        </Container>
        )
    }
    
}

export default CollectorRegScreen;