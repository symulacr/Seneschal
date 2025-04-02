import { ethers } from 'ethers'

// 90% of Geth's 128KB tx size limit, leaving ~13KB for proving
// This need to be adjusted for Orbit chains
export const maxDataSize = 104857

export const config = {
  rollupConfig: {
    confirmPeriodBlocks: ethers.BigNumber.from('1'),
    extraChallengeTimeBlocks: ethers.BigNumber.from('1'),
    stakeToken: ethers.constants.AddressZero,
    baseStake: ethers.utils.parseEther('0.01'),
    wasmModuleRoot:
      '0x184884e1eb9fefdc158f6c8ac912bb183bf3cf83f0090317e0bc4ac5860baa39',
    owner: '0x66ac538c08fc57a7eef566E989FcDB4f510E94fa',
    loserStakeEscrow: ethers.constants.AddressZero,
    chainId: ethers.BigNumber.from('720272027'),
    chainConfig:
      '{"chainId":720272027,"homesteadBlock":0,"daoForkBlock":null,"daoForkSupport":true,"eip150Block":0,"eip150Hash":"0x0000000000000000000000000000000000000000000000000000000000000000","eip155Block":0,"eip158Block":0,"byzantiumBlock":0,"constantinopleBlock":0,"petersburgBlock":0,"istanbulBlock":0,"muirGlacierBlock":0,"berlinBlock":0,"londonBlock":0,"clique":{"period":0,"epoch":0},"arbitrum":{"EnableArbOS":true,"EnableEspresso":true,"AllowDebugPrecompiles":false,"DataAvailabilityCommittee":false,"InitialArbOSVersion":10,"InitialChainOwner":"0x66ac538c08fc57a7eef566E989FcDB4f510E94fa","GenesisBlockNum":0}}',
    genesisBlockNum: ethers.BigNumber.from('0'),
    sequencerInboxMaxTimeVariation: {
      delayBlocks: ethers.BigNumber.from('5760'),
      futureBlocks: ethers.BigNumber.from('12'),
      delaySeconds: ethers.BigNumber.from('86400'),
      futureSeconds: ethers.BigNumber.from('3600'),
    },
    espressoTEEVerifier: '0x8354db765810dF8F24f1477B06e91E5b17a408bF',
  },
  validators: [
    '0x214A8b32d90f7a20e0c3FB55eD761d2Fc7b443eF',
  ],
  batchPosters: ['0x1Efc589AC25814c2346959940DD50B25088bb141'],
  batchPosterManager: '0x1Efc589AC25814c2346959940DD50B25088bb141'
}
