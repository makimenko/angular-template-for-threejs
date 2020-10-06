// Helper method to provide the current component instance in the name of a `parentType`.
// The `parentType` defaults to `Parent` when omitting the second parameter.
import { forwardRef } from '@angular/core';
import { AbstractObject3D } from '../object/abstract-object-3d';

export function provideParent(component: any, parentType?: any) {
  return { provide: parentType || AbstractObject3D, useExisting: forwardRef(() => component) };
}
