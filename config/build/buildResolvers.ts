import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], //какие расщирения не указывать при импорте
  };
}
