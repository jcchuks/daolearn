import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const bundleDrop = sdk.getBundleDropModule("0x81a9Cfb49C0311445362c58Fa74D8260C5c1D182");

(async()=> {
    try{
        await bundleDrop.createBatch([
            {
                name: "Leaf Village Headband",
                description: "This NFT will give you access to the JuryDAO",
                image: readFileSync("scripts/assets/poster.png"),
            }
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()