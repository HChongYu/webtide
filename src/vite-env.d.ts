/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module '@'
interface ImportMetaEnv {
	readonly VITE_BASE_URL: string
} 

interface ImportMeta {
  readonly env: ImportMetaEnv
}