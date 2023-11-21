import {ComponentFactory, ComponentFactoryResolver, Injectable, Type} from '@angular/core';
import {
  ServerBarrelActorComponent,
  ServerCompactActorComponent,
  ServerIconActorComponent,
  ServerStandActorComponent, ModelActorComponent,
  WorkstationActorComponent
} from '../server';


@Injectable()
export class ActorRepositoryService {

  protected list = new Map<string, Type<any>>();
  protected defaultId!: string;

  constructor(
    //TODO: https://stackoverflow.com/questions/70946038/replace-deprecated-angular-componentfactoryresolver-componentfactory
    protected resolver: ComponentFactoryResolver
  ) {
    this.register('stand', ServerStandActorComponent);
    this.register('compact', ServerCompactActorComponent);
    this.register('barrel', ServerBarrelActorComponent);
    this.register('icon', ServerIconActorComponent);
    this.register('workstation', WorkstationActorComponent);
    this.register('model', ModelActorComponent);
  }

  public register(id: string, component: Type<any>): void {
    // console.log('ActorRepositoryService.register', id);
    if (!this.defaultId) {
      this.defaultId = id;
    }
    this.list.set(id, component);
  }

  public getComponentFactory(id: string | undefined): ComponentFactory<any> | undefined {
    const requestId :string = id ? id : this.defaultId
    // console.log('ActorRepositoryService.getComponentFactory requestId:', requestId);
    const comp = this.list.get(requestId);
    if (comp) {
      const result = this.resolver.resolveComponentFactory(comp);
      // console.log('ActorRepositoryService.getComponentFactory result', result);
      return result;
    } else {
      // console.log('ActorRepositoryService.getComponentFactory undefined result');
      return undefined;
    }
  }

}
