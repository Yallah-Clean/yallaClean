
import web3 from 'web3';
import contract from '@truffle/contract';

import contractArtifact from '../build/contracts/UserWallet.json';

export default class UserWalletService{

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


  async raisedPoints( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.raisedPoints.call();

return data;

}
  async orgRegistry( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.orgRegistry.call();

return data;

}
  async renounceOwnership(_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. renounceOwnership({ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async owner( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.owner.call();

return data;

}
  async isOwner( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.isOwner.call();

return data;

}
  async isCollector( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.isCollector.call();

return data;

}
  async currentPoints( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.currentPoints.call();

return data;

}
  async transferOwnership(newOwner,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

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
  async approveCollector(status,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. approveCollector(status,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async residentSendRequest(location,time,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. residentSendRequest(location,time,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async residentConfirm(bhash,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. residentConfirm(bhash,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async collectorSubmitRequest(location,time,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. collectorSubmitRequest(location,time,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async collectorAddDelivery(location,time,code,amount,_resident,mapHash,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. collectorAddDelivery(location,time,code,amount,_resident,mapHash,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async OrgConfirm(bhash,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. OrgConfirm(bhash,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }

}