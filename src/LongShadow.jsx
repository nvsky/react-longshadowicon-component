const React = require('react');
const classNames = require('classnames');

const Login = React.createClass({
  propTypes: {
    prefixCls: React.PropTypes.string,
    lOr: React.PropTypes.string,
    boxSize: React.PropTypes.number,
    maxContent: React.PropTypes.number,
    iconUrl: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      prefixCls: 'rc-lsi',
      lOr: 'right',
      boxSize: 73,
      maxContent: 45,
      iconUrl: ''
    };
  },
  render() {
    const {
      prefixCls,
      ...restProps
    } = this.props;
    const seccondInput = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-rshadow`]: restProps.lOr=='right' ? true : false,
      [`${prefixCls}-lshadow`]: restProps.lOr=='left' ? true : false
    });
    return (
      <div className={seccondInput} style={{width: `${restProps.boxSize}px`, height: `${restProps.boxSize}px`}}  >
        <img className={`${prefixCls}-ele`} style={{"max-width": `${restProps.maxContent}px`, "max-height": `${restProps.maxContent}px`}} src={restProps.iconUrl} />
      </div>
    );
  },
});

module.exports = Login;
