---
name: Static assets in Nginx
description: Restrictive source file modes can prevent Nginx from serving uploaded static images after a Docker build.
---

Uploaded image files in this workspace can have restrictive permissions. Docker `COPY` preserves those modes, so the Nginx worker may return 403 for files that exist in the image.

**Why:** The container build can succeed while static images remain unreadable to the Nginx worker; the resulting 403 can look like a routing or MIME-type issue.

**How to apply:** When an uploaded static asset returns 403 from the container, inspect its mode inside the built image and ensure the web server can read files and traverse directories in the document root.