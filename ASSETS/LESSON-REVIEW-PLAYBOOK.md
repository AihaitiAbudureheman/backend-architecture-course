# Lesson Review Playbook

For *Design Backend Systems with Confidence*, lessons S1–S139. This is the proposed review process for the written course. The existing v6 rules are the editorial baseline.

## Start with the current lesson

Read the lesson's entry in `ASSETS/Final-Course-Outline-v4.pdf`, then find its `<section class="S…">` in `index.html`. Read the slide and speaker notes, the preceding and following lessons, and any lesson explicitly recalled. Use the actual image paths in the slide and match them to the filenames in `media-prompts/sN.md`. Consult a handout when the lesson teaches from it and an original transcript when one is available and needed to resolve intent. Treat the outline as the lesson's scope and the live deck as the draft under review. Flag a discrepancy that changes the learner's takeaway.

Use `ASSETS/Lesson-Optimization-Rules-v6.pdf` for structure, wording, tone, visual style, and exceptions. Its eight checks were written for drafting. For this revision, run them as grouped review passes and propose one coherent change set per lesson. This is a proposed change to the original checkpoint-by-checkpoint approval cadence.

## 1. Check the architecture

- State the learner's problem and what they should be able to explain, decide, or do afterward. For an overview, state what it should help them navigate or connect.
- Identify the main technical claims. Check definitions, cause and effect, architecture boundaries, and concrete behavior against authoritative public sources. Prefer standards, official documentation, and original engineering write-ups. Record what each source supports. Verify the specifics of named case studies, numeric claims, and product behavior. Qualify or flag claims that remain unsupported.
- Check whether the advice still holds when its assumptions change. Examine the relevant constraint, failure mode, or cost, such as freshness, traffic, team ownership, or operational burden. Include the caveat that could change the learner's decision. Put supporting nuance in instructor Q&A when it adds value there.
- Distinguish a definition from an example, a reasonable default, or a local convention. Escalate a misleading course-wide definition for coordinated correction if it is reused elsewhere.

## 2. Check the lesson as spoken instruction

- Read the notes aloud or perform a spoken read-through. Check that the opening sets up a recognizable situation, the body resolves it in a logical order, and the closing gives the learner a takeaway and a bridge to the actual next lesson.
- Check prior knowledge and vocabulary. Teach each concept in its designated lesson. Verify callbacks in the current deck and keep them brief. Preserve the instructor's voice and useful examples. Use the smallest revision that solves the issue.
- Run the v6 wording and rhythm checks, including banned terms, context-specific exceptions, and runs of short sentences. Count opening, transcript, and closing together, excluding titles, slide text, alt text, and review notes. The hard limit is 280 spoken words.
- Apply the section's teaching job and target range. Use the ranges as signals for scope and pacing.

| Section | Spoken words | Review emphasis |
| --- | ---: | --- |
| Introduction | 200–280 | Orient the learner to the course outcome, roadmap, or prerequisites. |
| What | 200–280 | Explain one concept in plain language and show why it matters. |
| When | 120–200 | Make the trigger recognizable and clarify what it warrants. |
| Common Architectures | 180–280 | Explain the pattern, mechanism, benefit, or drawback assigned to that lesson. |
| How | 180–280 | Apply one step to the running example. Verify the checklist line, phase transitions, and handout alignment. |
| Evolution | 200–280 | Explain what changed and why. Check that the slide has no subtitle. |

## 3. Check the analogy, image, and prompt together

- Identify what each important element of the analogy represents. Check where the analogy stops applying and whether the slide implies a false relationship, direction, guarantee, or sequence. If the analogy needs more explanation than the concept, try the running example.
- Inspect every image actually used in the lesson. Check that its sequence and fragment timing support the explanation, that the speaker notes make sense when the image is unavailable, and that alt text conveys the image's teaching point. Check visual consistency and licensing against v6.
- Compare each actual image with its saved prompt and its spoken cue. If the prompt is missing, a filename differs, or an image is inaccessible, record the exact item. Preserve useful images and prompts. If an image needs replacing, provide a revised prompt with its intended filename, fragment role, and draft alt text. Inspect the replacement before closing the finding.

## 4. Record a decision and verify the result

Use one review record per lesson. A lesson that passes can have a short record.

| Field | What to record |
| --- | --- |
| Lesson | ID, title, section, learner problem, and intended takeaway |
| Findings | Exact passage or asset, what it teaches today, why it matters, and the smallest useful change |
| Evidence | Claim and source, or the specific uncertainty and proposed wording |
| Proposed edits | Changed notes or slide text, before/after spoken word counts, and any image, prompt, or alt text changes |
| Dependencies | Lesson IDs, handout items, or shared definitions affected |
| Decision | Keep, revise, or needs a decision |

Treat a claim or visual that could teach the wrong architecture decision as a required fix. Treat clarity and pacing changes as targeted revisions. Leave optional polish alone when the lesson already works. Ask the instructor to resolve changes that affect the course promise, lesson scope or sequence, a shared definition, or a substantial visual direction. Preserve lesson IDs. Keep facts, speaker notes, slide text, assets, prompts, and handouts aligned when applying an approved change.

After applying a change, recheck the spoken word count, affected references, image paths and visual order, and the rendered slide and speaker notes. Revisit a cross-lesson finding wherever the same claim or visual appears before marking it resolved.

## Calibrate before reviewing all 139

Proposed sample:

1. **S26 · What Is Caching?** Check a concept, its analogy, and a multi-image sequence.
2. **S41 · Your System Is Getting Slow** Check whether a short trigger lesson helps a learner recognize when design work is needed.
3. **S117 · Back Every Choice with Reasoning** Check an applied design step, the running example, and its checklist line.

Produce the three review records before editing the deck. Use them to agree on the depth of evidence, amount of rewriting, visual review, and approval cadence. Then review in course order, batch by section, and finish each section with a continuity check for duplicated explanations, inconsistent terms, broken bridges, and unresolved dependencies. Finish with a course-wide pass over shared definitions, running examples, and handout references.
