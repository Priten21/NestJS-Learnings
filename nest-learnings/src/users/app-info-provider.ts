export const appInfoProvider = {
  provide: 'APP_INFO',

  useFactory: (appName: string, version?: string) => {
    return {
      appName,
      version: version ?? 'unknown',
    };
  },

  inject: [
    'APP_NAME',
    { token: 'APP_VERSION', optional: true },
  ],
};
