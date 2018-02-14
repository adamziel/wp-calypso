/** @format */
/**
 * External dependencies
 */

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { flow } from 'lodash';

/**
 * Internal dependencies
 */
import { getSelectedSiteId } from 'state/ui/selectors';
import { isDomainOnlySite } from 'state/selectors';
import { localize } from 'i18n-calypso';

class DomainPrimaryFlag extends Component {
	render() {
		const { isDomainOnly, domain, translate } = this.props;

		return domain.isPrimary && ! isDomainOnly ? (
			<span> { translate( 'Primary Domain' ) } </span>
		) : null;
	}
}

DomainPrimaryFlag.propTypes = {
	domain: PropTypes.object.isRequired,
	isDomainOnly: PropTypes.bool,
	translate: PropTypes.func.isRequired,
};

export default flow(
	localize,
	connect( state => ( {
		isDomainOnly: isDomainOnlySite( state, getSelectedSiteId( state ) ),
	} ) )
)( DomainPrimaryFlag );
