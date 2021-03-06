import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        width: pxToRem(16),
        height: pxToRem(16),
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        boxShadow: `inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)`,
        borderRadius: theme.circleBorderRadius,
        '$root.Mui-focusVisible &': {
            outline: `${pxToRem(2)} auto rgba(19,124,189,1)`,
            outlineOffset: pxToRem(12),
        },
        'input:hover ~ &': {
            backgroundColor: theme.radioButtonHoverColor,
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: theme.radioButtonHoverColor,
        },
    },
    checkedIcon: {
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            width: pxToRem(16),
            height: pxToRem(16),
            display: 'block',
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: theme.palette.info.dark,
        },
    },
}));

export default useStyles;
