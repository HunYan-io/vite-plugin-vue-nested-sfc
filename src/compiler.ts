import { createRequire } from "node:module";
import type * as _compiler from "vue/compiler-sfc";

export type CompilerSfc = typeof _compiler;

export function resolveCompiler(root: string): CompilerSfc {
  // resolve from project root first, then fallback to peer dep (if any)
  const compiler = tryResolveCompiler(root) || tryResolveCompiler();
  if (!compiler) {
    throw new Error(
      `Failed to resolve vue/compiler-sfc.\n` +
        `@vitejs/plugin-vue requires vue (>=3.2.25) ` +
        `to be present in the dependency tree.`
    );
  }

  return compiler;
}

function tryResolveCompiler(root?: string) {
  const vueMeta = tryRequire("vue/package.json", root);
  // make sure to check the version is 3+ since 2.7 now also has vue/compiler-sfc
  if (vueMeta && vueMeta.version.split(".")[0] >= 3) {
    return tryRequire("vue/compiler-sfc", root);
  }
}

const _require = createRequire(import.meta.url);
function tryRequire(id: string, from?: string) {
  try {
    return from
      ? _require(_require.resolve(id, { paths: [from] }))
      : _require(id);
  } catch {
    // ignore
  }
}
