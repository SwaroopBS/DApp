import web3 from "./web3";
import Manager_Contract from "./build/Manager_Contract.json";

    //console.log(web3);
    const instance1 = new web3.eth.Contract(
    JSON.parse(Manager_Contract.interface),
    "---"
    );
    

export default instance1;
