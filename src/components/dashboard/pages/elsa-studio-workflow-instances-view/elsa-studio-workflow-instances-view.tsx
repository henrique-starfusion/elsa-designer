import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'elsa-studio-workflow-instances-view',
  shadow: false,
})
export class ElsaStudioWorkflowInstancesView {
  @Prop() match: MatchResults;

  componentWillLoad() {
    console.debug('componentWillLoad', this.match.params);
  }

  render() {
    return <div>
      <elsa-workflow-instance-viewer-screen />
    </div>;
  }
}
