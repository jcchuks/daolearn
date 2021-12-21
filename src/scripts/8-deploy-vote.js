import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0x288926acA2b6ecCF137c9E36F6d6BF6d52c9b785");

(async() => {
    try{
        const voteModule = await appModule.deployVoteModule({
            name: "JuryDAO Proposals",
            votingTokenAddress: "0x94FD0cE4a3494c3c8Efcc5F09ba2D98089d4405F",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0"
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
          );
    }catch(error){
        console.log("Failed to deploy vote module", err);
    }
})()