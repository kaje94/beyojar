https://sst.dev/examples/how-to-create-an-expo-app-with-serverless.html
update readme based on above and expo readme

local endpoint: https://b1f8h7xiz6.execute-api.us-east-1.amazonaws.com

if issues come with expo monorepo, then check this
https://docs.expo.dev/guides/monorepos/

to run deploy your live dev env

> run `npm start`

> copy the api endpoint url and update the .env file with the api endpoint url

To open sst console `npx sst console --stage local`

To clean up the resources

```
$ npx sst remove
$ npx sst remove --stage prod
```

## TODO

add eslint airbnb pretier and precommit hook

https://www.reactnativeschool.com/how-to-setup-path-alias-in-a-react-native-typescript-app

styled system with typescript
https://dev.to/timrichter/how-to-use-styled-system-with-typescript-2fjo

need to complete remaining prettier setup with git hook and eslint
https://prettier.io/docs/en/install.html
