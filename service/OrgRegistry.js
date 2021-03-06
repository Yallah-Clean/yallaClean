
import web3 from 'web3';
import contract from '@truffle/contract';

import contractArtifact from '../build/contracts/OrgRegistry.json';

export default class OrgRegistryService{

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

// add new org " this should be done though factory contract later on"
async deployContract(orgOwner, adminAddress, tokenAddress,  rate, from) {

  return await this.service.new( orgOwner, adminAddress, tokenAddress,  rate,{from:from}); 


}


  async collectorRate( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.collectorRate.call();

return data;

}
  async getDeliveredCode(bhash, contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.getDeliveredCode.call(bhash);

return data;

}
  async userFactory( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.userFactory.call();

return data;

}
  async rate( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.rate.call();

return data;

}
  async trashsubmission( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.trashsubmission.call();

return data;

}
  async residentRate( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.residentRate.call();

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
  async pointRaised( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.pointRaised.call();

return data;

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
  async getTrashListItem(code ,contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.trashList.call(code);

return data;

}
  async getDeliveredAmount(bhash ,contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.getDeliveredAmount.call(bhash);

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
  async admin( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.admin.call();

return data;

}
  async token( contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.token.call();

return data;

}
  async calcCollectorPoints(code,amount ,contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.calcCollectorPoints.call(code,amount);

return data;

}
  async calcResidentPoints(code,amount ,contractAddress){

 const instance = await this.service.at( contractAddress); 

 const data = await instance.calcResidentPoints.call(code,amount);

return data;

}
  async manageTrashType(code,name,UnitName,unitMaltiplier,price,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. manageTrashType(code,name,UnitName,unitMaltiplier,price,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async approve(_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. approve({ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async addDelivery(location,time,code,amount,residnet,mapHash,account,_from,_gas, contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. addDelivery(location,time,code,amount,residnet,mapHash,account,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async validateDeliverables(mapHash,points,account,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. validateDeliverables(mapHash,points,account,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async confirmPickup(mapHash,points,account,_from, _gas ,contractAddress){

 const instance = await this.service.at( contractAddress)

 .then(_instance => {
 return _instance. confirmPickup(mapHash,points,account,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }

}