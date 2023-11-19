import { ConfigContext, ExpoConfig } from '@expo/config'
import dotenv from 'dotenv'

dotenv.config()

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID || 'b8377b9f-cf63-48ef-9c22-96bd46599703',
    },
  },
  owner: process.env.EAS_OWNER || 'robomatic',
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  platforms: ['ios', 'android'],
  name: 'T4 App',
  slug: 'behaviorbucks',
  updates: {
    url: 'https://u.expo.dev/85fc6ccd-0ce1-4e4d-804c-b15df989f97e',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
})
