export const GAME_ABI = [{
  "type": "constructor",
  "inputs": [{ "name": "_yeetTokenAddress", "type": "address", "internalType": "address" }, {
    "name": "_reward",
    "type": "address",
    "internalType": "contract Reward",
  }, { "name": "_staking", "type": "address", "internalType": "contract StakeV2" }, {
    "name": "_gameSettings",
    "type": "address",
    "internalType": "contract YeetGameSettings",
  }, { "name": "_publicGoodsAddress", "type": "address", "internalType": "address" }, {
    "name": "_teamAddress",
    "type": "address",
    "internalType": "address",
  }, { "name": "_yeetardsNFTsAddress", "type": "address", "internalType": "address" }, {
    "name": "_entropy",
    "type": "address",
    "internalType": "address",
  }, { "name": "_entropyProvider", "type": "address", "internalType": "address" }],
  "stateMutability": "nonpayable",
}, { "type": "fallback", "stateMutability": "payable" }, {
  "type": "receive",
  "stateMutability": "payable",
}, {
  "type": "function",
  "name": "BOOSTRAP_PHASE_DURATION",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "COOLDOWN_TIME",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "MINIMUM_YEET_POINT",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "POT_DIVISION",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "TAX_PER_YEET",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "TAX_TO_PUBLIC_GOODS",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "TAX_TO_STAKERS",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "TAX_TO_TREASURY",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "YEETBACK_PERCENTAGE",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "YEET_TIME_SECONDS",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "claim",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "endOfYeetTime",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "gameSettings",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract YeetGameSettings" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getBoostedValue",
  "inputs": [{ "name": "sender", "type": "address", "internalType": "address" }, {
    "name": "value",
    "type": "uint256",
    "internalType": "uint256",
  }, { "name": "tokenIds", "type": "uint256[]", "internalType": "uint256[]" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getDistribution",
  "inputs": [{ "name": "yeetAmount", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "uint256",
    "internalType": "uint256",
  }, { "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "uint256",
    "internalType": "uint256",
  }, { "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getNFTBoost",
  "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }, {
    "name": "tokenIds",
    "type": "uint256[]",
    "internalType": "uint256[]",
  }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getWinner",
  "inputs": [{ "name": "round", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{
    "name": "",
    "type": "tuple",
    "internalType": "struct Yeet.Winner",
    "components": [{ "name": "user", "type": "address", "internalType": "address" }, {
      "name": "timestamp",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount", "type": "uint256", "internalType": "uint256" }, {
      "name": "round",
      "type": "uint256",
      "internalType": "uint256",
    }],
  }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "hasCooldownEnded",
  "inputs": [],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "isBoostrapPhase",
  "inputs": [],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "isRoundFinished",
  "inputs": [],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "lastYeeted",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "lastYeetedAt",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "minimumYeetPoint",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "nftBoostLookup",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "nrOfYeets",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "owner",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "pause",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "paused",
  "inputs": [],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "payoutPublicGoods",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "payoutTreasuryRevenue",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "potToWinner",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "potToYeetback",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "publicGoodsAddress",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "publicGoodsAmount",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "renounceOwnership",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "restart",
  "inputs": [{ "name": "userRandomNumber", "type": "bytes32", "internalType": "bytes32" }],
  "outputs": [],
  "stateMutability": "payable",
}, {
  "type": "function",
  "name": "rewardsContract",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract Reward" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "roundNumber",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "roundStartTime",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "setPublicGoodsAddress",
  "inputs": [{ "name": "_publicGoodsAddress", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setTreasuryRevenueAddress",
  "inputs": [{ "name": "_treasuryRevenueAddress", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setYeetardsNFTsAddress",
  "inputs": [{ "name": "_yeetardsNFTsAddress", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "stakingContract",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract StakeV2" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "transferOwnership",
  "inputs": [{ "name": "newOwner", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "treasuryRevenueAddress",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "treasuryRevenueAmount",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "unpause",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "updateStakingContract",
  "inputs": [{ "name": "_staking", "type": "address", "internalType": "contract StakeV2" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "winnings",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "yeet",
  "inputs": [],
  "outputs": [],
  "stateMutability": "payable",
}, {
  "type": "function",
  "name": "yeet",
  "inputs": [{ "name": "tokenIds", "type": "uint256[]", "internalType": "uint256[]" }],
  "outputs": [],
  "stateMutability": "payable",
}, {
  "type": "function",
  "name": "yeetTimeInSeconds",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "yeetTokenAddress",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "yeetardsNFTsAddress",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "yeetback",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract Yeetback" }],
  "stateMutability": "view",
}, {
  "type": "event",
  "name": "Claim",
  "inputs": [{ "name": "user", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "timestamp",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "value", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "OwnershipTransferred",
  "inputs": [{
    "name": "previousOwner",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "Paused",
  "inputs": [{ "name": "account", "type": "address", "indexed": false, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "PublicGoodsPaidOut",
  "inputs": [{ "name": "add", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "timestamp",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "RoundStarted",
  "inputs": [{ "name": "round", "type": "uint256", "indexed": true, "internalType": "uint256" }, {
    "name": "startTime",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "yeetTimeInSeconds",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "potDivision", "type": "uint256", "indexed": false, "internalType": "uint256" }, {
    "name": "taxPerYeet",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "taxToStakers",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "taxToPublicGoods",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "taxToTreasury",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "yeetbackPercentage",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "cooldownTime", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "RoundWinner",
  "inputs": [{ "name": "user", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "timestamp",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256" }, {
    "name": "round",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "nrOfYeets", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "TreasuryRevenuePaidOut",
  "inputs": [{ "name": "add", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "timestamp",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "Unpaused",
  "inputs": [{ "name": "account", "type": "address", "indexed": false, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "UpdatedPublicGoodsAddress",
  "inputs": [{ "name": "add", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "UpdatedTreasuryRevenueAddress",
  "inputs": [{ "name": "add", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "UpdatedYeetardsNFTsAddress",
  "inputs": [{ "name": "add", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "Yeet",
  "inputs": [{ "name": "user", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "timestamp",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "basisPointTaxed",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "amountToPot",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "amountToYeetback",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "potAfterYeet",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "yeetbackAfterYeet",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "newYeetTimeInSeconds",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "newMinimumYeetPoint",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "nrOfYeets", "type": "uint256", "indexed": false, "internalType": "uint256" }, {
    "name": "round",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "timeLeftOnTimer", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "YeetDistribution",
  "inputs": [{
    "name": "totalAmountYeeted",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "valueToPot",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "valueToYeetback",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "valueToStakers",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "publicGoods", "type": "uint256", "indexed": false, "internalType": "uint256" }, {
    "name": "teamRevenue",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "Yeetard",
  "inputs": [{ "name": "user", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "timestamp",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "potToWinnerAfter",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, {
    "name": "newMinimumYeetPoint",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "round", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "error",
  "name": "CooldownNotEnded",
  "inputs": [{ "name": "currentTime", "type": "uint256", "internalType": "uint256" }, {
    "name": "cooldownEndTime",
    "type": "uint256",
    "internalType": "uint256",
  }],
}, {
  "type": "error",
  "name": "DuplicateTokenId",
  "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }],
}, { "type": "error", "name": "EnforcedPause", "inputs": [] }, {
  "type": "error",
  "name": "ExpectedPause",
  "inputs": [],
}, {
  "type": "error",
  "name": "InsufficientYeet",
  "inputs": [{ "name": "provided", "type": "uint256", "internalType": "uint256" }, {
    "name": "minimum",
    "type": "uint256",
    "internalType": "uint256",
  }],
}, { "type": "error", "name": "InvalidRandomNumber", "inputs": [] }, {
  "type": "error",
  "name": "NFTNotEligibleForBoost",
  "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }],
}, {
  "type": "error",
  "name": "NoWinningsToClaim",
  "inputs": [{ "name": "user", "type": "address", "internalType": "address" }],
}, {
  "type": "error",
  "name": "NotEnoughValueToPayEntropyFee",
  "inputs": [{ "name": "value", "type": "uint256", "internalType": "uint256" }, {
    "name": "fee",
    "type": "uint256",
    "internalType": "uint256",
  }],
}, {
  "type": "error",
  "name": "OwnableInvalidOwner",
  "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }],
}, {
  "type": "error",
  "name": "OwnableUnauthorizedAccount",
  "inputs": [{ "name": "account", "type": "address", "internalType": "address" }],
}, { "type": "error", "name": "ReentrancyGuardReentrantCall", "inputs": [] }, {
  "type": "error",
  "name": "RoundStillLive",
  "inputs": [{ "name": "roundNumber", "type": "uint256", "internalType": "uint256" }],
}, {
  "type": "error",
  "name": "ToManyTokenIds",
  "inputs": [{ "name": "length", "type": "uint256", "internalType": "uint256" }],
}, {
  "type": "error",
  "name": "UserDoesNotOwnNFTs",
  "inputs": [{ "name": "user", "type": "address", "internalType": "address" }, {
    "name": "tokenId",
    "type": "uint256",
    "internalType": "uint256",
  }],
}, {
  "type": "error",
  "name": "YeetTimePassed",
  "inputs": [{ "name": "currentTime", "type": "uint256", "internalType": "uint256" }, {
    "name": "endTime",
    "type": "uint256",
    "internalType": "uint256",
  }],
}] as const;
export const REWARD_ABI = [{
  "type": "constructor",
  "inputs": [{ "name": "_token", "type": "address", "internalType": "contract IERC20" }, {
    "name": "_settings",
    "type": "address",
    "internalType": "contract RewardSettings",
  }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "acceptOwnership",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "addYeetVolume",
  "inputs": [{ "name": "user", "type": "address", "internalType": "address" }, {
    "name": "amount",
    "type": "uint256",
    "internalType": "uint256",
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "claim",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "clawbackTokens",
  "inputs": [{ "name": "tokenAmount", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "currentEpoch",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "currentEpochEnd",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "currentEpochStart",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "epochRewards",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getClaimableAmount",
  "inputs": [{ "name": "user", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getEpochRewardsForCurrentEpoch",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getLastMidnight",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "lastClaimedForEpoch",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "owner",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "pendingOwner",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "punchItChewie",
  "inputs": [{ "name": "epoch", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "renounceOwnership",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "rewardsSettings",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract RewardSettings" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "setYeetContract",
  "inputs": [{ "name": "_yeetContract", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "token",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IERC20" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "totalYeetVolume",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "transferOwnership",
  "inputs": [{ "name": "newOwner", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "userYeetVolume",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "address",
    "internalType": "address",
  }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "yeetContract",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "event",
  "name": "EpochStarted",
  "inputs": [{ "name": "epoch", "type": "uint256", "indexed": true, "internalType": "uint256" }, {
    "name": "startTime",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "endTime", "type": "uint256", "indexed": false, "internalType": "uint256" }, {
    "name": "rewards",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "OwnershipTransferStarted",
  "inputs": [{
    "name": "previousOwner",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "OwnershipTransferred",
  "inputs": [{
    "name": "previousOwner",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "ParsecSkipper",
  "inputs": [{ "name": "user", "type": "address", "indexed": false, "internalType": "address" }, {
    "name": "startEpoch",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "endEpoch", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "Rewarded",
  "inputs": [{ "name": "user", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "timestamp", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "error",
  "name": "OwnableInvalidOwner",
  "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }],
}, {
  "type": "error",
  "name": "OwnableUnauthorizedAccount",
  "inputs": [{ "name": "account", "type": "address", "internalType": "address" }],
}] as const;
export const STAKE_ABI = [{
  "type": "constructor",
  "inputs": [{ "name": "_stakingToken", "type": "address", "internalType": "contract IERC20" }, {
    "name": "_zapper",
    "type": "address",
    "internalType": "contract IZapper",
  }, { "name": "owner", "type": "address", "internalType": "address" }, {
    "name": "_wbera",
    "type": "address",
    "internalType": "contract IWETH",
  }],
  "stateMutability": "nonpayable",
}, { "type": "fallback", "stateMutability": "payable" }, {
  "type": "function",
  "name": "STAKING_LIMIT",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "accumulatedDeptRewardsYeet",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "accumulatedRewards",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "addManager",
  "inputs": [{ "name": "_manager", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "balanceOf",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "calculateRewardsEarned",
  "inputs": [{ "name": "account", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "calculateVesting",
  "inputs": [{
    "name": "vesting",
    "type": "tuple",
    "internalType": "struct StakeV2.Vesting",
    "components": [{ "name": "amount", "type": "uint256", "internalType": "uint256" }, {
      "name": "start",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "end", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "uint256",
    "internalType": "uint256",
  }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "claimRewardsInNative",
  "inputs": [{ "name": "amountToWithdraw", "type": "uint256", "internalType": "uint256" }, {
    "name": "swapData0",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "swapData1",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "unstakeParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultUnstakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }],
  }, {
    "name": "redeemParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultRedeemParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "shares", "type": "uint256", "internalType": "uint256" }, {
      "name": "minAssets",
      "type": "uint256",
      "internalType": "uint256",
    }],
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "claimRewardsInToken",
  "inputs": [{ "name": "amountToWithdraw", "type": "uint256", "internalType": "uint256" }, {
    "name": "outputToken",
    "type": "address",
    "internalType": "address",
  }, {
    "name": "swap0",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "swap1",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "unstakeParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultUnstakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }],
  }, {
    "name": "redeemParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultRedeemParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "shares", "type": "uint256", "internalType": "uint256" }, {
      "name": "minAssets",
      "type": "uint256",
      "internalType": "uint256",
    }],
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "claimRewardsInToken0",
  "inputs": [{ "name": "amountToWithdraw", "type": "uint256", "internalType": "uint256" }, {
    "name": "swapData",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "unstakeParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultUnstakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }],
  }, {
    "name": "redeemParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultRedeemParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "shares", "type": "uint256", "internalType": "uint256" }, {
      "name": "minAssets",
      "type": "uint256",
      "internalType": "uint256",
    }],
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "claimRewardsInToken1",
  "inputs": [{ "name": "amountToWithdraw", "type": "uint256", "internalType": "uint256" }, {
    "name": "swapData",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "unstakeParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultUnstakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }],
  }, {
    "name": "redeemParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultRedeemParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "shares", "type": "uint256", "internalType": "uint256" }, {
      "name": "minAssets",
      "type": "uint256",
      "internalType": "uint256",
    }],
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "depositReward",
  "inputs": [],
  "outputs": [],
  "stateMutability": "payable",
}, {
  "type": "function",
  "name": "depositWBERA",
  "inputs": [{ "name": "amount", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "executeRewardDistribution",
  "inputs": [{
    "name": "swap0",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "swap1",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "stakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultStakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Max",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Max", "type": "uint256", "internalType": "uint256" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "amountSharesMin",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "receiver", "type": "address", "internalType": "address" }],
  }, {
    "name": "vaultParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultDepositParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "minShares", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "executeRewardDistributionYeet",
  "inputs": [{
    "name": "swap",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "stakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultStakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Max",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Max", "type": "uint256", "internalType": "uint256" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "amountSharesMin",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "receiver", "type": "address", "internalType": "address" }],
  }, {
    "name": "vaultParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultDepositParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "minShares", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "getRewardIndex",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getVestings",
  "inputs": [{ "name": "addr", "type": "address", "internalType": "address" }],
  "outputs": [{
    "name": "",
    "type": "tuple[]",
    "internalType": "struct StakeV2.Vesting[]",
    "components": [{ "name": "amount", "type": "uint256", "internalType": "uint256" }, {
      "name": "start",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "end", "type": "uint256", "internalType": "uint256" }],
  }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "managers",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "rageQuit",
  "inputs": [{ "name": "index", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "removeManager",
  "inputs": [{ "name": "_manager", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "rewardIndex",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "stake",
  "inputs": [{ "name": "amount", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "stakedTimes",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "stakingToken",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IERC20" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "startUnstake",
  "inputs": [{ "name": "unStakeAmount", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "totalSupply",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "totalVaultShares",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "unstake",
  "inputs": [{ "name": "index", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "vestings",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }, {
    "name": "",
    "type": "uint256",
    "internalType": "uint256",
  }],
  "outputs": [{ "name": "amount", "type": "uint256", "internalType": "uint256" }, {
    "name": "start",
    "type": "uint256",
    "internalType": "uint256",
  }, { "name": "end", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "wbera",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IWETH" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "zapper",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IZapper" }],
  "stateMutability": "view",
}, {
  "type": "event",
  "name": "Claimed",
  "inputs": [{ "name": "addr", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "RageQuit",
  "inputs": [{ "name": "addr", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "amountBurned", "type": "uint256", "indexed": false, "internalType": "uint256" }, {
    "name": "index",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "RageQuitEnabled",
  "inputs": [{ "name": "enabled", "type": "bool", "indexed": false, "internalType": "bool" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "RewardDeposited",
  "inputs": [{ "name": "sender", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "RewardsDistributed",
  "inputs": [{
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "rewardIndex", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "RewardsDistributedToken0",
  "inputs": [{
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "rewardIndex", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "Stake",
  "inputs": [{ "name": "addr", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "Unstake",
  "inputs": [{ "name": "addr", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "index", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "VestingStarted",
  "inputs": [{ "name": "addr", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "index", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, { "type": "error", "name": "ReentrancyGuardReentrantCall", "inputs": [] }] as const;
export const LOTTERY_ABI = [{
  "type": "constructor",
  "inputs": [{ "name": "_entropy", "type": "address", "internalType": "address" }, {
    "name": "_entropyProvider",
    "type": "address",
    "internalType": "address",
  }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "_entropyCallback",
  "inputs": [{ "name": "sequence", "type": "uint64", "internalType": "uint64" }, {
    "name": "provider",
    "type": "address",
    "internalType": "address",
  }, { "name": "randomNumber", "type": "bytes32", "internalType": "bytes32" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "acceptOwnership",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "addYeetback",
  "inputs": [{ "name": "userRandomNumber", "type": "bytes32", "internalType": "bytes32" }, {
    "name": "round",
    "type": "uint256",
    "internalType": "uint256",
  }, { "name": "amount", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "payable",
}, {
  "type": "function",
  "name": "addYeetsInRound",
  "inputs": [{ "name": "round", "type": "uint256", "internalType": "uint256" }, {
    "name": "user",
    "type": "address",
    "internalType": "address",
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "amountOfWins",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "address",
    "internalType": "address",
  }],
  "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "amountToWinners",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "claim",
  "inputs": [{ "name": "round", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "claimable",
  "inputs": [{ "name": "round", "type": "uint256", "internalType": "uint256" }, {
    "name": "user",
    "type": "address",
    "internalType": "address",
  }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "claimed",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "address",
    "internalType": "address",
  }],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "finishedSequenceNumbers",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getEntropyFee",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint128", "internalType": "uint128" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "getYeetsInRound",
  "inputs": [{ "name": "round", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "address[]", "internalType": "address[]" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "owner",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "pendingOwner",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "potForRound",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "renounceOwnership",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "sequenceToRound",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "transferOwnership",
  "inputs": [{ "name": "newOwner", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "yeetsInRound",
  "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "uint256",
    "internalType": "uint256",
  }],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "event",
  "name": "Claimed",
  "inputs": [{ "name": "round", "type": "uint256", "indexed": true, "internalType": "uint256" }, {
    "name": "user",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "OwnershipTransferStarted",
  "inputs": [{
    "name": "previousOwner",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "OwnershipTransferred",
  "inputs": [{
    "name": "previousOwner",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "RandomNumberRequested",
  "inputs": [{ "name": "sequenceNumber", "type": "uint256", "indexed": true, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "YeetbackAdded",
  "inputs": [{ "name": "round", "type": "uint256", "indexed": true, "internalType": "uint256" }, {
    "name": "amount",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "YeetbackWinner",
  "inputs": [{ "name": "round", "type": "uint256", "indexed": true, "internalType": "uint256" }, {
    "name": "winner",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256" }, {
    "name": "winningYeetIndex",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }],
  "anonymous": false,
}, {
  "type": "error",
  "name": "OwnableInvalidOwner",
  "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }],
}, {
  "type": "error",
  "name": "OwnableUnauthorizedAccount",
  "inputs": [{ "name": "account", "type": "address", "internalType": "address" }],
}, { "type": "error", "name": "ReentrancyGuardReentrantCall", "inputs": [] }] as const;
export const ZAPPER_ABI = [{
  "type": "constructor",
  "inputs": [{
    "name": "_swapRouter",
    "type": "address",
    "internalType": "address",
  }, { "name": "_kodiakV1RouterStaking", "type": "address", "internalType": "address" }, {
    "name": "_wbera",
    "type": "address",
    "internalType": "address",
  }],
  "stateMutability": "nonpayable",
}, { "type": "fallback", "stateMutability": "payable" }, {
  "type": "receive",
  "stateMutability": "payable",
}, {
  "type": "function",
  "name": "kodiakStakingRouter",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IKodiakV1RouterStaking" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "owner",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "referralCode",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "renounceOwnership",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setCompoundingVault",
  "inputs": [{ "name": "vault", "type": "address", "internalType": "address" }, {
    "name": "isWhitelisted",
    "type": "bool",
    "internalType": "bool",
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setKodiakStakingRouter",
  "inputs": [{ "name": "router", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setReferralCode",
  "inputs": [{ "name": "code", "type": "uint32", "internalType": "uint32" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setSwapRouter",
  "inputs": [{ "name": "_swapRouter", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "swapRouter",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IOBRouter" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "transferOwnership",
  "inputs": [{ "name": "newOwner", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "updateSwappableTokens",
  "inputs": [{ "name": "token", "type": "address", "internalType": "address" }, {
    "name": "isWhitelisted",
    "type": "bool",
    "internalType": "bool",
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "updateWhitelistedKodiakVault",
  "inputs": [{ "name": "vault", "type": "address", "internalType": "address" }, {
    "name": "isEnabled",
    "type": "bool",
    "internalType": "bool",
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "wbera",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IWETH" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "whitelistedCompoundingVaults",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "whitelistedKodiakVaults",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "whitelistedTokens",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "zapIn",
  "inputs": [{ "name": "inputToken", "type": "address", "internalType": "address" }, {
    "name": "swapToToken0",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "swapToToken1",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "stakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultStakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Max",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Max", "type": "uint256", "internalType": "uint256" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "amountSharesMin",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "receiver", "type": "address", "internalType": "address" }],
  }, {
    "name": "vaultParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultDepositParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "minShares", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "uint256",
    "internalType": "uint256",
  }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "zapInNative",
  "inputs": [{
    "name": "swapData0",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "swapData1",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "stakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultStakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Max",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Max", "type": "uint256", "internalType": "uint256" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "amountSharesMin",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "receiver", "type": "address", "internalType": "address" }],
  }, {
    "name": "vaultParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultDepositParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "minShares", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [{
    "name": "islandTokensReceived",
    "type": "uint256",
    "internalType": "uint256",
  }, { "name": "vaultSharesReceived", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "payable",
}, {
  "type": "function",
  "name": "zapInToken0",
  "inputs": [{
    "name": "swapData",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "stakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultStakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Max",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Max", "type": "uint256", "internalType": "uint256" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "amountSharesMin",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "receiver", "type": "address", "internalType": "address" }],
  }, {
    "name": "vaultParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultDepositParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "minShares", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "uint256",
    "internalType": "uint256",
  }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "zapInToken1",
  "inputs": [{
    "name": "swapData",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "stakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultStakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Max",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Max", "type": "uint256", "internalType": "uint256" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "amountSharesMin",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "receiver", "type": "address", "internalType": "address" }],
  }, {
    "name": "vaultParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultDepositParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "minShares", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "uint256",
    "internalType": "uint256",
  }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "zapInWithMultipleTokens",
  "inputs": [{
    "name": "swapParams",
    "type": "tuple",
    "internalType": "struct IZapper.MultiSwapParams",
    "components": [{
      "name": "inputTokens",
      "type": "address[]",
      "internalType": "address[]",
    }, {
      "name": "swapToToken0",
      "type": "tuple[]",
      "internalType": "struct IZapper.SingleTokenSwap[]",
      "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
        "name": "outputQuote",
        "type": "uint256",
        "internalType": "uint256",
      }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
        "name": "executor",
        "type": "address",
        "internalType": "address",
      }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
    }, {
      "name": "swapToToken1",
      "type": "tuple[]",
      "internalType": "struct IZapper.SingleTokenSwap[]",
      "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
        "name": "outputQuote",
        "type": "uint256",
        "internalType": "uint256",
      }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
        "name": "executor",
        "type": "address",
        "internalType": "address",
      }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
    }],
  }, {
    "name": "stakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultStakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Max",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Max", "type": "uint256", "internalType": "uint256" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "amountSharesMin",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "receiver", "type": "address", "internalType": "address" }],
  }, {
    "name": "vaultParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultDepositParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "minShares", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, {
    "name": "",
    "type": "uint256",
    "internalType": "uint256",
  }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "zapInWithoutSwap",
  "inputs": [{
    "name": "stakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultStakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Max",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Max", "type": "uint256", "internalType": "uint256" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "amountSharesMin",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "receiver", "type": "address", "internalType": "address" }],
  }, {
    "name": "vaultParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultDepositParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "minShares", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [{
    "name": "islandTokensReceived",
    "type": "uint256",
    "internalType": "uint256",
  }, { "name": "vaultSharesReceived", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "zapOut",
  "inputs": [{ "name": "outputToken", "type": "address", "internalType": "address" }, {
    "name": "receiver",
    "type": "address",
    "internalType": "address",
  }, {
    "name": "swap0",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "swap1",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "unstakeParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultUnstakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }],
  }, {
    "name": "redeemParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultRedeemParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "shares", "type": "uint256", "internalType": "uint256" }, {
      "name": "minAssets",
      "type": "uint256",
      "internalType": "uint256",
    }],
  }],
  "outputs": [{ "name": "totalAmountOut", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "zapOutNative",
  "inputs": [{ "name": "receiver", "type": "address", "internalType": "address" }, {
    "name": "swapData0",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "swapData1",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "unstakeParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultUnstakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }],
  }, {
    "name": "redeemParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultRedeemParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "shares", "type": "uint256", "internalType": "uint256" }, {
      "name": "minAssets",
      "type": "uint256",
      "internalType": "uint256",
    }],
  }],
  "outputs": [{ "name": "totalNativeOut", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "zapOutToToken0",
  "inputs": [{ "name": "receiver", "type": "address", "internalType": "address" }, {
    "name": "swapData",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "unstakeParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultUnstakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }],
  }, {
    "name": "redeemParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultRedeemParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "shares", "type": "uint256", "internalType": "uint256" }, {
      "name": "minAssets",
      "type": "uint256",
      "internalType": "uint256",
    }],
  }],
  "outputs": [{ "name": "totalToken0Out", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "zapOutToToken1",
  "inputs": [{ "name": "receiver", "type": "address", "internalType": "address" }, {
    "name": "swapData",
    "type": "tuple",
    "internalType": "struct IZapper.SingleTokenSwap",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "unstakeParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultUnstakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }],
  }, {
    "name": "redeemParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultRedeemParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "shares", "type": "uint256", "internalType": "uint256" }, {
      "name": "minAssets",
      "type": "uint256",
      "internalType": "uint256",
    }],
  }],
  "outputs": [{ "name": "totalToken1Out", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "nonpayable",
}, {
  "type": "event",
  "name": "OwnershipTransferred",
  "inputs": [{
    "name": "previousOwner",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "TokenWhitelisted",
  "inputs": [{
    "name": "token",
    "type": "address",
    "indexed": false,
    "internalType": "address",
  }, { "name": "isWhitelisted", "type": "bool", "indexed": false, "internalType": "bool" }],
  "anonymous": false,
}, {
  "type": "error",
  "name": "OwnableInvalidOwner",
  "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }],
}, {
  "type": "error",
  "name": "OwnableUnauthorizedAccount",
  "inputs": [{ "name": "account", "type": "address", "internalType": "address" }],
}, { "type": "error", "name": "ReentrancyGuardReentrantCall", "inputs": [] }, {
  "type": "error",
  "name": "SafeERC20FailedOperation",
  "inputs": [{ "name": "token", "type": "address", "internalType": "address" }],
}] as const;
export const VAULT_ABI = [{
  "type": "function",
  "name": "allocateXKDKToKodiakRewards",
  "inputs": [],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "beradromeFarmPlugin",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IPlugin" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "beradromeFarmRewardsGauge",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IGauge" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "cancelRedeem",
  "inputs": [{ "name": "redeemIndex", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "compound",
  "inputs": [{ "name": "swapInputTokens", "type": "address[]", "internalType": "address[]" }, {
    "name": "swapToToken0",
    "type": "tuple[]",
    "internalType": "struct IZapper.SingleTokenSwap[]",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "swapToToken1",
    "type": "tuple[]",
    "internalType": "struct IZapper.SingleTokenSwap[]",
    "components": [{ "name": "inputAmount", "type": "uint256", "internalType": "uint256" }, {
      "name": "outputQuote",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "outputMin", "type": "uint256", "internalType": "uint256" }, {
      "name": "executor",
      "type": "address",
      "internalType": "address",
    }, { "name": "path", "type": "bytes", "internalType": "bytes" }],
  }, {
    "name": "stakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.KodiakVaultStakingParams",
    "components": [{ "name": "kodiakVault", "type": "address", "internalType": "address" }, {
      "name": "amount0Max",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Max", "type": "uint256", "internalType": "uint256" }, {
      "name": "amount0Min",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "amount1Min", "type": "uint256", "internalType": "uint256" }, {
      "name": "amountSharesMin",
      "type": "uint256",
      "internalType": "uint256",
    }, { "name": "receiver", "type": "address", "internalType": "address" }],
  }, {
    "name": "vaultStakingParams",
    "type": "tuple",
    "internalType": "struct IZapper.VaultDepositParams",
    "components": [{ "name": "vault", "type": "address", "internalType": "address" }, {
      "name": "receiver",
      "type": "address",
      "internalType": "address",
    }, { "name": "minShares", "type": "uint256", "internalType": "uint256" }],
  }],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "deallocateXKDK",
  "inputs": [{ "name": "amount", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "exitFeeBasisPoints",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "finalizeRedeem",
  "inputs": [{ "name": "redeemIndex", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "harvestBeradromeRewards",
  "inputs": [],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "harvestKodiakRewards",
  "inputs": [{ "name": "previousKodiakRewardTokens", "type": "address[]", "internalType": "address[]" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "initiateRedeem",
  "inputs": [{ "name": "amount", "type": "uint256", "internalType": "uint256" }, {
    "name": "duration",
    "type": "uint256",
    "internalType": "uint256",
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "kodiakRewards",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "maxAllowedFeeBps",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "setAllocationFlagxKDK",
  "inputs": [{ "name": "flag", "type": "bool", "internalType": "bool" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setExitFeeBasisPoints",
  "inputs": [{ "name": "newFeeBps", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setKodiakRewards",
  "inputs": [{ "name": "newKodiakRewards", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setStrategyManager",
  "inputs": [{ "name": "manager", "type": "address", "internalType": "address" }, {
    "name": "isWhitelisted",
    "type": "bool",
    "internalType": "bool",
  }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setTreasury",
  "inputs": [{ "name": "newTreasury", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setXKdk",
  "inputs": [{ "name": "newXKdk", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "setZapper",
  "inputs": [{ "name": "newZapper", "type": "address", "internalType": "address" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "strategyManager",
  "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "totalAssets",
  "inputs": [],
  "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "treasury",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "updateRedeemRewardsAddress",
  "inputs": [{ "name": "redeemIndex", "type": "uint256", "internalType": "uint256" }],
  "outputs": [],
  "stateMutability": "nonpayable",
}, {
  "type": "function",
  "name": "xKdk",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
  "stateMutability": "view",
}, {
  "type": "function",
  "name": "zapper",
  "inputs": [],
  "outputs": [{ "name": "", "type": "address", "internalType": "contract IZapper" }],
  "stateMutability": "view",
}, {
  "type": "event",
  "name": "BeradromeRewardsHarvested",
  "inputs": [{ "name": "harvestor", "type": "address", "indexed": true, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "ExitFeeBasisPointsSet",
  "inputs": [{
    "name": "oldFeeBps",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }, { "name": "newFeeBps", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "FeeCollected",
  "inputs": [{ "name": "caller", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "owner",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "treasury", "type": "address", "indexed": true, "internalType": "address" }, {
    "name": "fees",
    "type": "uint256",
    "indexed": false,
    "internalType": "uint256",
  }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "KodiakRewardsHarvested",
  "inputs": [{
    "name": "harvestor",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "previousKodiakRewardTokens", "type": "address[]", "indexed": false, "internalType": "address[]" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "KodiakRewardsUpdated",
  "inputs": [{
    "name": "oldKodiakRewards",
    "type": "address",
    "indexed": false,
    "internalType": "address",
  }, { "name": "newKodiakRewards", "type": "address", "indexed": false, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "StrategyManagerUpdated",
  "inputs": [{
    "name": "manager",
    "type": "address",
    "indexed": false,
    "internalType": "address",
  }, { "name": "isWhitelisted", "type": "bool", "indexed": false, "internalType": "bool" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "TreasuryUpdated",
  "inputs": [{
    "name": "oldTreasury",
    "type": "address",
    "indexed": false,
    "internalType": "address",
  }, { "name": "newTreasury", "type": "address", "indexed": false, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "VaultCompounded",
  "inputs": [{
    "name": "strategyManager",
    "type": "address",
    "indexed": true,
    "internalType": "address",
  }, { "name": "compoundAmount", "type": "uint256", "indexed": false, "internalType": "uint256" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "XKdkUpdated",
  "inputs": [{ "name": "oldXKdk", "type": "address", "indexed": false, "internalType": "address" }, {
    "name": "newXKdk",
    "type": "address",
    "indexed": false,
    "internalType": "address",
  }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "ZapperUpdated",
  "inputs": [{
    "name": "oldZapper",
    "type": "address",
    "indexed": false,
    "internalType": "address",
  }, { "name": "newZapper", "type": "address", "indexed": false, "internalType": "address" }],
  "anonymous": false,
}, {
  "type": "event",
  "name": "xKDKAllocationFlagUpdated",
  "inputs": [{ "name": "oldFlag", "type": "bool", "indexed": false, "internalType": "bool" }, {
    "name": "flag",
    "type": "bool",
    "indexed": false,
    "internalType": "bool",
  }],
  "anonymous": false,
}] as const;
