declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// src/shims-svg.d.ts
// declare module "*.svg" {
//   import { DefineComponent } from "vue";
//   const content: DefineComponent<{}, {}, any>;
//   export default content;
// }

declare module "*.css";

// src/shims-scss.d.ts
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
