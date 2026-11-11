import { definePlugin } from "@oxlint/plugins";
import { maxPositionalParams } from "./rules/max-positional-params.ts";
import { namingConvention } from "./rules/naming-convention.ts";
import { noNamedReexport } from "./rules/no-named-reexport.ts";

export default definePlugin({
  meta: { name: "blog" },
  rules: {
    "max-positional-params": maxPositionalParams,
    "naming-convention": namingConvention,
    "no-named-reexport": noNamedReexport,
  },
});
