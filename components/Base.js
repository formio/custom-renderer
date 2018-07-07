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