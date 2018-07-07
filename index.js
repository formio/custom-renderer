// Import the BaseComponent so that it will override all other components derived from BaseComponent.
import BaseComponent from './components/Base';

// Register all the components which will use the new BaseComponent provided above.
import AllComponents from 'formiojs/components';

// Use our extended textfield component.
import CustomTextFieldComponent from './components/TextField';
AllComponents.textfield = CustomTextFieldComponent;

import Components from 'formiojs/components/Components';
Components.setComponents(AllComponents);
export Formio from 'formiojs/Formio';
export Form from 'formiojs/Form';
export FormBuilder from 'formiojs/FormBuilder';
export Utils from 'formiojs/utils';
export { Components };