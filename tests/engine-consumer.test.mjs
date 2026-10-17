import test from 'node:test';
import assert from 'node:assert/strict';
import {withEngine} from '../scripts/engine-artifact.mjs';
import {corporateProfile,defaultVotingPolicy,shareUnits} from '../src/index.mjs';
test('corporate profile consumes the pinned engine with exact fractional share weights',async()=>withEngine(async engine=>{
 const policy=defaultVotingPolicy({opensAt:1,closesAt:10}),profile=corporateProfile();
 const electorate={id:'e',kind:'frozen',members:[{principalId:'a',weight:shareUnits('9007199254740993.000001')},{principalId:'b',weight:shareUnits('9007199254740993.000000')}]};
 const proposalDigest=engine.digest('proposal',{text:'amended clause'});
 const ballots=electorate.members.map((m,i)=>({principalId:m.principalId,choice:i?'no':'yes',castAt:5,policyId:policy.id,electorateId:'e',proposalDigest,policyDigest:engine.digest('policy',policy),electorateDigest:engine.digest('electorate',electorate)}));
 const result=engine.evaluateDecision({mode:profile.mode,policy,electorate,proposalDigest,ballots,now:10});
 assert.equal(result.status,'passed');assert.equal(result.weights.yes,'9007199254740993000001');assert.equal(profile.anchorRequired,false);
}));
