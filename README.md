# LogrocketAxiosMSW

Minimal app to showcase an existing issue between Logrocket, Axios and MSW

## Steps to Reproduce
- Clone the repo
- `npm install && npm run generate:api`
- `npm run dev`
- Open the app in any browser and check the console
- The app hangs and this error shows up in the console:
![image](https://user-images.githubusercontent.com/51244476/191542178-be764d0c-6048-4abf-9448-97daa2a68632.png)

## Alternative paths
- Without Logrocket the app just works
- Without MSW the app just works
- Updating the `generate:api` script removing `--axios` option and rerunning `npm run generate:api` will "fix" the app
