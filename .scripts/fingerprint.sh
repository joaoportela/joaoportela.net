#! /bin/bash

# Adds ?v=<checksum> to the style.css, icons.svg and images/* URLs in public/, in place,
# so netlify.toml can cache them as immutable. Netlify runs it as the build command.

set -eu

cd "$(dirname "$0")/../public"

version() { cksum < "$1" | cut -d' ' -f1; }

# Images first: their URLs are in style.css, so its checksum must include them.
for f in images/*; do
  perl -pi -e "s|\\Q$f\\E(?=\")|$f?v=$(version "$f")|g" style.css
done

for page in *.html; do
  perl -pi -e "s|/style\\.css\"|/style.css?v=$(version style.css)\"|g; s|/icons\\.svg#|/icons.svg?v=$(version icons.svg)#|g" "$page"
done

# An unversioned URL would stay cached for a year after its content changes.
if grep -nE '(style\.css|icons\.svg|images/[^"?]+)["#]' *.html style.css; then
  echo "Unversioned URLs above; teach this script about them." >&2
  exit 1
fi
