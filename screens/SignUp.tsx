import React from 'react';
import { Container, Grid, View, Content, Header, Text, Thumbnail, Row, Form, Item, Input, Col, Button } from "native-base";




function SignUpScreen({ navigation }){
    const Url = require('../assets/logo1.png');
    return (
        <Container>
            <Header />
            <Grid>
                <View style={{  justifyContent:'center' , width:414 , height:300 }}>
                    <Content contentContainerStyle={{ alignItems:'center' , borderColor:'#f00'}} >
                        <Thumbnail style={{width:180 , height:180  , position:'relative' , top:30 }} source={{uri:Url}}></Thumbnail>
                        <Text style={{fontSize:24 , fontWeight:'bold', position:'relative' , top: 50}}>Sign Up</Text>
                        <Text style={{fontSize:16 , fontWeight:'normal' , position: 'relative' , top:60}}>it's easier to signup now</Text>
                    </Content>
                </View>
                <Row style={{ justifyContent:'space-between' , alignItems:'center' , borderColor:'#455' }}>
                    <Button onPressIn ={() => navigation.navigate('CollectorReg')} transparent light>
                        <Text style={{color:'#A5604F' , fontFamily:'Rosario' , fontStyle:'normal' , fontWeight:'bold' , fontSize:16 , lineHeight:19 , textAlign:'center'}}>As Collector</Text>
                    </Button>

                    <Button onPressIn ={() => navigation.navigate('ResidentReg')} transparent light>
                        <Text style={{color:'#A5604F' , fontFamily:'Rosario' , fontStyle:'normal' , fontWeight:'bold' , fontSize:16 , lineHeight:19 , textAlign:'center'}}>As Resident</Text>
                    </Button>
                </Row>
                <Row style={{  justifyContent:'flex-start' , flexDirection:'column' , alignItems:'center' }}>  
                        <Button style={{  backgroundColor:'#2B7CF7' , width:250 , borderRadius:12}}>
                            <Text>Continue with Facebook</Text>
                        </Button>
                        <Button style={{  backgroundColor:'#FAFFFB' , borderColor:'#43995B' , borderStyle:'solid' , borderWidth:1 , width:250 , borderRadius:12 , position:'relative' , top:10}}>
                            <Text style={{ color:'#000000'}}>I'll Use Email or Phone</Text>
                        </Button>
                </Row>
                <Row style={{  justifyContent:'center' , flexDirection:'row' , alignItems:'center' }}>
                    <Text>Already have account?</Text>
                    <Button transparent light>
                        <Text style={{ color:'#2B7CF7' , fontFamily:'Rosario' , fontStyle:'normal' , fontWeight:'normal' , fontSize:14 , lineHeight:17 , textAlign:'center'}}>Sign In</Text>
                    </Button>
                </Row>
            </Grid>
           
        </Container>
    )
}

export default SignUpScreen;