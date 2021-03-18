import {Injectable} from '@angular/core';

const SEPARATOR = ':';
const REPLACE_SYMBOL = '?';

export interface BaseAssetSource {
  url: string;
}

@Injectable()
export abstract class AbstractAssetService<T extends BaseAssetSource> {

  protected providers: Map<string, T> = new Map();
  abstract defaultProvider;

  constructor() {
    this.init();
  }

  protected abstract init();

  public registerProvider(key: string, source: T) {
    this.providers.set(key, source);
  }

  public setDefaultProvider(key: string) {
    this.defaultProvider = key;
  }

  public getSource(icon: string): T {
    if (icon) {
      if (icon.indexOf(SEPARATOR) > 0) {
        const args = icon.split(SEPARATOR);
        return this.getSourceByNamespace(args[0], args[1]);
      } else {
        return this.getSourceByNamespace(this.defaultProvider, icon);
      }
    } else {
      return this.defaultIfNotFound(icon);
    }
  }

  public getSourceByNamespace(namespace: string, icon: string): T {
    // console.log('AbstractAssetService.getUrlByNamespace', namespace + ', ' + icon);
    const provider = this.providers.get(namespace);
    if (!provider) {
      console.warn('Icon provider not found', provider);
      return this.defaultIfNotFound(icon);
    }
    const finalUrl = provider.url.replace(REPLACE_SYMBOL, icon);
    // console.log('AbstractAssetService.getUrlByNamespace url', svgUrl);
    return this.getFinalResult(finalUrl, provider);
  }

  public abstract getFinalResult(finalUrl:string, provider: T): T;

  public abstract defaultIfNotFound(icon: string): T;

}
