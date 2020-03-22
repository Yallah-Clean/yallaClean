
import React from 'react';
import { Container,Header, Grid, Row, Content, Button, Text, Thumbnail, Form, Item, Input, Icon, Col, ListItem, Body, CheckBox } from 'native-base';

const RegisterChoiceScreen = ({ navigation}) => {
    const collectorImage = require('../assets/collector.jpg');
    const residnetImage = require('../assets/residnet.jpg');
    return(        
        <Container>
            <Header />
            <Grid>
                <Row style={{  justifyContent:'center'  }}>

                    <Content onTouchEnd={() => navigation.navigate('ResidentReg')}  contentContainerStyle={{ alignItems:'center' , borderColor:'#f00'}} >
                    <Text>Register as Resident</Text>

                        <Thumbnail  style={{width:180 , height:180 , borderRadius:90 , position:'relative' , top:30 }} source={{uri:residnetImage}}></Thumbnail>
                    </Content>
                </Row>
                <Row style={{  justifyContent:'center'  }}>
                    <Content onTouchEnd={() => navigation.navigate('CollectorReg')} contentContainerStyle={{ alignItems:'center' , borderColor:'#f00'}} >
                    <Text>Register as Collector</Text>

                        <Thumbnail style={{width:180 , height:180 , borderRadius:90 , position:'relative' , top:30 }} source={{uri:collectorImage}}></Thumbnail>
                    </Content>
                </Row>
              
            </Grid>
           
        </Container>
    )
}

export default RegisterChoiceScreen;


