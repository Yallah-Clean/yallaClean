
import React, { useState, useEffect } from 'react';
import { Container,Header, Grid, Row, Content, Button, Text, Thumbnail, Form, Item, Input, Icon, Col, ListItem, Body, CheckBox } from 'native-base';
import LocalStorageService from '../service/core/LocalStorage.service.js'
const SignInScreen = ({ navigation}) => {
    const Url = require('../assets/logo2.jpg');
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);
  
    useEffect(() => {
      if (username.trim() && password.trim()) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    }, [username, password]);
  
    const handleLogin = async() => {
        const storage = new LocalStorageService();
        let user = await storage.getUser()
        console.log( user.username,' user.username');
        console.log(username,'username ');
        console.log(username == user.username,'username == user.username');
        console.log( password == user.password,'password == user.password');
        console.log( user.password,' user.password');
        console.log(password,'password');
        console.log(user,'user');
        
        if (username == user.username && password == user.password) {
            setError(false);
            setHelperText('Login Successfully');
           console.log('it works');
           
            
          } else  if (username == "org@test.com" && password == "123") {
            setError(false);
            setHelperText('Login Successfully');
           console.log('it works');
           
            
          }
          
          else {
            setError(true);
            setHelperText('Incorrect username or password')
            console.log('it doesnt work');
            
          }
    };
  
    const handleKeyPress = (e:any) => {
        
      if (e.keyCode === 13 || e.which === 13) {
        isButtonDisabled || handleLogin();
      }
    };
    // const [data,setData]=useState(state);

//   const   handleKeyPress= event => {
//     const { placeholder } = event.srcElement;

//     setData({ ...data, [placeholder]: event.target.value });
//     console.log(state,'state');
//     console.log(event,'event');
//   };


    
    

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
                            
                            <Input placeholder="username" onKeyPress={(e)=>handleKeyPress(e)}  onChangeText={(event) => setUsername(event)}  style={{ width:300}} />
                            <Icon  name="person"></Icon>
                        </Item>
                        <Item  rounded>
                            
                            <Input placeholder="password"  secureTextEntry={true}  onKeyPress={(e)=>handleKeyPress(e)} onChangeText={(event) => setPassword(event)}   style={{ width:300}} />
                            <Icon  name="lock" ></Icon>
                        </Item>
                   
                        <Row>
                            {/* <Col>
                                <ListItem style={{width:180}}>
                                    <CheckBox checked={false} />
                                    <Body>
                                        <Text>Remember Me</Text>
                                    </Body>
                                </ListItem>
                            </Col> */}
                            <Col>
                            <Button onPressIn ={() => navigation.navigate('Choose')} style={{width:180}} transparent >
                                <Text style={{color:'red'}}>New User?</Text>
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row style={{  justifyContent:'center'  }}>
                <Button onPressIn ={() => handleLogin()} style={{position:'relative' , top:50 , backgroundColor:'#a2beaa' , width:90 , borderRadius:15}}>
                            <Text>SignIn</Text>
                        </Button>
                    {/* <Col style={{ alignItems:'center'}}>
                        <Button onPressIn ={() => navigation.navigate('Choose')} style={{ position:'relative' , top:50,  backgroundColor:'#fff' , width:90 , borderColor:'#a2beaa' , borderStyle:'solid' , borderWidth:2 ,  borderRadius:15}} >
                            <Text style={{color:'#a2beaa'}}>SignUp</Text>
                        </Button>
                    </Col> */}
                </Row>
            </Grid>
           
        </Container>
    )
}

export default SignInScreen;


