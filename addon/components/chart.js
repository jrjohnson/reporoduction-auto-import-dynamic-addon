import Component from '@ember/component';
import layout from '../templates/components/chart';

export default Component.extend({
  layout,
  done: false,
  didInsertElement() {
    import("highcharts").then(() => {
      this.set('done', true);
    })
  }
});
