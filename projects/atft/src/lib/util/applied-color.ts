/**
 * Fix color number binding issues
 * @param color Color number from binding input
 * @param defaultColor default value in case of binding issues
 */
export function appliedColor(color: string, defaultColor?: string): string {
  let resultColor = (defaultColor ? defaultColor : '0xffffff');
  if (color !== undefined  ) {
      resultColor = (parseInt(color, 16) * 1).toString();
  }
  return resultColor;
}
