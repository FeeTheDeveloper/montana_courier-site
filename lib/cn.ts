/**
 * Merge class names — filters out falsy values and joins.
 * No external dependencies.
 */
type Primitive = string | number | boolean | null | undefined;
export type ClassValue = Primitive | Primitive[];

export function cn(...inputs: ClassValue[]): string {
  const result: string[] = [];
  for (const input of inputs) {
    if (Array.isArray(input)) {
      for (const item of input) {
        if (item && item !== true) result.push(String(item));
      }
    } else if (input && input !== true) {
      result.push(String(input));
    }
  }
  return result.join(" ").replace(/\s+/g, " ").trim();
}
