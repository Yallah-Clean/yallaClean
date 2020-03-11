import React from 'react';
import { Container, Header, Col, Row , Grid,  Content, Thumbnail, Form, Item,  Input, Icon, ListItem, CheckBox, Body , Text, Button} from 'native-base';


const ForgotPasswordScreen = function(){
    const Url = require('../assets/logo2.jpg');
    return(        
        <Container>
            <Header />
            <Grid>
                <Row style={{  justifyContent:'center'  }}>
                    <Content contentContainerStyle={{ alignItems:'center' , borderColor:'#f00'}} >
                        <Thumbnail style={{width:180 , height:180  , position:'relative' , top:30 }} source={{uri:Url}}></Thumbnail>
                        <Text style={{fontSize:24 , fontWeight:'bold', position:'relative' , top: 50}}>Forgot Password</Text>
                    </Content>
                </Row>
                <Row style={{ justifyContent:'center'}}>
                    <Form style={{ position:'relative' , top:20}}>
                        <Item floatingLabel rounded>
                            <Input placeholder="phone"  style={{ width:300}} />
                        </Item>
                    </Form>
                </Row>
                <Row style={{  justifyContent:'center'  }}>
                    <Col style={{ alignItems:'center'}}>
                        <Button style={{  backgroundColor:'#a2beaa' , width:90 , borderRadius:15}}>
                            <Text>Reset</Text>
                        </Button>
                    </Col>
                </Row>
            </Grid>
           
        </Container>
    )
}

export default ForgotPasswordScreen;