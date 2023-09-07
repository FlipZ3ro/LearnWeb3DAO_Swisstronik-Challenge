const hre = require("hardhat");

const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");



const sendShieldedTransaction = async (signer, destination, data, value) => {

  const rpclink = hre.network.config.url;

  const [encryptedData] = await encryptDataField(rpclink, data);

  return await signer.sendTransaction({

    from: signer.address,

    to: destination,

    data: encryptedData,

    value,

  });

};



async function main() {

  const contractAddress = "0x7093D0e0b1aAdBd543C37c248b8d3A7D4CaE06A5";

  const [signer] = await hre.ethers.getSigners();

  const contractFactory = await hre.ethers.getContractFactory("Swisstronik");

  const contract = contractFactory.attach(contractAddress);

  const functionName = "setMessage";

  const messageToSet = "Hello Swisstronik!!";

  const setMessageTx = await sendShieldedTransaction(signer, contractAddress, contract.interface.encodeFunctionData(functionName, [messageToSet]), 0);

  await setMessageTx.wait();

  console.log("Transaction Receipt: ", setMessageTx);

}



main().catch((error) => {

  console.error(error);

  process.exitCode = 1;

});
