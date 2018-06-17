// Scripts
import 'scripts/scripts'

// Styles
import 'styles/styles.scss'

if (document.querySelector('#root')) {
    import(/* webpackChunkName: 'react-styles' */ 'styles/styles.scss')
}
