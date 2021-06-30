import web3 from "./web3";
import Student_Contract from "./build/Student_Contract.json";

var instance2;

    //console.log(web3);
    async function create_instance(){
        const instance2 = await new web3.eth.Contract(
            JSON.parse(Student_Contract.interface),
            "---"
            );
            const acc = await web3.eth.getAccounts();
            console.log(acc);
        
        
    };

    create_instance();

export default instance2;
