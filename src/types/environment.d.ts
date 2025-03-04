/// <reference types="next" />
/// <reference types="next/types/global" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
