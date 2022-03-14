let cachedCanUseIntersectionObserver: boolean | undefined = undefined

export const canUseIntersectionObserver = () =>
  cachedCanUseIntersectionObserver ??
  (cachedCanUseIntersectionObserver =
    typeof window !== 'undefined' &&
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'boundingClientRect' in IntersectionObserverEntry.prototype)
