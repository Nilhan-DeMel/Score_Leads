# AG Evidence Pack: Prompt #05 — Profile V1 (CORE-003)

## 1. Objective

Implement the Service Delivery Company Profile (ICP Builder) to calibration the scoring engine.

## 2. Technical Standards

- **Versioned Schema**: `ServiceProfileV1` with `schemaVersion: "1.0.0"`.
- **Safe Persistence**: LocalStorage with graceful migration placeholder.
- **Portability**: JSON Import/Export support.
- **Deterministic**: Offline keyword suggestion and profile-aware scoring.

## 3. Implemented Signals

| ID       | Signal              | Weight | Evidence                                    |
| -------- | ------------------- | ------ | ------------------------------------------- |
| Region   | Target Region Match | +15    | Matches defined TLD in profile              |
| Tech     | Tech Match          | +10    | Finds tech stack keywords from profile      |
| Industry | Industry Match      | +10    | Finds industry keywords from profile        |
| Intent   | ICP Keyword         | +5     | Finds specific intent keywords from profile |
| Penalty  | Hard Negative       | -100   | Excludes leads matching exclude keywords    |

## 4. Verification Results

- **Unit Tests**: Pass (11/11)
- **Repo Map**: Updated
- **Build**: Success

## 5. Artifacts

- **Zip**: [PROMPT#05.zip](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/Evidence/PROMPT#05.zip)
- **App Attributes**: [App_Attributes.md](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/App_Attributes/App_Attributes.md)
