# zephjs-loading

An example of a loading screen for usage with the [ZephJS Framework](https://github.com/awesomeeng/zephjs).  This can be used as is or modified to suit your own tastes.

## Contents
 - [Setup](#setup)
 - [Usage](#usage)
 - [How It Works](#how-it-works)
 - [Examples](#examples)
 - [Awesome Engineering](#the-awesome-engineering-company)
 - [Support and Help](#support-and-help)
 - [License](#license)

## Setup

zephjs-loading is available as an npm package:

```shell
npm install zephjs-loading
```

Once installed find the `zephjs-loading.js` file and copy it into your local project as needed.

## Usage

Within your HTML file, include the following as close to top of the file as possible:

```html
<script src="zephjs-loading.js" type="module"></script>
```

## How It Works

ZephJS has a [set of events](https://github.com/awesomeeng/zephjs/blob/master/docs/ComponentConcepts.md#zephjs-events) which fire on the browser `document` object. This includes the `zeph:ready` event to indicate that ZephJS was loaded and any components pending definition via ZephJS have completed.

zephjs-loading taps that event as well as others in computing how much is left to load and if loading is complete.

Please see the source code of `zephjs-loading.js` for more details.

## Examples

zephjs-loading ships with a set of examples for your reference.

 - [Test](./test/index.html): The test example which is used during zephjs-loading development.

## The Awesome Engineering Company

zephjs-loading is written and maintained by The Awesome Engineering Company. We believe in building clean, configurable, creative software for engineers and architects and customers.

To learn more about The Awesome Engineering Company and our suite of products, visit us on the web at https://awesomeeng.com.

## Support and Help

## License

zephjs-loading is released under the MIT License. Please read the  [LICENSE](./LICENSE) file for details.
