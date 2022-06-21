# elsa-activity-picker-modal



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute    | Description | Type                 | Default     |
| -------------------- | ------------ | ----------- | -------------------- | ----------- |
| `culture`            | `culture`    |             | `string`             | `undefined` |
| `publishing`         | `publishing` |             | `boolean`            | `undefined` |
| `workflowDefinition` | --           |             | `WorkflowDefinition` | `undefined` |


## Events

| Event              | Description | Type                |
| ------------------ | ----------- | ------------------- |
| `exportClicked`    |             | `CustomEvent<any>`  |
| `importClicked`    |             | `CustomEvent<File>` |
| `publishClicked`   |             | `CustomEvent<any>`  |
| `unPublishClicked` |             | `CustomEvent<any>`  |


## Dependencies

### Depends on

- context-consumer

### Graph
```mermaid
graph TD;
  elsa-workflow-publish-button --> context-consumer
  style elsa-workflow-publish-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
