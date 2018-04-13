import {connect, Provider as ReduxProvider} from 'react-redux'
import {IntlProvider} from 'react-intl'
import React from 'react'
import PropTypes from 'prop-types'

const Provider = ({store, ...props}) => {
    return (
        <ReduxProvider store={store}>
            <IntlProvider {...props} />
        </ReduxProvider>
    )
}

Provider.propTypes = {
    children: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
/*
    Alternative:
    const {intl} = state
    return {
        locale: state.getIn(["intl", "locale"]),
        messages: state.getIn(["intl", "messages"]),
    }
*/
    const {intl} = state.toJS()
    return {
        ...intl,
    }
}

export default connect(mapStateToProps)(Provider)
