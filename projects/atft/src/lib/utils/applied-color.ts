/**
 * Fix color number binding issues
 * @param color Color number from binding input
 * @param defaultColor default value in case of binding issues
 */
export function appliedColor(color: number, defaultColor?: number): number {
  let resultColor = (defaultColor ? defaultColor : 0xffffff);
  if (color !== undefined  ) {
    resultColor = color * 1;
  }
  return resultColor;
}
