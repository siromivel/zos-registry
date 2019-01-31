import React, { PureComponent } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import AntdIcon from '@ant-design/icons-react'
import { GithubFill } from '@ant-design/icons'

export const GitHubLink = class _GitHubLink extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    cssClassNames: PropTypes.string
  }

  static defaultProps = {
    cssClassNames: 'package-item--github-icon'
  }

  render () {
    return (
      <a
        className={classnames(
          'is-text',
          'button',
          'button-has-icon',
          this.props.cssClassNames
        )}
        target='_blank'
        rel='noopener noreferrer'
        href={this.props.url}
      >
        <AntdIcon type={GithubFill} className='antd-icon' />
        {this.props.viewLink && <span className='is-monospaced is-size-7 has-text-link'>View on GitHub</span>}
      </a>
    )
  }
}
