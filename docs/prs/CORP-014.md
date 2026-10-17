# CORP-014: Corporate production release and recovery

Status: planned PR specification; no GitHub PR number assigned. The foundational commit contributes partial source to unit 001 and is not accepted completion.

## Problem and resulting behavior

Deploy isolated corporate configuration/frontend, execute real record-date proxy/class-approval and signing journeys and publish evidence.

## Dependencies and contract boundaries

Local: CORP-013. External: neophilism/Distributed-Governance-Engine#DCE-039.
Consume versioned engine contracts; preserve tenant IDs, policy/edition/proposal digests and idempotency across every affected boundary. Read docs/ARCHITECTURE.md and docs/SECURITY.md before implementation.

## Implementation and acceptance

Verified private multiuser resolution lifecycle, immutable execution artifacts and restore/reconciliation pass on actual deployed commit.
Update API/schema/client/worker/export behavior together where affected. Include current failure and retry states, accessible UX, observability without content, and operational documentation. Do not substitute fake users, local storage or mock providers for production acceptance.

## Validation evidence

Current-head full gates, E2EE canaries, cross-tenant browser smoke, load/restore and exact artifact verification; human review follows deployment.
Run npm run check and the feature-specific suites against the exact PR head. Add integration/E2E suites where the behavior crosses a service or browser boundary. Archive tool versions, configuration, test output, source digest and material limitations. Passing schema tests do not establish security compliance.

## Data migration, rollout and rollback

Use expand/contract migrations and scoped feature flags. Reconcile old/new records before switching readers. A rollback must preserve ballots, signed editions, audit history and receipts; never rewrite an adopted or signed version. For work without persistent schema changes, record that fact with the final diff. If a release changes authority, eligibility or cryptographic boundaries, add an ADR and a tested migration path.

## PR and completion protocol

Use leading stable ID `CORP-014: ...`; link this unit and explicit dependencies. Map only real PR numbers into registry/prs.json. Require current-head CI and the checked-in merge preflight before authorized merging. Failed, missing, pending or skipped required checks remain blockers. Human review and independent certification are deferred until the deployed result is ready for the owner; concrete vulnerabilities and failing tests are not waived. Merged source, tested code, deployment and live operational acceptance are separate states.
