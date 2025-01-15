#!/bin/bash

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

TYPESCRIPT_CLIENT_BASE_DIR="$PROJECT_ROOT/typescript-client"
SERVER_BASE_DIR="$PROJECT_ROOT/server"

# ./gradlew clean build || exit 1
# ./gradlew :typescript-client-codegen:build || exit 1
# ./gradlew :server-codegen:build || exit 1

# # Build the client
# cd "$TYPESCRIPT_CLIENT_BASE_DIR/codegen/build/smithyprojections/typescript-client-codegen/ts-client/typescript-codegen" && yarn install && yarn build || exit 1

# cd "$TYPESCRIPT_CLIENT_BASE_DIR"

# ./node_modules/.bin/tsc || exit 1

# Build the server
cd "$SERVER_BASE_DIR"/codegen/build/smithyprojections/server-codegen/ts-server/typescript-ssdk-codegen && yarn install && yarn build || exit 1

cd "$SERVER_BASE_DIR" 

ls
# ./node_modules/.bin/tsc || exit 1

jest || exit 1

echo "Build completed successfully"
