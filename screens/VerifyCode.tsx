import React from "react";
import { Button, Container, Header, Grid, Row, Content, Text, Thumbnail, Form, Item, Input, Icon, Col, ListItem, CheckBox, Body } from "native-base";
import { View } from 'react-native'

const VerifyCodeScreen = () => {
    const Url = require('../assets/logo2.jpg');
    return(        
        <Container>
            <Header />
            <Grid>
                <View style={{  justifyContent:'center' , width:414 , height:300 }}>
                    <Content contentContainerStyle={{ alignItems:'center' , borderColor:'#f00'}} >
                        <Thumbnail style={{width:180 , height:180  , position:'relative' , top:30 }} source={{uri:Url}}></Thumbnail>
                        <Text style={{fontSize:24 , fontWeight:'bold', position:'relative' , top: 50}}>Verify Code</Text>
                        <Text style={{fontSize:14 , fontWeight:'normal' , position: 'relative' , top:60}}>Enter Your Code Here</Text>
                    </Content>
                </View>
                <Row style={{ justifyContent:'center' , borderColor:'#455' }}>
                    <Form style={{ position:'relative' , top:20 ,  flexDirection:'row' , justifyContent:'space-between' , alignItems:'flex-start'}}>
                        <Item regular >
                            <Input placeholder="*"  style={{ width:30 , height:30 , shadowOffset:{width:1 , height:1}}} />
                        </Item>
                        <Item regular >
                            <Input placeholder="*"  style={{ width:30 , height:30 , shadowOffset:{width:1 , height:1}}} />
                        </Item>
                        <Item regular >
                            <Input placeholder="*"  style={{ width:30 , height:30, shadowOffset:{width:1 , height:1}}} />
                        </Item>
                        <Item regular >
                            <Input placeholder="*"  style={{ width:30 , height:30 , shadowOffset:{width:1 , height:1}}} />
                        </Item>
                    </Form>
                </Row>
                <Row style={{  justifyContent:'flex-start'  }}>
                    <Col style={{ alignItems:'center'}}>
                        <Button style={{  backgroundColor:'#a2beaa' , width:90 , borderRadius:15}}>
                            <Text>Verify</Text>
                        </Button>
                    </Col>
                </Row>
            </Grid>
           
        </Container>
    )
}

export default VerifyCodeScreen;