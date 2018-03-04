import { Observable } from 'tns-core-modules/data/observable';
import { PluginExperiment } from 'nativescript-plugin-experiment';

export class HelloWorldModel extends Observable {
  public message: string;
  private pluginExperiment: PluginExperiment;

  constructor() {
    super();

    this.pluginExperiment = new PluginExperiment();
    this.message = this.pluginExperiment.message;
  }
}
