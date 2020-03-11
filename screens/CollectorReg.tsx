import React from 'react';
import { Container, Grid, View, Content, Thumbnail, Row, Button , Text , Header , Form , Item , Input , Icon } from "native-base";



function CollectorRegScreen(){
    const Url = require('../assets/logo2.jpg');
    return(
        <Container>
        <Header />
        <Grid>
            <View style={{  justifyContent:'center' , width:414 , height:250 }}>
                <Content contentContainerStyle={{ alignItems:'center' , borderColor:'#f00'}} >
                    <Thumbnail style={{width:240 , height:180  , position:'relative' , top:30 }} source={{uri:Url}}></Thumbnail>
                    <Text style={{fontSize:24 , fontWeight:'bold', position:'relative' , top: 40}}>Collector</Text>
                    
                </Content>
            </View>
            <Row style={{ justifyContent:'center'}}>
                    <Form style={{ }}>
                        <Item floatingLabel rounded>
                            <Input placeholder="Name"  style={{ width:300}} />
                        </Item>
                        <Item floatingLabel rounded>
                            <Input placeholder="Phone"  style={{ width:300}} />
                        </Item>
                        <Item floatingLabel rounded>
                            <Input placeholder="National ID"  style={{ width:300}} />
                        </Item>
                        <Item floatingLabel rounded>
                            <Input placeholder="Address"  style={{ width:300}} />
                        </Item>
                        <Item floatingLabel rounded>
                            <Input placeholder="Image Card"  style={{ width:300}} />
                            <Icon active name="camera" ></Icon>
                        </Item>
                    </Form>
            </Row>
            <Row style={{  justifyContent:'center' , flexDirection:'column' , alignItems:'center' , position:'relative' , top:10}}>  
                    <Button style={{ justifyContent:'center',  backgroundColor:'#A2BEAA' , width:250 , borderRadius:12}}>
                        <Text style={{color:'#000'}}>Create Account</Text>
                    </Button>
            </Row>
            
        </Grid>
       
    </Container>
    )
}

export default CollectorRegScreen;