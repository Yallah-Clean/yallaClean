
import web3 from 'web3';
import contract from '@truffle/contract';

import contractArtifact from '../build/contracts/YallaCleanToken.json';

export default class YallaCleanTokenService{

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


  async name(){

 const instance = await this.service.deployed(); 

 const data = await instance.name.call();
console.log(instance,'instance');

return data;

}
  async approve(spender,amount,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. approve(spender,amount,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async totalSupply(){

 const instance = await this.service.deployed(); 

 const data = await instance.totalSupply.call();

return data;

}
  async transferFrom(sender,recipient,amount,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. transferFrom(sender,recipient,amount,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async decimals(){

 const instance = await this.service.deployed(); 

 const data = await instance.decimals.call();

return data;

}
  async increaseAllowance(spender,addedValue,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. increaseAllowance(spender,addedValue,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async mint(account,amount,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. mint(account,amount,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async balanceOf(account){

 const instance = await this.service.deployed(); 

 const data = await instance.balanceOf.call(account);

return data;

}
  async symbol(){

 const instance = await this.service.deployed(); 

 const data = await instance.symbol.call();

return data;

}
  async addMinter(account,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. addMinter(account,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async renounceMinter(_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. renounceMinter({ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async decreaseAllowance(spender,subtractedValue,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. decreaseAllowance(spender,subtractedValue,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async transfer(recipient,amount,_from,_gas){

 const instance = await this.service.deployed()

 .then(_instance => {
 return _instance. transfer(recipient,amount,{ from:_from, gas: _gas  });  })
 
 .then(res => {
 
   return res;
 
    })
 
 .catch(e => {
 
   console.log(e);
 
    });
 
   return instance;
 
 
 }
  async isMinter(account){

 const instance = await this.service.deployed(); 

 const data = await instance.isMinter.call(account);

return data;

}
  async allowance(owner,spender){

 const instance = await this.service.deployed(); 

 const data = await instance.allowance.call(owner,spender);

return data;

}

}