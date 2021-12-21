import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";


const voteModule = sdk.getVoteModule("0x4a457c3697E1Bc3b0396938a33c5DB9570A8A950");

const tokenModule = sdk.getTokenModule("0x94fd0ce4a3494c3c8efcc5f09ba2d98089d4405f");

(async()=>{
    try{
        await tokenModule.grantRole("minter", voteModule.address);
        console.log("Successfully gave vote module permissions to act on token module")
    }catch(error){
        console.error("failed to grant vote module permissions on token module", error);
        process.exit(1);
    }

    try{
        const ownedTokenBalance = await tokenModule.balanceOf(process.env.WALLET_ADDRESS);
        console.log( ownedTokenBalance.value, "JURAS in wallet", process.env.WALLET_ADDRESS);
        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
        const percent90 = ownedAmount.div(100).mul(90);
        await tokenModule.transfer(voteModule.address, percent90);
        console.log("✅ Successfully transferred tokens to vote module");
    } catch (err) {
      console.error("failed to transfer tokens to vote module", err);
    }
})()