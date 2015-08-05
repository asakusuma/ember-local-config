# ember-local-config

Enables local config files for ember-cli apps that get merged into the main application configuration.

## Usage

1. Install the addon in your app by running `npm install ember-local-config --save-dev`.
2. Generate a local config file by running `ember g local-config`
3. After commiting the generated local config file as a default file, run [git update-index --skip-worktree](http://git-scm.com/docs/git-update-index) on the config file so that git doesn't pickup local changes to the file.

## API


**ember-local-config** will pickup any file in your config directory that ends with `.local.js`, attempt to pull out a config object and merge it into the normal app config. You do not need to modify how you consume the regular config.

### Local config generator

Running `ember g local-config` will create an empty config file called `config.local.js` in your config directory. You can optionally pass a parameter to define the file name. For instance, running `ember g local-config my-config` will generate `my-config.local.js`.

## Running the dummy app

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
