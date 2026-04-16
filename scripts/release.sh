#!/usr/bin/env bash
# Usage: ./scripts/release.sh <package> <patch|minor|major>
# Example: ./scripts/release.sh rem patch
set -e

PACKAGE=$1
BUMP=$2

if [ -z "$PACKAGE" ] || [ -z "$BUMP" ]; then
  echo "Usage: $0 <package> <patch|minor|major>"
  echo "Packages: rem, sass-rem, sass-em, postcss-rem"
  exit 1
fi

cd "packages/$PACKAGE"
npm version "$BUMP"
VERSION=$(node -p "require('./package.json').version")
NAME=$(node -p "require('./package.json').name")
cd ../..

git add "packages/$PACKAGE/package.json"
git commit -m "chore: release $NAME@$VERSION"
git tag "$NAME@$VERSION"
git push && git push --tags
npm publish --workspace="packages/$PACKAGE" --access public

echo "Released $NAME@$VERSION"
