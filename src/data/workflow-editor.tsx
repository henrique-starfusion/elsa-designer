import { createProviderConsumer } from "@stencil/state-tunnel";
import { h } from "@stencil/core";
import { ActivityDefinition, WorkflowDefinition } from "../models";

export interface WorkflowEditorState {
  activityDefinitions: Array<ActivityDefinition>;
  workflowDefinition: WorkflowDefinition;
  serverFeatures: Array<string>;
}

export default createProviderConsumer<WorkflowEditorState>(
  {
    activityDefinitions: [],
    workflowDefinition: null,
    serverFeatures: []
  },
  (subscribe, child) => (<context-consumer subscribe={subscribe} renderer={child} />)
);
