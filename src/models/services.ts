import {PluginManager, ActivityIconProvider, ConfirmDialogService, PropertyDisplayManager} from "../services";
import {ToastNotificationService} from "../services";
import EventBus from "../services/custom-event-bus";
import {ActivityDefinition, ActivityDefinitionProperty, WorkflowDefinition} from "./domain";
import {ActivityModel} from "./view";

export interface ElsaStudio {
  activityDefinitions: Array<ActivityDefinition>;
  workflowDefinition: WorkflowDefinition;
  basePath: string;
  features: any;
  serverFeatures: Array<string>;
  pluginManager: PluginManager;
  propertyDisplayManager: PropertyDisplayManager;
  eventBus: EventBus;
  activityIconProvider: ActivityIconProvider;
  confirmDialogService: ConfirmDialogService;
  toastNotificationService: ToastNotificationService;
  getOrCreateProperty: (activity: ActivityModel, name: string, defaultExpression?: () => string, defaultSyntax?: () => string) => ActivityDefinitionProperty;
  htmlToElement: (html: string) => Element;
}
