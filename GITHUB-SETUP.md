# Publish your CyberStart starter

## 1. Download and extract

Extract cyberstart-website.zip. Open the cyberstart folder. You should see index.html, styles.css, script.js, assets and the other files. Double-click index.html to preview it.

Upload the contents of this folder, not the ZIP and not an extra outer cyberstart folder. The repository must have index.html at its top level.

## 2. Create your repository

1. Sign in at https://github.com.
2. Use the + menu and choose New repository.
3. Name it `cyberstart`. For a GitHub Free account, choose Public to use Pages. Public means everyone can read your uploaded source, so keep passwords and private documents out of it.
4. Add a description such as “Beginner cybersecurity education and learning roadmap.”
5. Create the repository. You can enable Add README to make the upload controls easier to find; the supplied README will replace it.

Optional: an organisation account with your eventual company name can make ownership look more professional. A repository named YOUR-USERNAME.github.io gives you a root site address instead of a repository subpath.

## 3. Upload the website

1. On the repository's Code tab, choose Add file → Upload files.
2. Drag the extracted folder's CONTENTS into the upload area, including the assets folder. Do not drag the outer cyberstart folder itself.
3. Confirm that index.html appears at the repository root and the logo is assets/mark.svg.
4. Enter “Add CyberStart education website” as the commit message and commit the files to main in this new repository.
5. If your computer hides .nojekyll, create it on GitHub with Add file → Create new file, name it `.nojekyll`, leave the content blank and commit it.

## 4. Turn on GitHub Pages

1. Open repository Settings → Pages.
2. Under Build and deployment, set Source to Deploy from a branch.
3. Select main, then /(root), and click Save.
4. Wait for the publishing workflow to finish. Inspect Actions if it fails.
5. Return to Settings → Pages and use the displayed live URL.

For a repository called cyberstart, the typical address is:
https://YOUR-USERNAME.github.io/cyberstart/

For a repository called YOUR-USERNAME.github.io, it is:
https://YOUR-USERNAME.github.io/

Use the URL GitHub actually displays. Changes can take a few minutes to appear. Your repository's Code page is not the website.

## 5. Make it your company

- Name and copy: edit index.html, privacy.html, 404.html and README.md. Search for CyberStart.
- Colours: change the variables at the beginning of styles.css.
- Logo: replace assets/mark.svg; update the favicon references if its filename changes.
- Founder portfolio: add an honest founder section with a photo you have permission to use, a short biography, real projects and verified credentials.
- Contact: add a genuine public business email with a mailto link once you have one. This starter intentionally has no pretend inbox or non-working signup.
- Roadmap: publish each lesson before changing its planned status or adding course links.
- Sharing: once your domain is settled, add an absolute social sharing image URL and canonical URL to the HTML head.
- Domain: for a domain you own, follow GitHub's custom-domain guide below. Configure the domain in Settings → Pages and set the DNS records according to that guide. Do not guess DNS targets or add a CNAME for a domain you do not own.

GitHub Pages is a static host: it will not run Python/PHP servers or provide a database. A real learning platform with accounts, payments and course progress needs additional services and an appropriate host.

## Hosting scope

GitHub's terms say Pages is not intended or allowed as free hosting to run an online business, an e-commerce site or a site primarily facilitating commercial transactions or commercial SaaS. Treat this as an educational/portfolio showcase, and review the rules for your intended use. If you move to operating a commercial education business, keep the source repository on GitHub and deploy the static files to a host whose terms support that use. Adding a custom domain does not change GitHub's hosting terms.

## 6. Update later

Open a file on GitHub, select the pencil/edit control, make the change, and commit it. GitHub republishes the selected branch. For bigger edits, change files locally and upload the changed files at the same paths. Preview before publishing.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Site shows README instead of the landing page | index.html must be in the root of main; select /(root) in Pages |
| No Pages URL | Confirm repository visibility/plan, publishing source and Actions result |
| Missing colours or logo | Preserve styles.css and assets/mark.svg with exact letter casing |
| Old version displayed | Wait for deployment, then refresh without cache |
| 404 after upload | Use the displayed Pages URL, including /cyberstart/ for a project repository |
| Quiz doesn't respond | Confirm script.js is uploaded; enable JavaScript; inspect browser console |

## Official references

- Upload files: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Set publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Pages overview and plan availability: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- Hosting limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Custom domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
