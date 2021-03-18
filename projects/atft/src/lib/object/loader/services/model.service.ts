import {Injectable} from '@angular/core';
import {AbstractAssetService, BaseAssetSource} from './abstract-asset.service';


export interface ModelSource extends BaseAssetSource {

}

@Injectable()
export class ModelService extends AbstractAssetService<ModelSource> {

  defaultProvider = '3d';

  protected init() {
    this.registerProvider('3d', {
      url: 'https://raw.githubusercontent.com/makimenko/files/master/actor-models/?.obj'
    });
  }

  defaultIfNotFound(icon: string): ModelSource {
    return {
      url: icon
    };
  }

  getFinalResult(finalUrl: string, provider: ModelSource): ModelSource {
    return {
      url: finalUrl
    };
  }

}
