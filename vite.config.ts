import path from 'node:path'
import process from 'node:process'
import { type UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import terser from '@rollup/plugin-terser'

const pathSrc = path.resolve(__dirname, 'src')
const lifecycle = process.env.npm_lifecycle_event

function getConfigs(): UserConfig {
  return lifecycle === 'lib'
    ? {
        publicDir: false,
        build: {
          lib: {
            entry: path.resolve(__dirname, 'packages/index.ts'),
            name: 'GeekerTable',
            fileName: format => `index.${format}.js`,
          },
          // https://rollupjs.org/guide/en/#big-list-of-options
          rollupOptions: {
            treeshake: true,
            external: ['vue', 'element-plus'],
            output: {
              globals: {
                'vue': 'Vue',
                'element-plus': 'ElementPlus',
              },
              exports: 'named',
            },
            plugins: [terser({ compress: { drop_console: true } })],
          },
        },
      }
    : ({
        base: '/geeker-table/',
        build: {
          sourcemap: false,
          chunkSizeWarningLimit: 4000,
        },
      } as any)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  plugins: [vue(), vueJsx()],
  ...getConfigs(),
})
