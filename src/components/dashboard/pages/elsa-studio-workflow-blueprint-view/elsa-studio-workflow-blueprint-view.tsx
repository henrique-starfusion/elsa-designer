import {Component, Prop, h} from '@stencil/core';
import {MatchResults} from '@stencil/router';

@Component({
  tag: 'elsa-studio-workflow-blueprint-view',
  shadow: false,
})
export class ElsaStudioWorkflowBlueprintView {
  @Prop() match: MatchResults;

  workflowBlueprintJson?: string;

  componentWillLoad() {
    this.workflowBlueprintJson = this.match.params.workflowBlueprintJson;
  }

  render() {
    const workflowBlueprintJson = this.workflowBlueprintJson;

    return <div>
      <elsa-workflow-blueprint-viewer-screen workflowBlueprintJson={workflowBlueprintJson}/>
    </div>;
  }
}
