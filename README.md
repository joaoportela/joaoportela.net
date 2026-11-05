# joaoportela.net

Plain static site: Netlify publishes `public/`, after `.scripts/fingerprint.sh` adds ?v=<checksum> to asset URLs for long-lived caching.

```bash
mise install                  # imagemagick, jq, miniserve
mise run serve                # http://localhost:8000
mise run images               # regenerate public/ images, icons and icons.svg from assets/
mise run fontawesome:fetch    # download the latest Font Awesome Free into tmp/
mise run icons:update         # copy the used icons from tmp/ into assets/icons/, then run images
```
