import test from 'node:test';
import assert from 'node:assert/strict';
import {corporateProfile,shareUnits,defaultVotingPolicy} from '../src/index.mjs';
test('corporate defaults are private, share weighted and unanchored',()=>{const p=corporateProfile();assert.equal(p.weighting,'shares');assert.equal(p.audience,'private');assert.equal(p.anchorRequired,false);assert.equal(p.executionRequiresExplicitIntent,true);});
test('private organizations can opt in and public documents cannot opt out',()=>{assert.equal(corporateProfile({anchorEnabled:true}).anchorRequired,true);assert.throws(()=>corporateProfile({audience:'public'}));assert.equal(corporateProfile({audience:'public',anchorEnabled:true}).anchorRequired,true);});
test('board policy can use equal weighting and feedback never adopts',()=>{assert.equal(corporateProfile({weighting:'equal'}).weighting,'equal');assert.equal(corporateProfile({mode:'public-input'}).canAdopt,false);});
test('share units preserve fractions and quantities beyond Number precision',()=>{assert.equal(shareUnits('12.345678'),'12345678');assert.equal(shareUnits('9007199254740993',0),'9007199254740993');assert.equal(shareUnits('0.000001'),'1');});
test('share parser rejects floats, exponents, negative, excess precision and leading zeroes',()=>{for(const x of [12.5,'01','1e6','-1','+1','1.0000001','Infinity',' 1'])assert.throws(()=>shareUnits(x));assert.throws(()=>shareUnits('1',-1));});
test('policy defaults describe quorum independently of approval',()=>{const p=defaultVotingPolicy({opensAt:1,closesAt:10});assert.equal(p.quorum.kind,'fraction-weight');assert.equal(p.approval.basis,'decisive');});
