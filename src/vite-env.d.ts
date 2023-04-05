/// <reference types="vite/client" />

declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: DefineComponent<{}, {}, any>;
    export default Component;
}
