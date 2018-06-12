// ------------------------------------
// Подробнее: https://github.com/mixtur/webpack-spritesmith
// ------------------------------------

import { resolve } from 'path'
import SpritesmithPlugin from 'webpack-spritesmith'

export default () => ({
    plugins: [
        new SpritesmithPlugin({
            src: {
                cwd: resolve(__dirname, 'src', 'components', 'spritesmith', 'icons'),
                glob: '*.png'
            },
            target: {
                image: resolve(__dirname, 'src', 'components', 'spritesmith', 'sprite.png'),
                css: resolve(__dirname, 'src', 'components', 'spritesmith', 'sprite.scss')
            },
            spritesmithOptions: {
                padding: 10
            },
            apiOptions: {
                cssImageRef: 'sprite.png'
            }
        })
    ]
})
