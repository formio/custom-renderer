### This repository is now considered legacy and no longer supported. Please take a look at our recent repositories and help documentation at the following links.

 - https://help.form.io
 - https://github.com/formio/formio.js
 - https://github.com/formio/formio
 - https://github.com/formio/react
 - https://github.com/formio/angular
 - https://github.com/formio/vue

## Custom Form.io Renderer
An example custom renderer that extends the Form.io core renderer.

### Getting Started
To get started, simply fork this repo, and then modify the **index.js** file to contain the overrides for your custom renderer.

#### Extending Components
To extend components, you will simply extend the class and then override the methods you wish to override.

```js
import TextFieldComponent from 'formiojs/components/textfield/TextField';
export default class CustomTextFieldComponent extends TextFieldComponent {
  // Override the createLabel method.
  createLabel(container) {
    super.createLabel(container);
    this.addClass(this.labelElement, 'text-success');
  }
}
```

This component can now be included in the renderer by overriding the component in the component registry.

```js
// Register all the components which will use the new BaseComponent provided above.
import AllComponents from 'formiojs/components';

// Use our extended textfield component.
import CustomTextFieldComponent from './components/TextField';
AllComponents.textfield = CustomTextFieldComponent;

import Components from 'formiojs/components/Components';
Components.setComponents(AllComponents);
```

#### Overriding the BaseComponent
To override the base component, you can create a new BaseComponent file, and then use the following pattern to override certain methods within the BaseComponent.

*Base.js*
```js
import BaseComponent from 'formiojs/components/base/Base';

// Copy the BaseComponent show method.
const baseShow = BaseComponent.prototype.show;

/**
 * Override the BaseComponent show method to introduce a new option called "hideComponents" which
 * will always hide the components that are within this map, like this.
 *
 *   {
 *     hideComponents: {
 *       firstName: true,
 *       lastName: true,
 *       email: true
 *     }
 *   }
 *
 * @param show
 * @return {*}
 */
BaseComponent.prototype.show = function(show) {
  if (
    this.options.hideComponents &&
    this.options.hideComponents[this.component.key]
  ) {
    return baseShow.call(this, false);
  }
  return baseShow.call(this, show);
}

// Export the new BaseComponent.
export default BaseComponent;
```

This will then be included in the **index.js** at the very beginning like so.

```js
import BaseComponent from './components/Base';
```

Please see the **index.js** included in the source for an example of this.


### Building
To build this renderer simply execute the following commands.

```
npm install
npm run build
```

This will create a new **dist/formio.custom.min.js** file that you can then use as a custom form renderer instead of the typical **formio.full.min.js**. Please see **example.html** for an example of how this works.
