# ember-local-config

Enables local config files for ember-cli apps that get merged into the main application configuration.

## Usage

1. Install the addon in your app by running `npm install ember-local-config --save-dev`.
2. Generate a local config file by running `ember g local-config`
3. After committing the generated local config file as a default file, run [git update-index --skip-worktree](http://git-scm.com/docs/git-update-index) on the config file so that git doesn't pickup local changes to the file.

## API


**ember-local-config** will pickup any file in your config directory that ends with `.local.js`, attempt to pull out a config object and merge it into the normal app config. You do not need to modify how you consume the regular config.

### Local config generator

Running `ember g local-config` will create an empty config file called `config.local.js` in your config directory. You can optionally pass a parameter to define the file name. For instance, running `ember g local-config my-config` will generate `my-config.local.js`.

## Running the dummy app

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
