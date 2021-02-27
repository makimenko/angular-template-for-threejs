import {Injectable} from '@angular/core';

const SEPARATOR = ':';
const REPLACE_SYMBOL = '?';

export interface IconSource {
  url: string;
  allowColorOverride: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  protected providers: Map<string, IconSource> = new Map();
  protected defaultProvider = 'md';

  constructor() {
    this.init();
  }

  protected init() {
    this.registerProvider('a', {
      url: 'assets/svg/?.svg',
      allowColorOverride: true
    });
    this.registerProvider('md', {
      url: 'https://raw.githubusercontent.com/material-icons/material-icons/master/svg/?/baseline.svg',
      allowColorOverride: true
    });
    this.registerProvider('az', {
      url: 'https://raw.githubusercontent.com/makimenko/files/master/azure-icons/?.svg',
      allowColorOverride: false
    });
  }

  public registerProvider(key: string, source: IconSource) {
    this.providers.set(key, source);
  }

  public setDefaultProvider(key: string) {
    this.defaultProvider = key;
  }

  public getIconSource(icon: string): IconSource {
    // console.log('IconService.getIconSource', icon);
    if (icon) {
      if (icon.indexOf(SEPARATOR) > 0) {
        const args = icon.split(SEPARATOR);
        return this.getIconSourceByNamespace(args[0], args[1]);
      } else {
        return this.getIconSourceByNamespace(this.defaultProvider, icon);
      }
    } else {
      return {
        url: icon,
        allowColorOverride: true
      };
    }
  }

  public getIconSourceByNamespace(namespace: string, icon: string): IconSource {
    // console.log('IconService.getUrlByNamespace', namespace + ', ' + icon);
    const provider = this.providers.get(namespace);
    if (!provider) {
      console.warn('Icon provider not found', provider);
      return {
        url: icon,
        allowColorOverride: true
      };
    }
    const finalUrl = provider.url.replace(REPLACE_SYMBOL, icon);
    // console.log('IconService.getUrlByNamespace url', svgUrl);
    return {
      url: finalUrl,
      allowColorOverride: provider.allowColorOverride
    };
  }


}
