
class NetworkManager {
    static instance = null;
  
    static getInstance() {
      if (this.instance === null) {
        this.instance = new NetworkManager();
      }
      return this.instance;
    }
  
    async makeRequest(url, options) {
      try {
        let response = await fetch(url, options);
        let responseJson = await response.json();
        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  
    async getPosts() {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const options = {
        method: 'GET',
      };
      return await this.makeRequest(url, options);
    }
  }
  
  export default NetworkManager;
  