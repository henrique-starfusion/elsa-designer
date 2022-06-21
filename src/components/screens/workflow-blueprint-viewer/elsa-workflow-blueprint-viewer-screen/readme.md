# elsa-workflow-instance-viewer-screen



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute              | Description | Type     | Default     |
| ------------------------- | ---------------------- | ----------- | -------- | ----------- |
| `activityDescriptorsJson` | `activity-descriptors` |             | `string` | `undefined` |
| `culture`                 | `culture`              |             | `string` | `undefined` |
| `workflowBlueprintJson`   | `workflow-blueprint`   |             | `string` | `undefined` |


## Dependencies

### Used by

 - [elsa-studio-workflow-blueprint-view](../../../dashboard/pages/elsa-studio-workflow-blueprint-view)

### Depends on

- [elsa-designer-tree](../../../designers/tree/elsa-designer-tree)
- [elsa-flyout-panel](../../../shared/elsa-flyout-panel)
- [elsa-tab-header](../../../shared/elsa-tab-header)
- [elsa-tab-content](../../../shared/elsa-tab-content)
- context-consumer

### Graph
```mermaid
graph TD;
  elsa-workflow-blueprint-viewer-screen --> elsa-designer-tree
  elsa-workflow-blueprint-viewer-screen --> elsa-flyout-panel
  elsa-workflow-blueprint-viewer-screen --> elsa-tab-header
  elsa-workflow-blueprint-viewer-screen --> elsa-tab-content
  elsa-workflow-blueprint-viewer-screen --> context-consumer
  elsa-studio-workflow-blueprint-view --> elsa-workflow-blueprint-viewer-screen
  style elsa-workflow-blueprint-viewer-screen fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
