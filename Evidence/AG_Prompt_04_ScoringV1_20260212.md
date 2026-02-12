# AG Evidence Pack: Prompt #04 — Scoring Engine v1 (CORE-002)

## 1. Objective

Implement the first version of the internal scoring engine.

## 2. Technical Standards

- **Offline & Deterministic**: Scoring is performed via local rules with no network dependency.
- **Explainable**: Breakdown displays individual signals, points, and evidence.
- **Modular**: Rule functions are isolated for easy extension.

## 3. Implemented Signals

| ID       | Signal               | Points | Logic                              |
| -------- | -------------------- | ------ | ---------------------------------- |
| Region   | UK/US/Global         | +15-20 | TLD match (.uk, .co.uk, .us)       |
| Intent   | Pricing/Demo/Keyword | +10-20 | Match list in defaultScoringConfig |
| Presence | Website/Domain       | +5-10  | Found in parse phase               |
| Penalty  | Non-Commercial       | -30    | .gov or .edu domains               |

## 4. Verification Results

- **Unit Tests**: Pass (12/12)
- **Repo Map**: Updated
- **Build**: Success

## 5. Artifacts

- **Zip**: [PROMPT#04.zip](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/Evidence/PROMPT#04.zip)
- **App Attributes**: [App_Attributes.md](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/App_Attributes/App_Attributes.md)
