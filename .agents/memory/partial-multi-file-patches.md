---
name: Partial multi-file patches
description: Reconcile files after a patch reports an error while updating several targets.
---

When a multi-file patch fails, it may still have applied changes to other files in the same patch.

**Why:** Retrying the full patch without checking can duplicate or conflict with changes that already succeeded.

**How to apply:** After any partial failure, inspect every target file and apply only the missing edits.