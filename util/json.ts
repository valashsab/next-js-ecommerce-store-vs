import sjson from 'secure-json-parse';
import { Product } from '../app/products/[productId]/actions';

export function parseJson(stringifiedJson: string): Product[] | undefined {
  if (!stringifiedJson) return undefined;
  try {
    return sjson(stringifiedJson);
  } catch {
    return undefined;
  }
}
