import React from 'react'
import PropTypes from 'prop-types'
import BodySection from './BodySection'
import { StyleSheet, css} from 'aphrodite'

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(styles.Margin)}>
        <BodySection title={this.props.title} children={this.props.children}></BodySection>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  Margin: {
    marginBottom: '40px'
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}

BodySectionWithMarginBottom.defaultProps = {
  title: ''
}

export default BodySectionWithMarginBottom;
