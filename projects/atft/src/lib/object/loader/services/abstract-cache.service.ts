export abstract class AbstractCacheService<V> {

  protected cache = new Map<string, Promise<V>>();

  public async load(key: string): Promise<V> {
    const cacheHit = this.cache.get(key);
    if (cacheHit) {
      // console.log('AbstractCacheService.cacheHit', key);
      return cacheHit;
    } else {
      // console.log('AbstractCacheService.cacheMiss', key);
      const j: any = key;

      const cacheMiss = this.getValue(key);
      this.cache.set(key, cacheMiss);
      return cacheMiss;
    }
  }

  protected abstract getValue(key: string): Promise<V>;

}
