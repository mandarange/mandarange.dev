import type { MDXComponents } from "mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
