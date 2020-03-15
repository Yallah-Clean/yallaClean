
import web3 from 'web3';
import contract from '@truffle/contract';

import contractArtifact from '../build/contracts/YCAdminRole.json';

export default class YCAdminRoleService{

constructor() { 

this.web3Provider = new web3.providers.HttpProvider(
'https://ropsten.infura.io/v3/a30f44f7f6de4a7dbe4c9ad2eea7420e'
);

this.web3 = new web3(this.web3Provider);

this.initContract().then(s => {});

}

async initContract() {

this.service = contract(contractArtifact);

this.service.setProvider(this.web3Provider);

}


  async isYCAdmin(account){

 const instance = await this.service.deployed(); 

 const data = await instance.isYCAdmin.call(account);

return data;

}
  async addYCAdmin(account,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. addYCAdmin(account,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async renounceYCAdmin(_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. renounceYCAdmin({ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }

}