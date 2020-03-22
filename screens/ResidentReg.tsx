import React, { Component } from 'react';
import { Container, Grid, View, Content, Thumbnail, Row, Button , Text , Header , Form , Item, Input  } from "native-base";

import {Api } from '../api/api';
import UserFactoryService from '../service/UserFactory.js';
import WalletService from '../service/user-wallet/wallet.service.js';
import Web3Service from '../service/web3.service.js';
import LocalStorageService from '../service/core/LocalStorage.service.js'

const factoryAddress="0x45e00820163F3d1bb6Df0781666d90b4B29C26c9"
class ResidentRegScreen extends Component{
    imageUrl = require('../assets/logo2.jpg')
    accountPrivateKey: any;
    constructor(props){  
        super(props);
        console.log(props,'props');

    }
user={
    
}
    state = {
       ethAddress:"",
       privateKey:"",
       username:"",
       password:"",
       category:"resident",
       phone:"",
       address:"",
       walletAddress:""
    }
    userWallet = new WalletService();
    web3Service = new Web3Service();
    // createAccount(password) {

    //     return new Promise<any>((resolve, reject) => {
    //         try {
    //             this.userWallet.generateKeys((_keys)=> {
    //               console.log(_keys, 'keys from home');
          
    //               // export keys
    //               this.userWallet.exportKeys(_keys, password, (exResult) =>{
    //                 console.log(exResult, 'exResult');
    //                 const accountPublic = '0x'.concat(exResult.address);
    //                 if (this.web3Service.isVaildAddress(accountPublic)) {
    //                   this.setState({ ethAddress:accountPublic})
    //                   this.recover(exResult, password).then(s=>{
    //                     resolve(true)

    //                   })

    //                 }
    //               });
    //               // try get private key
    //               // self.userWallet.recoverKeys()
    //             });
    //           } catch (error) {
    //             reject(error)
    //           }
    //       });
     
    //   }
    

    //   recover(keyObject, password) {
    //     console.log(password, 'password');
    //     console.log(keyObject, 'keyObject');
    //     return new Promise<any>((resolve, reject) => {
    //         this.userWallet
    //         .recoverKeys(password, keyObject)
    //         .then(privateKey => {
    //           // this.accountPrivateKey = this.userWallet.buf2hex(privateKey);
    //           this.setState({privateKey:this.userWallet.buf2hex(privateKey)})
    //           // this.getAddress(this.accountPrivateKey);
    //           resolve(true)
    //         })
    //         .catch(err => {
    //           console.error(err);
    //           reject(err)
    //         });
    //       });
      
    //   }
    


  async  submit(){
      // create addresss
    //  await this.createAccount(this.state.password);
      // save to blockchain
      const address = await this.web3Service.createAccount(this.state.password);
      this.setState({ethAddress:address.address,privateKey:address.privateKey})
      const factory = new UserFactoryService(address.privateKey);
    //   const factory = new UserFactoryService();
      console.log(factory,'factory');

      
//   const tx=   await factory. addResident(this.state.ethAddress,this.state.ethAddress, 2000000000,factoryAddress);
//   console.log(tx,'tx');
  
const tx=  await factory. addResidentSigned(this.state.ethAddress, this.state.ethAddress, this.state.privateKey, 2000000000,factoryAddress)
     console.log(tx,'tx');
      
     // save to off chain storage
const wallet = await factory.getResident(this.state.ethAddress,factoryAddress);
this.setState({walletAddress:wallet});
const storage = new LocalStorageService();
await storage.setUser(this.state);
        console.log(this.state);
        console.log(this.props,'props');


        //Api.registerRes(this.state)
    }



    handleKeyPress(event){
        
        const { value } = event.target;
        const { placeholder } = event.srcElement;

        this.setState({
            [placeholder.charAt(0).toLowerCase() + placeholder.substring(1)]:value
        })

        console.log(placeholder.charAt(0).toLowerCase() + placeholder.substring(1),'test');
        console.log(event,'event');
        console.log(value,'value');
        console.log(placeholder,'placeholder');
    }


    render(){
        return(
            <Container>
            <Header />
            <Grid>
          
                <Row style={{  justifyContent:'center'  }}>
                <Content contentContainerStyle = {{ alignItems:'center' , borderColor:'#f00'}} >
                        <Thumbnail style={{width:240 , height:180  , position:'relative' , top:30 }} source={{uri:this.imageUrl}}></Thumbnail>
                        <Text style={{fontSize:24 , fontWeight:'bold', position:'relative' , top: 50}}>Resident</Text>
                    </Content>
                </Row>
                <Row style={{ justifyContent:'center'}}>
                <Form style={{ position:'relative' , top:20}}>
                        <Item  rounded>
                            
                            <Input placeholder="Username"                  

          onChangeText={() => this.handleKeyPress(event)}  style={{ width:300}} />
                        </Item>
                        <Item  rounded>
                            
                            <Input placeholder="Phone"  
          onChangeText={() => this.handleKeyPress(event)}  style={{ width:300}} />
                        </Item>
                        <Item  rounded>
                            
                            <Input placeholder="Address" 
          onChangeText={() => this.handleKeyPress(event)}  style={{ width:300}} />
                        </Item>
                        <Item  rounded>
                            
                            <Input placeholder="Password" secureTextEntry={true}
          onChangeText={() => this.handleKeyPress(event)}   style={{ width:300}} />
                        </Item>
                        <Row>
                          
                         
                        </Row>
                    </Form>
                                             
                </Row>
                <Row style={{  justifyContent:'center' , flexDirection:'row' , alignItems:'center' }}>  
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