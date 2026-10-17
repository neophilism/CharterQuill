/** Exact fixed-point share units, never floating-point quantities. */
export function shareUnits(value,scale=6) {
  if(typeof value!=='string'||!/^(0|[1-9][0-9]{0,71})(?:\.[0-9]+)?$/.test(value)||!Number.isSafeInteger(scale)||scale<0||scale>18)throw new Error('Invalid share quantity');
  const [whole,fraction='']=value.split('.');
  if(fraction.length>scale)throw new Error('Share precision exceeds declared scale');
  const units=(BigInt(whole)*10n**BigInt(scale)+BigInt(fraction.padEnd(scale,'0')||'0')).toString();
  if(units.length>78)throw new Error('Share quantity exceeds engine integer bounds');
  return units;
}
export function corporateProfile(overrides={}) {
 const allowed=new Set(['mode','weighting','anchorEnabled','audience','shareScale']);
 for(const k of Object.keys(overrides))if(!allowed.has(k))throw new Error('Unknown or invariant setting: '+k);
 const p={mode:'collaboration',weighting:'shares',anchorEnabled:false,audience:'private',shareScale:6,...overrides};
 if(!['collaboration','public-input'].includes(p.mode)||!['equal','shares'].includes(p.weighting)||!['private','public'].includes(p.audience)||typeof p.anchorEnabled!=='boolean'||!Number.isSafeInteger(p.shareScale)||p.shareScale<0||p.shareScale>18)throw new Error('Invalid corporate profile');
 if(p.audience==='public'&&!p.anchorEnabled)throw new Error('Public documents require transparency anchoring');
 return Object.freeze({...p,product:'corporate',anchorRequired:p.audience==='public'||p.anchorEnabled,canAdopt:p.mode==='collaboration',electorateBasis:'record-date rights snapshot',selectiveUnlocks:true,executionRequiresExplicitIntent:true});
}
export function defaultVotingPolicy({id='corporate-majority',opensAt,closesAt}={}) {
 return {id,weighting:'shares',allowEarlyClose:false,opensAt,closesAt,minYes:'1',quorum:{kind:'fraction-weight',numerator:'1',denominator:'2'},approval:{basis:'decisive',comparison:'gt',numerator:'1',denominator:'2'}};
}
