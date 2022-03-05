import {extendTheme} from "@chakra-ui/react";
import {createBreakpoints, darken, mode, whiten} from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        html: {
            padding: 0,
            margin: 0,
            boxSizing: 'borderbox'
        },
        body: {
            bg: mode('#fff', '#000')(props)
        }
    })
}

const components = {
// Insert all chakra components here
    Text : {
        variants : {
            'Hello' : (props) => ({
                fontSize: '2em'
            })
        }
    }
}

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '780px',
    lg: '1024px',
    xl: '1280px'
})

const theme = extendTheme({
    styles,
    breakpoints,
    components
})

export default theme