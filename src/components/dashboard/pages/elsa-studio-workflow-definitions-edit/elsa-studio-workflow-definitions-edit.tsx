import {Component, Prop, h} from '@stencil/core';
import {MatchResults} from '@stencil/router';

@Component({
  tag: 'elsa-studio-workflow-definitions-edit',
  shadow: false,
})
export class ElsaStudioWorkflowDefinitionsEdit {
  @Prop() match: MatchResults;

  activityDefinitionsJson?: string;
  workflowDefinitionJson?: string;

  componentWillLoad() {
    this.activityDefinitionsJson = this.match.params.activityDefinitionsJson;
    this.workflowDefinitionJson = this.match.params.workflowDefinitionJson;
  }

  render() {
    const activityDefinitionsJson = this.activityDefinitionsJson;
    const workflowDefinitionJson = this.workflowDefinitionJson;

    return <div>
      <elsa-workflow-definition-editor-screen activity-definitions={activityDefinitionsJson} workflow-definition={workflowDefinitionJson} />
    </div>;
  }
}
