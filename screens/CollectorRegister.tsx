
import React from 'react';
import { Container,Header, Grid, Row, Content, Button, Text, Thumbnail, Form, Item, Input, Icon, Col, ListItem, Body, CheckBox } from 'native-base';

const SignInScreen = ({ navigation}) => {
    const Url = require('../assets/logo2.jpg');
    return(        
        <Container>
            <Header />
            <Grid>
                <Row style={{  justifyContent:'center'  }}>
                    <Content contentContainerStyle={{ alignItems:'center' , borderColor:'#f00'}} >
                        <Thumbnail style={{width:180 , height:180 , borderRadius:90 , position:'relative' , top:30 }} source={{uri:Url}}></Thumbnail>
                    </Content>
                </Row>
                <Row style={{ justifyContent:'center'}}>
                    <Form style={{ position:'relative' , top:20}}>
                        <Item  rounded>
                            
                            <Input placeholder="Username" style={{ width:300}} />
                            <Icon  name="person"></Icon>
                        </Item>
                        <Item floatingLabel rounded>
                        
                            <Input placeholder="password" style={{ width:300}} />
                            <Icon  name="lock" ></Icon>
                        </Item>
                        <Row>
                            <Col>
                                <ListItem style={{width:180}}>
                                    <CheckBox checked={false} />
                                    <Body>
                                        <Text>Remember Me</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                            <Button onPressIn ={() => navigation.navigate('ForgotPassword')} style={{width:180}} transparent >
                                <Text style={{color:'red'}}>Forgot Password?</Text>
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row style={{  justifyContent:'center'  }}>
                    <Col style={{ alignItems:'center'}}>
                        <Button onPressIn ={() => navigation.navigate('SignIn')} style={{position:'relative' , top:50 , backgroundColor:'#a2beaa' , width:90 , borderRadius:15}}>
                            <Text>SignIn</Text>
                        </Button>
                    </Col>
                    <Col style={{ alignItems:'center'}}>
                        <Button onPressIn ={() => navigation.navigate('Choose')} style={{ position:'relative' , top:50,  backgroundColor:'#fff' , width:90 , borderColor:'#a2beaa' , borderStyle:'solid' , borderWidth:2 ,  borderRadius:15}} >
                            <Text style={{color:'#a2beaa'}}>SignUp</Text>
                        </Button>
                    </Col>
                </Row>
            </Grid>
           
        </Container>
    )
}

export default SignInScreen;


