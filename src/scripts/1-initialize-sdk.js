import { ThirdwebSDK } from "@3rdweb/sdk";
import {ethers} from "ethers";

import dotenv from "dotenv";
dotenv.config(); 
if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
    console.log("🛑 Private key not found.")
  }
  
  if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === "") {
    console.log("🛑 Alchemy API URL not found.")
  }
  
  if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
    console.log("🛑 Wallet Address not found.")
  }

  const sdk = new ThirdwebSDK(
      new ethers.Wallet(
          process.env.PRIVATE_KEY,
          ethers.getDefaultProvider(process.env.ALCHEMY_API_URL)
      ),
  );

  (async () => {
      try {
          const apps = await sdk.getApps();
          console.log("Your app address is: ", apps[0].address); //0x288926acA2b6ecCF137c9E36F6d6BF6d52c9b785
      } catch (err) {
        console.error("Failed to get apps from the sdk", err);
        process.exit(1);
      }
  })()

  export default sdk;
  
