import {Injectable} from '@angular/core';
import {AbstractAssetService, BaseAssetSource} from './abstract-asset.service';


export interface IconSource extends BaseAssetSource {
  allowColorOverride: boolean;
  isCCW: boolean;
  noHoles: boolean;
}

@Injectable()
export class IconService extends AbstractAssetService<IconSource> {

  defaultProvider = 'md';

  protected init() {
    this.registerProvider('md', {
      url: 'https://raw.githubusercontent.com/material-icons/material-icons/master/svg/?/baseline.svg',
      allowColorOverride: true,
      isCCW: false,
      noHoles: false
    });
    this.registerProvider('a', {
      url: 'assets/svg/?.svg',
      allowColorOverride: true,
      isCCW: false,
      noHoles: false
    });
    this.registerProvider('az', {
      url: 'https://raw.githubusercontent.com/makimenko/files/master/azure-icons/?.svg',
      allowColorOverride: false,
      isCCW: false,
      noHoles: false
    });
    this.registerProvider('g', {
      url: 'https://raw.githubusercontent.com/makimenko/files/master/google-cloud-icons/?.svg',
      allowColorOverride: true,
      isCCW: false,
      noHoles: false
    });
    this.registerProvider('aws', {
      url: 'https://raw.githubusercontent.com/makimenko/files/master/aws-icons/?.svg',
      allowColorOverride: false,
      isCCW: false,
      noHoles: true
    });
  }

  defaultIfNotFound(icon: string): IconSource {
    return {
      url: icon,
      allowColorOverride: true,
      isCCW: false,
      noHoles: false
    };
  }

  getFinalResult(finalUrl: string, provider: IconSource): IconSource {
    // console.log('IconService.getUrlByNamespace url', svgUrl);
    return {
      url: finalUrl,
      allowColorOverride: provider.allowColorOverride,
      isCCW: provider.isCCW,
      noHoles: provider.noHoles
    };
  }


}
