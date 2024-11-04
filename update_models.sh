MODELS_PATH=../mbt-mgmt-web/src/assets/openapi.json
BE_PATH=../mbt-tour-mgmt-be

cd "$BE_PATH"

./scripts/save_openapi.sh $MODELS_PATH

cd -

npx openapi-ts



