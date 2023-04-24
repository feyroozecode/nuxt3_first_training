// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve} from 'path'
import path from 'path'

export default defineNuxtConfig({
  // add tailwindcss
    
    alias : {
       "@": resolve(__dirname, '/'),
    },
    
    css: [
        '~/assets/main.scss',
    ],
    postcss : {
        plugins : {
            tailwindcss : path.resolve(__dirname, './tailwind.config.js'),
            autoprefixer : {  },
        },
    },
})
