# Lesson Review Playbook

For *Design Backend Systems with Confidence*, lessons S1–S139. This is the proposed review process for the written course. The existing v6 rules are the editorial baseline.

## Start with the current lesson

Read the lesson's entry in `ASSETS/Final-Course-Outline-v4.pdf`, then find its `<section class="S…">` in `index.html`. Read the slide and speaker notes, the preceding and following lessons, and any lesson explicitly recalled. Use the actual image paths in the slide and match them to the filenames in `media-prompts/sN.md`. Consult a handout when the lesson teaches from it and an original transcript when one is available and needed to resolve intent. Treat the outline as the lesson's scope and the live deck as the draft under review. Flag a discrepancy that changes the learner's takeaway.

Use `ASSETS/Lesson-Optimization-Rules-v6.pdf` as the editorial baseline. Where its drafting rules differ from the word count, speaking style, or approval process below, follow this playbook for the review.

## 1. Check the architecture

- State the learner's problem and what they should be able to explain, decide, or do afterward. For an overview, state what it should help them navigate or connect.
- Identify the main technical claims. Check definitions, cause and effect, architecture boundaries, and concrete behavior against authoritative public sources. Prefer standards, official documentation, and original engineering write-ups. Record what each source supports. Verify the specifics of named case studies, numeric claims, and product behavior. Qualify or flag claims that remain unsupported.
- Check whether the advice still holds when its assumptions change. Examine the relevant constraint, failure mode, or cost, such as freshness, traffic, team ownership, or operational burden. Include the caveat that could change the learner's decision. Put supporting nuance in instructor Q&A when it adds value there.
- Distinguish a definition from an example, a reasonable default, or a local convention. Escalate a misleading course-wide definition for coordinated correction if it is reused elsewhere.

## 2. Check the lesson as spoken instruction

- Review the title (`h1` and its duplicate `h2`), subtitle where applicable, opening (`h3`), main transcript, and closing (`h4`). Keep the two title entries identical.
- Read the notes aloud. Check all three transitions. The opening should give the transcript a question or situation to pick up. The end of the transcript should give the closing a takeaway to draw out. The closing should raise a natural question that the actual next lesson answers. At the end of the course, land the course close and its downloads.
- Check what the learner already knows. Introduce unfamiliar terms after explaining the ideas in ordinary language. Teach each concept in its designated lesson and verify callbacks in the current deck.
- Keep effective wording and examples. There is no edit quota. A strong lesson may need a small change or none. Rewrite the whole lesson if that is what it takes to teach its main idea clearly.
- Count the subtitle, opening, main transcript, and closing. Exclude both title entries, alt text, and review notes. **Use 120–280 words in every section.** Below 120, check whether a relevant example or explanation is missing or whether the idea belongs in another lesson. Treat 280 as the normal ceiling. If essential explanation still needs more room after removing tangents, propose an explicit exception with the actual count and a reason for approval.

| Section | Review emphasis |
| --- | --- |
| Introduction | Orient the learner to the course outcome, roadmap, or prerequisites. |
| What | Explain one concept in plain language and show why it matters. |
| When | Make the trigger recognizable and clarify what it warrants. |
| Common Architectures | Explain the pattern, mechanism, benefit, or drawback assigned to that lesson. |
| How | Apply one step to the running example. Verify the checklist line, phase transitions, and handout alignment. |
| Evolution | Explain what changed and why. Check that the slide has no subtitle. |

### Speaking style

Use Simon Brown as the teaching reference. His [architecture workshops](https://simonbrown.je/workshops/) use exercises to make architecture communication practical. His [recorded GOTO talk](https://www.youtube.com/watch?v=3Gc5pN9sGzw) moves from familiar questions such as what counts as a database or component to examples of how an architecture changes. Use these techniques in the instructor's own voice.

- Set up one concrete situation and give the learner a moment to picture it. Carry that example through the explanation when it can do the work.
- Use ordinary words and natural contractions. Mix short sentences with longer ones that connect reasons, conditions, and consequences. If several short sentences sound like bullet points read aloud, combine related thoughts or add the missing connection. Keep a short sentence when it gives an important point room to land.
- Introduce terms and examples at a pace that leaves room to understand them. Use conversational wording while keeping quantities, claims, and caveats precise.
- Use the v6 wording and rhythm checks to find spots worth listening to again. Judge the final wording by whether it sounds like a relaxed explanation and gives the learner time to follow the logic.

## 3. Check the analogy, image, and prompt together

- Say what the analogy helps explain and what its important elements represent. Judge its fit as **strong**, **usable with a clarification**, or **weak**. Check whether learners can picture it from everyday life, whether it explains the architecture problem or decision, and where the comparison stops working. An imperfect analogy can stay if it makes the concept easier to understand and its limitations do not imply a misleading rule. If an analogy needs more explanation than the concept, try the running example.
- Inspect every image actually used in the lesson. Check that its sequence and fragment timing support the explanation, that the speaker notes make sense when the image is unavailable, and that alt text conveys the image's teaching point. Check visual consistency and licensing against v6.
- Compare each actual image with its saved prompt and its spoken cue. If the prompt is missing, a filename differs, or an image is inaccessible, record the exact item. Preserve useful images and prompts. If an image needs replacing, provide a revised prompt with its intended filename, fragment role, and draft alt text. Inspect the replacement before closing the finding.

## 4. Record a decision and verify the result

Use one review record per lesson. A lesson that passes can have a short record.

| Field | What to record |
| --- | --- |
| Lesson | ID, title, section, learner problem, and intended takeaway |
| Findings | Exact passage or asset, what it teaches today, why it matters, and the smallest useful change |
| Evidence | Claim and source, or the specific uncertainty and proposed wording |
| Proposed edits | Full proposed lesson or a keep decision, with a reason for each substantive change, before/after counts, and any image, prompt, or alt text changes |
| Dependencies | Lesson IDs, handout items, or shared definitions affected |
| Decision | Keep, revise, or needs a decision |

Treat a claim or visual that could teach the wrong architecture decision as a required fix. Treat clarity and pacing changes as targeted revisions. Leave optional polish alone when the lesson already works. Ask the instructor to resolve changes that affect the course promise, lesson scope or sequence, a shared definition, or a substantial visual direction. Preserve lesson IDs. Keep facts, speaker notes, slide text, assets, prompts, and handouts aligned when applying an approved change.

After applying a change, recheck the spoken word count, affected references, image paths and visual order, and the rendered slide and speaker notes. Revisit a cross-lesson finding wherever the same claim or visual appears before marking it resolved.

## Review one lesson at a time

Start with S1 and work in course order. Share the review record and proposed lesson, explaining each substantive decision. Wait for the instructor's approval before applying the changes and moving to the next lesson. After each section, check continuity, terminology, transitions, and open dependencies. At the end of the course, check shared definitions, running examples, and handout references.
