# coffee-web

# Quick Start

## To run this project locally:
1. Prerequisites: Make sure you've installed [Node.js] ≥ 12 and [php] ≥ 7
2. From folder user, install dependencies: `yarn install`
3. From folder backend, install dependencies: `composer install`
5. Run the local development server: `yarn dev` (see `package.json` for a
   full list of `scripts` you can run with `yarn`)
4. Note: If you want to change the code inside Smart Contract (Cannot change on-chain state): go to package.json -> Change `near dev-deploy` to `near dev-deploy -f`

Now you'll have a local development environment backed by the NEAR TestNet!

Go ahead and play with the app and the code. As you make code changes, the app will automatically reload.


[react]: https://reactjs.org/
[create-near-app]: https://github.com/near/create-near-app
[node.js]: https://nodejs.org/en/download/package-manager/
[jest]: https://jestjs.io/
[near accounts]: https://docs.near.org/docs/concepts/account
[near wallet]: https://wallet.testnet.near.org/
[near-cli]: https://github.com/near/near-cli
[gh-pages]: https://github.com/tschaub/gh-pages
[php]: https://www.php.net/downloads.php
