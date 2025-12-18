import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY;

const notConfiguredError = new Error(
  "Supabase is not configured. Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY."
);

const createStubQuery = () => {
  const result = { data: null, error: notConfiguredError };
  const builder = {
    select: () => builder,
    insert: () => builder,
    update: () => builder,
    delete: () => builder,
    eq: () => builder,
    order: () => builder,
    in: () => builder,
    maybeSingle: () => builder,
    limit: () => builder,
    or: () => builder,
    single: () => builder,
    then: (resolve, reject) => Promise.resolve(result).then(resolve, reject),
  };
  return builder;
};

const createStubStorage = () => ({
  upload: async () => ({ data: null, error: notConfiguredError }),
  remove: async () => ({ data: null, error: notConfiguredError }),
  getPublicUrl: () => ({ data: { publicUrl: "" }, error: notConfiguredError }),
});

export const supabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!supabaseConfigured && typeof console !== "undefined") {
  console.warn(notConfiguredError.message);
}

export const supabase = supabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => createStubQuery(),
      storage: { from: () => createStubStorage() },
    };
