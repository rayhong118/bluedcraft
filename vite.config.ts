import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { compression } from "vite-plugin-compression2";
import imagemin from 'unplugin-imagemin/vite';

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '/',
    plugins: [
        react(),
        viteTsconfigPaths(),
        imagemin({
             conversion: [
                { from: 'jpeg', to: 'webp' },
                { from: 'png', to: 'webp' },
                { from: 'JPG', to: 'webp' },
            ],
        }),
        compression({
            algorithms: [
                'gzip',
                'brotliCompress'
            ],
        })],
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000  
        port: 3000,
    },
})