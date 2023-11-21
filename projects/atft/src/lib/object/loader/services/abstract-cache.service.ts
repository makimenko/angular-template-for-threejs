export abstract class AbstractCacheService<V> {

  protected cache = new Map<string, Promise<V>>();

  public async load(key: string): Promise<V> {
    const cacheHit = this.cache.get(key);
    if (await cacheHit) {
      // console.log('AbstractCacheService.cacheHit', key);
      if (cacheHit) {
        return cacheHit;
      } else {
        return Promise.reject("Failed to get value from cache")
      }
    } else {
      // console.log('AbstractCacheService.cacheMiss', key);
      const cacheMiss = this.getValue(key);
      this.cache.set(key, cacheMiss);
      return cacheMiss;
    }
  }

  protected abstract getValue(key: string): Promise<V>;

}
