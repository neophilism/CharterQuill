import {withEngine} from './engine-artifact.mjs';
import assert from 'node:assert/strict';
import {corporateProfile,defaultVotingPolicy,shareUnits} from '../src/index.mjs';
await withEngine(async engine=>{
engine.validatePolicy(defaultVotingPolicy({opensAt:1,closesAt:2}));
assert.equal(corporateProfile().anchorRequired,false);assert.equal(engine.integer(shareUnits('0.000001')),1n);
console.log('Corporate profile and real engine exact-share consumer contract passed.');

});
