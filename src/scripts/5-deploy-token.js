
import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x288926acA2b6ecCF137c9E36F6d6BF6d52c9b785");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "Jury Governance Token",
      symbol: "JURA",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
