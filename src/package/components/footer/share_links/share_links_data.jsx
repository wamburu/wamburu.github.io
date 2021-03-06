import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CopyWrapper } from '../../commons/copy_wrapper/copy_wrapper';

import { ReactComponent as TwitterIcon } from '../../../assets/icons/brands/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';


export const SHARE_LINKS_DATA = Object.freeze({
    twitter: {
        icon: TwitterIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="View on {platform}"
                values={{ platform: 'Twitter' }}
            />
        ),
        getLink: () => 'https://twitter.com/denzelwamburu'
    },
    linkedIn: {
        icon: LinkedInIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="View on {platform}"
                values={{ platform: 'LinkedIn' }}
            />
        ),
        getLink: () => 'https://www.linkedin.com/in/wamburu/'
    },
    copyShareUrl: {
        icon: (props) => (
            <CopyWrapper value={(typeof window === 'undefined' ? {} : window).location?.href}>
                <ShareIcon {...props} />
            </CopyWrapper>
        ),
        tooltipTranslation: <FormattedMessage id="Footer.shareLinks.copyUrl" defaultMessage="Copy profile's URL" />
    }
});

