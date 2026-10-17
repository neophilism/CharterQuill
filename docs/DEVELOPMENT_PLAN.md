# CharterQuill development plan

Approved task scope: the owner's October 16, 2026 request for the shared document engine and two thin applications. Maintainer-authored decomposition version 1. This is a development plan, not a claim that the owner separately reviewed each PR.

The only machine-readable plan is registry/prs.json (14 units). Detailed implementation/acceptance/test/migration specs are in docs/prs/. Unit numbers are stable IDs, never GitHub PR numbers. No PR has been opened or merged. Do not equate a foundation commit with accepted unit completion.

| Unit | Planned PR | Dependencies |
| --- | --- | --- |
| [CORP-001](prs/CORP-001.md) | Corporate application foundation | DCE-001 |
| [CORP-002](prs/CORP-002.md) | Organization rooms and private engine integration | CORP-001, DCE-003, DCE-038 |
| [CORP-003](prs/CORP-003.md) | Entity rules and governing instrument profiles | CORP-002, DCE-010 |
| [CORP-004](prs/CORP-004.md) | Share ledger, classes and record dates | CORP-003, DCE-011 |
| [CORP-005](prs/CORP-005.md) | Director, shareholder and proxy authority | CORP-004, DCE-011, DCE-012 |
| [CORP-006](prs/CORP-006.md) | Selective clause unlock and confidential electorate | CORP-005, DCE-018 |
| [CORP-007](prs/CORP-007.md) | Corporate quorum and multi-class resolutions | CORP-004, CORP-005, CORP-006, DCE-013 |
| [CORP-008](prs/CORP-008.md) | Meetings, written consents and reserved matters | CORP-007, DCE-014 |
| [CORP-009](prs/CORP-009.md) | Conflicts, recusals and sensitive disclosures | CORP-008, DCE-018 |
| [CORP-010](prs/CORP-010.md) | Execution signatures, minutes and closing packages | CORP-008, CORP-009, DCE-027 |
| [CORP-011](prs/CORP-011.md) | Audit, retention, legal hold and portability | CORP-010, DCE-023, DCE-035 |
| [CORP-012](prs/CORP-012.md) | Enterprise identity, billing and integrations | CORP-011, DCE-030, DCE-038 |
| [CORP-013](prs/CORP-013.md) | Corporate unified admin and role walkthroughs | CORP-012, DCE-028, DCE-031 |
| [CORP-014](prs/CORP-014.md) | Corporate production release and recovery | CORP-013, DCE-039 |

Proceed in dependency order. After each real PR, validate, fix failures, merge only when live GitHub current-head checks and merge preflight permit, update mappings/evidence and continue. Never make human review a development prerequisite. Capacity, required credentials and spending are concrete states; continue independent ready work when one is unavailable.

Release gates: exact-head required CI; applicable security/authorization/accessibility/migration/browser/load tests; isolated approved infrastructure; authentic deployed commit and health evidence; real multiuser and independent artifact-verification journeys. Final human review occurs after deployment, without inventing independent review or certification evidence.
