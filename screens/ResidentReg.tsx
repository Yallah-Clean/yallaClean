import React, { Component } from 'react';
import { Container, Grid, View, Content, Thumbnail, Row, Button , Text , Header , Form , Item , Input } from "native-base";

import {Api } from '../api/api';

class ResidentRegScreen extends Component{
    imageUrl = require('../assets/logo2.jpg')
    constructor(props){
        super(props);
        
    }

    state = {
        name:'',
        phone:'',
        address:''
    }
    

    submit(){
        console.log(this.state);
        Api.registerRes(this.state)
    }



    handleKeyPress(event){
        
        const { value } = event.target;
        const { placeholder } = event.srcElement;

        this.setState({
            [placeholder]:value
        })

        console.log(this.state);
    }


    render(){
        return(
            <Container>
            <Header />
            <Grid>
                <View style={{  justifyContent:'center' , width:414 , height:300 }}>
                    <Content contentContainerStyle = {{ alignItems:'center' , borderColor:'#f00'}} >
                        <Thumbnail style={{width:240 , height:180  , position:'relative' , top:30 }} source={{uri:this.imageUrl}}></Thumbnail>
                        <Text style={{fontSize:24 , fontWeight:'bold', position:'relative' , top: 50}}>Resident</Text>
                    </Content>
                </View>
                <Row style={{ justifyContent:'center'}}>
                        <Form style={{ position:'relative' , top:20}}>
                            <Item floatingLabel={true} rounded>
                                <Input placeholder="name"  onChange={() => this.handleKeyPress(event) }  style={{ width:300}} />
                            </Item>
                            <Item floatingLabel={true} rounded>
                                <Input placeholder="phone" onChange={() => this.handleKeyPress(event) }  style={{ width:300}} />
                            </Item>
                            <Item floatingLabel={true} rounded>
                                <Input placeholder="address" onChange={() => this.handleKeyPress(event) }  style={{ width:300}} />
                            </Item>
                        </Form>
                </Row>
                <Row style={{  justifyContent:'center' , flexDirection:'column' , alignItems:'center' }}>  
                        <Button onPressIn={() => this.submit()} style={{ justifyContent:'center',  backgroundColor:'#A2BEAA' , width:250 , borderRadius:12}}>
                            <Text style={{color:'#000'}}>Create Account</Text>
                        </Button>
                </Row>
                
            </Grid>
           
        </Container>
        )
    }
    
}

export default ResidentRegScreen;