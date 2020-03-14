
import web3 from 'web3';
import contract from '@truffle/contract';

import contractArtifact from '../build/contracts/UserFactory.json';

export default class UserFactoryService{

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


//   async businessPartners(){

//  const instance = await this.service.deployed(); 

//  const data = await instance.businessPartners.call();

// return data;

// }
  async renounceOwnership(_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. renounceOwnership(,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async owner(){

 const instance = await this.service.deployed(); 

 const data = await instance.owner.call();

return data;

}
  async isOwner(){

 const instance = await this.service.deployed(); 

 const data = await instance.isOwner.call();

return data;

}
//   async collectors(){

//  const instance = await this.service.deployed(); 

//  const data = await instance.collectors.call();

// return data;

// }
//   async residents(){

//  const instance = await this.service.deployed(); 

//  const data = await instance.residents.call();

// return data;

// }
  async transferOwnership(newOwner,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. transferOwnership(newOwner,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async isNewResident(user){

 const instance = await this.service.deployed(); 

 const data = await instance.isNewResident.call(user);

return data;

}
  async isNewCollector(user){

 const instance = await this.service.deployed(); 

 const data = await instance.isNewCollector.call(user);

return data;

}
  async isNewBusinessPartners(user){

 const instance = await this.service.deployed(); 

 const data = await instance.isNewBusinessPartners.call(user);

return data;

}
  async getResident(user){

 const instance = await this.service.deployed(); 

 const data = await instance.getResident.call(user);

return data;

}
  async getCollector(user){

 const instance = await this.service.deployed(); 

 const data = await instance.getCollector.call(user);

return data;

}
  async getBusinessPartners(user){

 const instance = await this.service.deployed(); 

 const data = await instance.getBusinessPartners.call(user);

return data;

}
  async addResident(resident,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. addResident(resident,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async addCollector(collector,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. addCollector(collector,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async addBusinessPartner(businessPartner,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. addBusinessPartner(businessPartner,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }

}