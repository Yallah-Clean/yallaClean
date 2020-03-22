import DataService from './data.service';

export default class ApiService {
  constructor() {
    this.dataService = new DataService();
  }

  // User APIS
  async login(data) {
    return await this.dataService.post('users/login', data);
  }
  async register(data) {
    return await this.dataService.post('users/register', data);
  }
  async addAdmin(data) {
    return await this.dataService.post('users/admin', data);
  }
  async registerOrg(data) {
    return await this.dataService.post('users/organization', data);
  }
  async banOrg(data, id) {
    return await this.dataService.postById('users/ban', id, data);
  }
  async approveOrg(data, id) {
    return await this.dataService.postById('users/approve', id, data);
  }
  async rejectOrg(data, id) {
    return await this.dataService.postById('users/reject', id, data);
  }
  async requestToApprove(data) {
    /**
     *   fullName;
         license;
         auditReport;
         passport;
         location;
         desc;
         bankAccount;
         cryptoAddress;
     */
    return await this.dataService.post('users/orgApply', data);
  }
  async getAllUsers() {
    return await this.dataService.getList('users');
  }
  async getAdmins() {
    return await this.dataService.getList('users/admins');
  }
  async getOrgs() {
    return await this.dataService.getList('users/organizations/');
  }
  async getDonors() {
    return await this.dataService.getList('users/donors/');
  }
  async getRejected() {
    return await this.dataService.getList('users/rejected/');
  }
  async getApproved() {
    return await this.dataService.getList('users/approved/');
  }
  async getBanned() {
    return await this.dataService.getList('users/banned/');
  }
  async getRequests() {
    return await this.dataService.getList('users/requests/');
  }
  async getOrgLeaderBoard() {
    return await this.dataService.getList('users/orgLeaderBoard/');
  }
  async getUserById(id) {
    return await this.dataService.getSingle('users/', id);
  }

  //Token APIS
  async purchaseByEth(data) {
    return await this.dataService.post('tokens/purchaseByEth/', data);
  }
  async purchaseBybank(data) {
    return await this.dataService.post('tokens/purchaseBybank/', data);
  }
  async managePurchase(data, id) {
    return await this.dataService.postById('tokens/managePurchase', id, data);
  }
  async getAllTokenTrans() {
    return await this.dataService.getList('tokens/all/');
  }
  async getUsertokenTrans() {
    return await this.dataService.getList('tokens/user/');
  }
  async getPurchaseByBank() {
    return await this.dataService.getList('tokens/purchaseByBank/');
  }
  async getPurchaseByEth() {
    return await this.dataService.getList('tokens/purchaseByEth/');
  }
  async getRejectedTrans() {
    return await this.dataService.getList('tokens/rejected/');
  }
  async getApprovedTrans() {
    return await this.dataService.getList('tokens/approved/');
  }
  async getPendingTrans() {
    return await this.dataService.getList('tokens/pending/');
  }
  async getUserTrans(id) {
    return await this.dataService.getSingle('tokens/', id);
  }
  async getTransDetails(id) {
    return await this.dataService.getSingle('tokens/details', id);
  }

  //Campaign APIS
  async addCampaign(data) {
    return await this.dataService.post('campaign/', data);
  }
  async getAllCampaignsRequests() {
    return await this.dataService.getList('campaign/requests');
  }
  async getAllCampaigns() {
    return await this.dataService.getList('campaign/');
  }
  async getAllApprovedCampaigns() {
    return await this.dataService.getList('campaign/approved');
  }
  async getCampaignByHash(data) {
    return await this.dataService.getByData('campaign/getByHash/', data);
  }
  async getCampaign(id) {
    return await this.dataService.getSingle('campaign/', id);
  }
  async getCampaignFullDetails(id) {
    return await this.dataService.getSingle('campaign/campaignfullDetails', id);
  }
  async banCampaign(data, id) {
    return await this.dataService.postById('campaign/ban', id, data);
  }
  async approveCampaign(data, id) {
    return await this.dataService.postById('campaign/approve', id, data);
  }
  async rejectCampaign(data, id) {
    return await this.dataService.postById('campaign/reject', id, data);
  }
  //transactions APIS
  async addTransaction(data) {
    return await this.dataService.post('transaction/', data);
  }
  async getAllTransaction() {
    return await this.dataService.getList('transaction/');
  }
  async getCampaignFundRaised(name) {
    return await this.dataService.getList('transaction/fundRaised', name);
  }

  //Escrow APIS
  async addEscrow(data) {
    return await this.dataService.post('escrows/', data);
  }
  async releaseEscrow(data, id) {
    return await this.dataService.postById('escrows/release/', id, data);
  }
  async getAllEscrows() {
    return await this.dataService.getList('escrows/');
  }
  async getUnreleasedEscrows() {
    return await this.dataService.getList('escrows/unreleased');
  }
  async getUserEscrows(id) {
    return await this.dataService.getSingle('escrows/user', id);
  }
  async getEscrow(id) {
    return await this.dataService.getSingle('escrows/', id);
  }
}
