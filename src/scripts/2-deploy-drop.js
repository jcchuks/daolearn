import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const app = sdk.getAppModule("0x288926acA2b6ecCF137c9E36F6d6BF6d52c9b785");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "JuryDao Membership",
            description: "A DAO for the community",
            image: readFileSync("scripts/assets/life.jpeg"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });
        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
          );
          console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
          );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()