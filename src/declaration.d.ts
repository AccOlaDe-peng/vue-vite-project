declare module "*.svg" {
  import { DefineComponent } from "vue";
  const content: DefineComponent<{}, {}, any>;
  export default content;
}
