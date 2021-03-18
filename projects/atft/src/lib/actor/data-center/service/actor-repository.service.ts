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
  protected defaultId: string;

  constructor(
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

  public getComponentFactory(id: string): ComponentFactory<any> {
    const comp = this.list.get(id ?? this.defaultId);
    const result = this.resolver.resolveComponentFactory(comp);
    return result;
  }


}
